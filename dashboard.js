// Event listeners for sidebar links
document.getElementById("profile-link").addEventListener("click", () => {
    showContent("profile-content");
});

document.getElementById("projects-link").addEventListener("click", () => {
    showContent("projects-content");
});

document.getElementById("contact-link").addEventListener("click", () => {
    showContent("contact-content");
});

// Function to show the selected content and hide others
function showContent(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add("active");
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        sidebar.classList.toggle("open");
    } else {
        console.error("Sidebar element not found.");
    }
}
