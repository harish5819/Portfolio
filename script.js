// Script to dynamically load project details (as an example)
// You can replace this with your actual project data later
document.querySelector('.resume-button').addEventListener('click', function() {
    alert('Your resume is being downloaded!');
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      {
        title: "E-commerce Website",
        description: "Developed a fully functional e-commerce website with HTML, CSS, and JavaScript.",
        link: "https://github.com/harishkumar/ecommerce-website"
      },
      {
        title: "Crime Rate Prediction",
        description: "Built a Python-based machine learning model to predict crime rates.",
        link: "https://github.com/harishkumar/crime-rate-prediction"
      },
      {
        title: "Portfolio Website",
        description: "Created a dynamic and professional portfolio website using HTML, CSS, and JavaScript.",
        link: "https://github.com/harishkumar/portfolio"
      }
    ];
  
    const projectList = document.getElementById("project-list");
  
    projects.forEach(project => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
      
      projectItem.innerHTML = `
        <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
        <p>${project.description}</p>
      `;
      
      projectList.appendChild(projectItem);
    });
  });
  
  // Form validation for Contact Form
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for your message, " + name + "! I will get back to you soon.");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
// Scroll to Top Button
const scrollToTopButton = document.getElementById("scrollToTop");

// Show button when user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
scrollToTopButton.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  
// Select the form and the response message container
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

// Add an event listener to handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from reloading the page

  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate input (simple check)
  if (name && email && message) {
    // Simulate a successful form submission
    responseMessage.style.color = 'green';
    responseMessage.innerHTML = `Thank you for your message, ${name}! We will get back to you at ${email}.`;
    
    // Log the form data to the console (for testing purposes)
    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Optionally, clear the form fields after submission
    form.reset();
  } else {
    // Show error message if any field is empty
    responseMessage.style.color = 'red';
    responseMessage.innerHTML = 'Please fill out all fields before submitting.';
  }
});
