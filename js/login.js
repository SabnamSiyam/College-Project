// console.log('login-js Connected');

//   ***Login section *****
document.getElementById("btn-submit").addEventListener("click", function () {
  const password = getInputFieldValueForLoginById("input-password");
  const emails = getInputFieldValueForLoginById("input-email");
  const email=emails.toLowerCase();
  console.log(email);
  // console.log(email, password);
  if (password == "651283" && email == "sabnam@gmail.com") {

    window.location.href = "/Bank_DashBoard.html";
  } else {
    alert("Please enter the correct email & password provided by your Bank.!!");
  }
});




