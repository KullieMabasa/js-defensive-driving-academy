
//JavaScript code used to validate the password
function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");

    // Check if the password is at least eight characters long
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least eight characters long.";
        return false;
    }

    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        passwordError.textContent = "Password must contain at least one uppercase letter.";
        return false;
    }

    // Check if the password contains at least one digit
    if (!/\d/.test(password)) {
        passwordError.textContent = "Password must contain at least one digit.";
        return false;
    }

    // Check if the password contains at least one of the following symbols: !, @, #, or $
    if (!/[!@#$]/.test(password)) {
        passwordError.textContent = "Password must contain at least one of the following symbols: !, @, #, or $.";
        return false;
    }

  
    passwordError.textContent = "";
    return true;
}
  

// Get a reference to the registration form
let registrationForm = document.getElementById("registration-form");

// Add an event listener to the form submission
registrationForm.addEventListener("submit", function (event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Collect client information
    let preferredName = document.getElementById("preferred-name").value;
    let clientFullNames = document.getElementById("client-full-names").value;
    let surname = document.getElementById("surname").value;
    let idNumber = document.getElementById("id-number").value;
    let telephoneWork = document.getElementById("telephone-work").value;
    let cellphoneNumber = document.getElementById("cellphone-number").value;
    let email = document.getElementById("email").value;
    let addressLine1 = document.getElementById("address-line1").value;
    let addressLine2 = document.getElementById("address-line2").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let code = document.getElementById("code").value;
    let addressLine1Postal = document.getElementById("address-line1-postal").value;
    let addressLine2Postal = document.getElementById("address-line2-postal").value;
    let cityPostal = document.getElementById("city-postal").value;
    let statePostal = document.getElementById("state-postal").value;
    let countryPostal = document.getElementById("country-postal").value;
    let codePostal = document.getElementById("code-postal").value;
    let learnersLicense = document.getElementById("learners-license").value;
    let learnersLicenseExpiry = document.getElementById("learners-license-expiry").value;
    let parentContact = document.getElementById("parent-contact").value;
    let licenseType = document.getElementById("license-type").value;

    let clientData = `preferredName=${encodeURIComponent(preferredName)}&clientFullNames=${encodeURIComponent(clientFullNames)}&surname=${encodeURIComponent(surname)}&idNumber=${encodeURIComponent(idNumber)}&telephoneWork=${encodeURIComponent(telephoneWork)}&cellphoneNumber=${encodeURIComponent(cellphoneNumber)}&email=${encodeURIComponent(email)}&addressLine1=${encodeURIComponent(addressLine1)}&addressLine2=${encodeURIComponent(addressLine2)}&city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&country=${encodeURIComponent(country)}&code=${encodeURIComponent(code)}&addressLine1Postal=${encodeURIComponent(addressLine1Postal)}&addressLine2Postal=${encodeURIComponent(addressLine2Postal)}&cityPostal=${encodeURIComponent(cityPostal)}&statePostal=${encodeURIComponent(statePostal)}&countryPostal=${encodeURIComponent(countryPostal)}&codePostal=${encodeURIComponent(codePostal)}&learnersLicense=${encodeURIComponent(learnersLicense)}&learnersLicenseExpiry=${encodeURIComponent(learnersLicenseExpiry)}&parentContact=${encodeURIComponent(parentContact)}&licenseType=${encodeURIComponent(licenseType)}`;

    document.getElementById("client-info").value = clientData;

    registrationForm.submit();
});
