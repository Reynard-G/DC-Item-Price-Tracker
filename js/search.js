function fastSearch(search, objects) {
    const searchResults = objects.filter((object) => {
        for (const _ in object) {
            if (object["Item Name"].toLowerCase().includes(search)) {
                return true;
            }
        }
    });
    return searchResults;
}

// Get data from latest JSON without blocking the UI
document.querySelector('#searchbar').addEventListener('input', async function (e) {
    const search = e.target.value.toLowerCase();
    const searchResults = fastSearch(search, tableData);

    // Clear the table and add new rows for each object in the search results
    table.clear().rows.add(searchResults).draw();
});