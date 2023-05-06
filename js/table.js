// Initialize the table
var table = $('.results-table').DataTable({
    ajax: {
        url: "data/April 2023.json",
        dataSrc: "",
    },
    columns: [
        { data: "Date", width: `${100 / 6}%` },
        { data: "Location", width: `${100 / 6}%` },
        { data: "Store", width: `${100 / 6}%` },
        { data: "Item Name", width: `${100 / 6}%` },
        { data: "buyPrice", width: `${100 / 6}%` },
        { data: "sellPrice", width: `${100 / 6}%` },
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