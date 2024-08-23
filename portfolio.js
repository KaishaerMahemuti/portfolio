function toggleDropdown() {
    const dropdownContent = document.getElementById("contactInfo");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// close the dropdown when out side is clicked 
window.onclick = function(event) {
    const dropdownContent = document.getElementById("contactInfo");
    if (!event.target.matches('.dropdown-btn') && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
    }
};
  ``