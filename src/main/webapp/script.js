// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation (you can replace this with actual authentication logic)
    // For demonstration, let's assume 'admin' and 'password' are valid credentials
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the main page after successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
