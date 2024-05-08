// Funtion that read user email and password to sig.in on website
function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Check if is empty user email and or passowrd
    if (email === "" || password === "") {
      alert("Invalid email or passowrd");
      return;
    }
  

    // Go to home page
    window.location.href = "home.html";
  }