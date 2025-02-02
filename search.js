function searchFunction() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("searchResults");
    
    // Dummy data to search from (replace with your actual data)
    let data = [
        "HTML tutorial",
        "CSS guide",
        "JavaScript basics",
        "React JS introduction",
        "Web development tips"
    ];

    // Filter data based on search query
    let filteredResults = data.filter(item => item.toLowerCase().includes(searchQuery));

    // Display the search results or a message if no results are found
    if (filteredResults.length > 0) {
        resultsDiv.innerHTML = `<ul>${filteredResults.map(item => `<li>${item}</li>`).join('')}</ul>`;
    } else {
        resultsDiv.innerHTML = `<p>There is no item with that name.</p>`;
    }
}
