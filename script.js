// Lightbox code
const lightbox = document.querySelector('.lightbox');
const images = document.querySelectorAll('.gallery img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'block';
    const img = document.createElement('img');
    img.src = image.src;
    lightbox.appendChild(img);
  });
});

// Close lightbox
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightbox.innerHTML = '';
});

// Copy home address to postal address
function copyHomeAddressToPostalAddress() {
  const homeAddress = document.getElementById('homeAddress').value;
  document.getElementById('postalAddress').value = homeAddress;
}

// Form validation code
const form = document.getElementById('clientRegistrationForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Validate form fields
  const preferredName = document.getElementById('preferredName').value;
  const clientFullNames = document.getElementById('clientFullNames').value;
  // Validate other form fields
  if (preferredName === '' || clientFullNames === '') {
    alert('Please fill in all required fields.');
    return;
  }
  // Validate credit card number
  const creditCardNumber = document.getElementById('creditCardNumber').value;
  if (!/^\d{13,
  // Get the form element
const form = document.getElementById('clientRegistrationForm');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the form from submitting by default
  e.preventDefault();

  // Get the form fields
  const preferredName = document.getElementById('preferredName').value;
  const clientFullNames = document.getElementById('clientFullNames').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Check if all required fields are filled in
  if (preferredName === '' || clientFullNames === '' || surname === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Check if the email address is valid
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if the password and password confirmation match
  if (password !== confirmPassword) {
    alert('Password and password confirmation do not match.');
    return;
  }

const form = document.getElementById('clientRegistrationForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  if (!validatePassword(password)) {
    alert('Password does not meet the requirements');
    return;
  }

  // Rest of your form submission code...
});

function validatePassword(password) {
  const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$]).{8,}$/;
  return passwordRegex.test(password);
}
  // If all checks pass, submit the form
  form.submit();
});