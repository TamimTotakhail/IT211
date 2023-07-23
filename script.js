function validatePassword(password) {
    // Password should have at least 8 characters, at least one uppercase letter, and at least one lowercase letter.
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 8;
    return isValidLength && hasUppercase && hasLowercase;
  }
  
  function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");
  
    // Check if first and last names are NOT missing
    if (firstName === "" || lastName === "") {
      showMessage("Please enter both first and last names.", "invalid");
      return;
    }
  
    // Check if password is valid
    if (!validatePassword(password)) {
      showMessage("Invalid password. Password should have at least 8 characters, at least one uppercase letter, and at least one lowercase letter.", "invalid");
      return;
    }
  
    // If all three fields are valid
    showMessage("All form entries are valid!", "success");
  }
  
  function showMessage(message, status) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.className = "message " + status;
    messageDiv.style.display = "block";
  }
  