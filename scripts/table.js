// Initialize the table
var table = $('.results-table').DataTable({
    processing: true,
    serverSide: true,
    ajax: {
        url: "https://localhost:5500/scripts/server_processing.php",
        type: "GET",
        data: function (outData) {
            console.log(outData)
            return outData;
        },
        dataFilter: function (inData) {
            console.log(inData)
            return inData;
        },
        error: function (error, status) {
            console.log(error)
            console.log(status)
        }
    },
    columns: [
        { data: "ItemId", mData: "ItemId" },
        { data: "Mode", mData: "Mode" },
        { data: "Amount", mData: "Amount" },
        { data: "Quantity", mData: "Quantity" },
        { data: "Time", mData: "Time" }
    ],
    /*
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
    ordering: true,*/
});