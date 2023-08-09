function openModal() {
  let overlay = document.querySelector('.overlay');
  let modal = document.querySelector('.modal');
  let eygLogo = document.getElementById('eyg-logo')
  
  overlay.style.display = 'block';
  modal.style.display = 'block';
  eygLogo.style.display = 'flex'
  document.getElementById('survey-form').classList.add('slide-in');
}

function closeModal() {
  let overlay = document.querySelector('.overlay');
  let modal = document.querySelector('.modal');
  
  overlay.style.display = 'none';
  modal.style.display = 'none';
  location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
  let surveyForm = document.getElementById("surveyForm");
  let headingParagraph = document.getElementById("heading-p");

document.addEventListener("submit", function(event) {
  event.preventDefault();
  surveyForm.style.display = "none";
  headingParagraph.textContent = "Thank you for your submission!"; 
 
  });
});
