var formx = document.getElementById("myform");
document.getElementById("myform").addEventListener("submit", function (event) {
  console.log("IN Listener");
  event.preventDefault()
});

function validate() {
  var nm = document.getElementsByName("name")[0].value;
  var pwd = document.getElementsByName("mpin")[0].value;
  var accn = document.getElementsByName("accn")[0].value;
  var add = document.getElementsByName("addrs")[0].value;
  var phn = document.getElementsByName("phn")[0].value;
  var eml = document.getElementsByName("email")[0].value;
  var bd = document.getElementsByName("birthday")[0].value;
  var patt = /^\d{10}$/;
  var chkphn=patt.test(phn);
  console.log(chkphn);
  console.log("In func");
  if (nm == "") {
    var x = document.getElementById("snackbarnm");
    x.className = "show";
    console.log("In If loop");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  else if (pwd == "") {
    var x = document.getElementById("snackbarpwd");
    x.className = "show";
    console.log("In If loop");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  else if (eml == "") {
    var x = document.getElementById("snackbareml");
    x.className = "show";
    console.log("In If loop");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  else if (phn == "") {
    var x = document.getElementById("snackbarphn");
    x.className = "show";
    console.log("In If loop");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  else if (accn == "") {
    var x = document.getElementById("snackbaracc");
    x.className = "show";
    console.log("In If loop");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  else if (add == "") {
    var x = document.getElementById("snackbaradd");
    x.className = "show";
    console.log("In If loop");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  else if (bd == "") {
    var x = document.getElementById("snackbarbd");
    x.className = "show";
    console.log("In If loop");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  else if (chkphn == false) {
    var x = document.getElementById("snackbarphnck");
    x.className = "show";
    console.log("In If loop");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  else {
    window.location.href = "./login.html";
  }

}