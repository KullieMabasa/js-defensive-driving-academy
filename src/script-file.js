// Start - lightbox

// Title for the slideshow
let lightboxTitle = "My Gallery";

// Names of the image files shown in the slideshow
let imgFiles = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
];

// Captions associated with each image
let imgCaptions = [
  "A Female Student jumping",
  "3 Students + Instructor",
  "4 male Students",
  "A Male Students",
  "2 Female Students",
  "2 Female Students + a Male Student",
];

// Count of images in the slideshow
let imgCount = imgFiles.length;

// Create the lightbox gallery
let lightboxContainer = document.getElementById("lightbox");

// Scrolling gallery
let galleryContainer = document.querySelector(".gallery");

// Individual image elements
for (let i = 0; i < imgCount; i++) {
  let imageElement = document.createElement("img");
  imageElement.src = imgFiles[i];
  imageElement.alt = "Image " + (i + 1);
  imageElement.addEventListener("click", expandImage.bind(null, i));
  galleryContainer.appendChild(imageElement);
}

// Function to expand an image when clicked
function expandImage(imageIndex) {
  let expandedContainer = document.createElement("div");
  expandedContainer.classList.add("expanded-container");

  let expandedImage = document.createElement("img");
  expandedImage.src = imgFiles[imageIndex];
  expandedImage.alt = "Image " + (imageIndex + 1);
  expandedContainer.appendChild(expandedImage);

  let caption = document.createElement("p");
  caption.textContent = imgCaptions[imageIndex];
  expandedContainer.appendChild(caption);

  lightboxContainer.appendChild(expandedContainer);

  // Dim the rest of the page
  let mainSection = document.querySelector("main");
  mainSection.classList.add("dimmed");

  // Add a click event listener to close the expanded image
  expandedContainer.addEventListener("click", function () {
    lightboxContainer.removeChild(expandedContainer);
    mainSection.classList.remove("dimmed");
  });
}
// End - Lightbox

// Start - Registration Form

// Declare the copyAddress variable and add an event listener to run copyFormDetails() when clicked
let copyAddress = document.getElementById("copy-address");
copyAddress.addEventListener("click", copyFormDetails);

function copyFormDetails() {
  // Retrieve form values
  let addressLine1 = document.getElementById("address-line1");
  let addressLine2 = document.getElementById("address-line2");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let code = document.getElementById("code");
  let copyAddress = document.getElementById("copy-address").checked;

  if (copyAddress) {
    document.getElementById("address-line1-postal").value = addressLine1.value;
    document.getElementById("address-line2-postal").value = addressLine2.value;
    document.getElementById("city-postal").value = city.value;
    document.getElementById("state-postal").value = state.value;
    document.getElementById("code-postal").value = code.value;
  }
}

// Declare formElements and fieldCount variables
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;

// Declare the submitButton variable referencing the element with the id "submit-button"
let submitButton = document.getElementById("submit-button");

// Apply event listeners to each form element
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Function to show validation error message
function showValidationError(evt) {
  // Prevent the browser's default response to invalid data
  evt.preventDefault();

  // Set the error message in the errorBox element
  submitButton.textContent = "Complete all highlighted fields";
}

window.addEventListener("load", function () {
  // Retrieve the field/value pairs from the URL
  var formData = location.search.slice(1);
  formData = formData.replace(/\+/g, " ");
  formData = decodeURIComponent(formData);
  let formFields = formData.split(/[&=]/g);

  // Write the field values to the order-submit table
  document.getElementById("preferred-name").textContent = formFields[1];
  document.getElementById("client-full-names").textContent = formFields[3];
  document.getElementById("surname").textContent = formFields[5];
  document.getElementById("id-number").textContent = formFields[7];
  document.getElementById("telephone-work").textContent = formFields[9];
  document.getElementById("cellphone-number").textContent = formFields[11];
  document.getElementById("email").textContent = formFields[13];
  document.getElementById("address-line1").textContent = formFields[15];
  document.getElementById("address-line2").textContent = formFields[17];
  document.getElementById("city").textContent = formFields[19];
  document.getElementById("state").textContent = formFields[21];
  document.getElementById("country").textContent = formFields[23];
  document.getElementById("code").textContent = formFields[25];
  document.getElementById("learners-license").textContent = formFields[28];
  document.getElementById("parent-contact").textContent = formFields[29];
  document.getElementById("license-type").textContent = formFields[31];
  document.getElementById("lessons-required").textContent = formFields[33];
  document.getElementById("study-material").textContent = formFields[35];
  document.getElementById("credit-card-name").textContent = formFields[37];
});
