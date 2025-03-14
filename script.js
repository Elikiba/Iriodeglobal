const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

document.getElementById('jobForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    const jobDate = document.getElementById('jobDate').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const jobStatus = document.getElementById('jobStatus').value;
  
    console.log('Job Date:', jobDate);
    console.log('Job Description:', jobDescription);
    console.log('Job Status:', jobStatus);
  
    alert('Job data submitted successfully!');
  });


  // Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});