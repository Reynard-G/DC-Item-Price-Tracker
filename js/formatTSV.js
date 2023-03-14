function csvToObjects(str, splitter) {
    console.time("Loaded data in");

    // Split the csv string into an array of arrays
    const [keys, ...rest] = str
        .split("\n")
        .map((item) => item.split(splitter).map((item) => item.replace(/"/g, "")))
        .map((item) => item.map((item) => item.replace("\r", "")));

    // Create an object for each array in the rest array
    const formedArr = [];
    rest.forEach((item) => {
        const object = {};
        keys.forEach((key, index) => (object[key] = item[index]));
        formedArr.push(object);
    });

    console.timeEnd("Loaded data in");
    return formedArr;
}

function formatData(dataArr) {
    console.time("Finished formatting data in");

    // Remove the "username" key from each object efficiently
    console.time("Removed usernames in");
    const formattedArr = dataArr.map(({ Username, ...rest }) => rest);
    console.timeEnd("Removed usernames in");

    // Add a new key to each object named "price" and add the values by calculating the amount bought with its price efficiently.
    console.time("Calculated prices in");
    const pricedArr = formattedArr.map((item) => {
        item.Price = Number(item.Price) / item.Amount;
        delete item.Amount;
        return item;
    });
    console.timeEnd("Calculated prices in");

    // Create a Set of unique objects
    console.time("Created unique objects in");
    const uniqueSet = new Set(pricedArr.map(JSON.stringify));

    // Convert Set back to array
    const filteredArr = Array.from(uniqueSet).map(JSON.parse);
    console.timeEnd("Created unique objects in");

    // Create a new array of objects that combines the buy and sell prices efficiently.
    console.time("Combined buy and sell prices in");
    const finalArr = [];
    filteredArr.forEach((item) => {
        const index = finalArr.findIndex((obj) => obj["Item Name"] === item["Item Name"] && obj["Location"] === item["Location"] && obj["Store"] === item["Store"]);
        if (index === -1) {
            if (item["Transaction Type"] === "bought") {
                finalArr.push({
                    Date: item.Date,
                    Location: item.Location,
                    Store: item.Store,
                    "Item Name": item["Item Name"],
                    buyPrice: item.Price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 6 }),
                    sellPrice: "-",
                });
            } else if (item["Transaction Type"] === "sold") {
                finalArr.push({
                    Date: item.Date,
                    Location: item.Location,
                    Store: item.Store,
                    "Item Name": item["Item Name"],
                    buyPrice: "-",
                    sellPrice: item.Price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 6 }),
                });
            }
        } else {
            if (item["Transaction Type"] === "bought") {
                finalArr[index].buyPrice = item.Price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 6 });
            } else if (item["Transaction Type"] === "sold") {
                finalArr[index].sellPrice = item.Price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 6 });
            }
        }
    });
    console.timeEnd("Combined buy and sell prices in");

    console.timeEnd("Finished formatting data in");
    return finalArr;
}

// Initialize the table
const oneSixth = Decimal(100).div(6).toNumber();
var table = $('.results-table').DataTable({
    columns: [
        { data: "Date", width: `${oneSixth}%` },
        { data: "Location", width: `${oneSixth}%` },
        { data: "Store", width: `${oneSixth}%` },
        { data: "Item Name", width: `${oneSixth}%` },
        { data: "buyPrice", width: `${oneSixth}%` },
        { data: "sellPrice", width: `${oneSixth}%` },
    ],
    order: [[3, "asc"]],
    pageLength: 25,
    dom: 'Bfrtip',
    info: false,
    searching: false,
    paging: true,
    ordering: true,
    retrieve: true,
});

// On document ready
var tableData = [];
$(document).ready(async function () {
    // Load the csv data
    $.get("../data/January 2023.tsv", function (data) {
        // Convert csv to an array of objects
        const objects = csvToObjects(data, "\t");

        // Format the data
        tableData = formatData(objects);

        console.dir(tableData);
    }).then(() => {
        // Add the data to the table
        table.rows.add(tableData).draw();
    });
});
