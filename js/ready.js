// On document ready, initialize tableData from the JSON file
var tableData;
$(document).ready(async function () {
    tableData = await $.getJSON("data/April 2023.json");
});