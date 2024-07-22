
// Function to filter the table rows based on search input
function filterTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const tableRows = document.querySelectorAll("table tbody tr");

    tableRows.forEach((row) => {
    const columns = row.querySelectorAll("td");
    let displayRow = false;

    columns.forEach((column) => {
        const content = column.textContent.toUpperCase();
        if (content.includes(filter)) {
        displayRow = true;
        }
    });

    row.style.display = displayRow ? "table-row" : "none";
    });
}

// Event listener for the search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filterTable);

// Function to sort the table rows based on the first letter of the clicked column
function sortTable(columnIndex) {
    const table = document.querySelector("table");
    const rows = Array.from(table.querySelectorAll("tbody tr"));

    rows.sort((a, b) => {
    const aValue = a.querySelectorAll("td")[columnIndex].innerText.trim();
    const bValue = b.querySelectorAll("td")[columnIndex].innerText.trim();
    return aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
    });

    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";
    rows.forEach(row => tbody.appendChild(row));
}

// Event listener for column headers to trigger sorting
document.querySelectorAll("table th").forEach((header, index) => {
    header.addEventListener("click", () => sortTable(index-1));
    header.style.cursor = "pointer";
});