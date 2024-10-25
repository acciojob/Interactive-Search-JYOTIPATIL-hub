//your JS code here. If required.
function activateSearch() {
    const searchDiv = document.querySelector(".search");
    const searchInput = document.querySelector(".input");

    // Add the active class to the search div and focus on the input
    searchDiv.classList.add("active");
    searchInput.focus();
}
