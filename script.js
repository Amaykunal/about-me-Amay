document.addEventListener('DOMContentLoaded', function() {
    
    const yourCGPA = "8.25";
    const yourSGPA = "8.13"; 

    // Set the CGPA and SGPA values on the page
    const cgpaElement = document.getElementById('cgpaValue');
    const sgpaElement = document.getElementById('sgpaValue');

    if (cgpaElement) {
        cgpaElement.textContent = yourCGPA;
    }
    if (sgpaElement) {
        sgpaElement.textContent = yourSGPA;
    }

    
    const linkedinURL = "https://www.linkedin.com/in/amay-apurva-19713032b"; 
    const githubURL = "https://github.com/Amaykunal"; 

    const linkedinLink = document.querySelector('.contact-links a[aria-label="LinkedIn Profile"]');
    const githubLink = document.querySelector('.contact-links a[aria-label="GitHub Profile"]');

    if (linkedinLink) {
        linkedinLink.href = linkedinURL;
    }
    if (githubLink) {
        githubLink.href = githubURL;
    }

    
});
