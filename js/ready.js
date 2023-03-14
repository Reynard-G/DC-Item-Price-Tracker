// Initialize the table
const oneSixth = Decimal(100).div(6).toNumber();
var table = $('.results-table').DataTable({
    data: tableData,
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

var tableData;
$(document).ready(async function () {
    console.time("Finished loading in");

    // Load the json data
    console.time("Loaded data from json in")
    tableData = await $.getJSON("../data/January 2023.json");
    console.timeEnd("Loaded data from json in")
    console.dir(tableData);

    // Add the data to the table
    table.rows.add(tableData).draw();

    console.timeEnd("Finished loading in");
});
