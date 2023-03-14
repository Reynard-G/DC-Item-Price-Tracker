// Initialize the table
const oneSixth = Decimal(100).div(6).toNumber();
var table = $('.results-table').DataTable({
    ajax: {
        url: "data/January 2023.json",
        dataSrc: "",
    },
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
    dom: 'Bfrti<"bottom-wrapper"p>',
    deferRender: true,
    info: false,
    searching: false,
    paging: true,
    ordering: true,
});