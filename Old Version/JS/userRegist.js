// Funtion that read user data and regist him on website
function registUser() {

    var name = document.getElementById("name").value;
    var birthDate = document.getElementById("birthDate").value;
    var nif = document.getElementById("nif").value;
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