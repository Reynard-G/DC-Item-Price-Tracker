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
    responsive: true,
    columnDefs: [
        { responsivePriority: 1, targets: 2 },
        { responsivePriority: 2, targets: 3 },
        { responsivePriority: 3, targets: 4 },
        { responsivePriority: 4, targets: 5 },
        { responsivePriority: 5, targets: 1 },
        { responsivePriority: 6, targets: 0 },
    ],
    order: [[3, "asc"]],
    pageLength: 25,
    dom: 'Bfrti<"bottom-wrapper"p>',
    responsive: true,
    deferRender: true,
    info: false,
    searching: false,
    paging: true,
    ordering: true,
});