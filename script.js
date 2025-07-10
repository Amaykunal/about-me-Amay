document.addEventListener('DOMContentLoaded', function() {
    // IMPORTANT: Replace these with your actual CGPA and SGPA
    const yourCGPA = "8.5"; // Example: "8.5" or "8.75"
    const yourSGPA = "8.8"; // Example: "8.8" or "9.1"

    // Set the CGPA and SGPA values on the page
    const cgpaElement = document.getElementById('cgpaValue');
    const sgpaElement = document.getElementById('sgpaValue');

    if (cgpaElement) {
        cgpaElement.textContent = yourCGPA;
    }
    if (sgpaElement) {
        sgpaElement.textContent = yourSGPA;
    }

    // IMPORTANT: Replace these with your actual LinkedIn and GitHub URLs
    const linkedinURL = "https://www.linkedin.com/in/amay-apurva-19713032b"; // e.g., "https://www.linkedin.com/in/amayapurva"
    const githubURL = "https://github.com/Amaykunal"; // e.g., "https://github.com/amayapurva"

    const linkedinLink = document.querySelector('.contact-links a[aria-label="LinkedIn Profile"]');
    const githubLink = document.querySelector('.contact-links a[aria-label="GitHub Profile"]');

    if (linkedinLink) {
        linkedinLink.href = linkedinURL;
    }
    if (githubLink) {
        githubLink.href = githubURL;
    }

    console.log("Portfolio loaded. Remember to update your CGPA, SGPA, LinkedIn, and GitHub links in script.js!");
});