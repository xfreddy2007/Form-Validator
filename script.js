const form = document.getElementById('form');
const passward1El = document.getElementById('passward1');
const passward2El = document.getElementById('passward2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwardsmatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwards match
    if (passward1El.value === passward2El.value) {
        passwardsmatch = true;
        passward1El.style.borderColor = 'green';
        passward2El.style.borderColor = 'green';
    } else {
        passwardsmatch = false;
        message.textContent = 'Make sure passwards match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passward1El.style.borderColor = 'red';
        passward2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwards match
    if (isValid && passwardsmatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green'
    }
}

// Store the Form
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        passward: form.passward.value
    };
    // Now we just console.log our user data in the console for this front-end project, but it can be furthur used if combine with back-end sever, then pass the form data to the back-end server.
    // Make sure the passward is encrypted before sent to the back-end server:
    //      1. Through https protocol
    //      2. Use 2-way factor authentication
    // In back-end server, we get the form data in a POST body to the server:
    //      1. POST request are never cached
    //      2. POST request will not remain in the browser history
    //      3. No restriction on data length
    // IMPORTANT!! Never store passward in plaintext. Instead, use some npm packages to hash the passward: argon2, scrypt, or bcrypt(prefered).
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Vlidation Form
    validateForm();
    // Submite Data if Valid
    if (isValid && passwardsmatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);