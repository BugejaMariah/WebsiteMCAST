function validateForm() {
    // Get the input elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Check if email contains @
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check if message is at least 20 words
    var messageWords = message.split(" ");
    if (messageWords.length < 20) {
      alert("Please enter a message with at least 20 words.");
      return false;
    }
  
    // If all validation checks pass, submit the form
    return true;
  }
  