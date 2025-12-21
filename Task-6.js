
function validateForm() {   

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let type = document.getElementById("type").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("userTypeError").innerHTML = "";

    let valid = true;

    if(name === "") {
        document.getElementById("nameError").innerHTML = "Name is required.";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
        valid = false;
    }
    
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required.";
        valid = false;
    }
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required.";
        valid = false;
    }
    else if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least of 8 characters.";
        valid = false;
    }
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML = "Please confirm your password.";
        valid = false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
        valid = false;
    }
    if (type === "") {
        document.getElementById("userTypeError").innerHTML = "User type is required.";
        valid = false;
    }
    if (valid) {
        alert("Form submission successful");
    }
    else {
        alert("Form not submitted. Please try again.");
    }
    return valid;
}