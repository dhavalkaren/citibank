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
  var chkphn = patt.test(phn);
  console.log(chkphn);
  console.log("In func");
  if (nm == "") {
    var div = document.createElement("div");
    div.className = "alert alert-danger alert-dismissible";
    div.innerHTML = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>'&times;</a> <strong>ERROR!! Name Required..</strong>";
    div.style.width = "250px";
    div.style.marginLeft = "1050px";
    div.style.marginTop = "160px";
    document.getElementById("snackbarnm").appendChild(div);
  }
  else if (pwd == "") {
    var div = document.createElement("div");
    div.className = "alert alert-danger alert-dismissible";
    div.innerHTML = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>'&times;</a> <strong>ERROR!! Password Required..</strong>";
    div.style.width = "250px";
    div.style.marginLeft = "1050px";
    div.style.marginTop = "160px";
    document.getElementById("snackbarnm").appendChild(div);
  }
  else if (eml == "") {
    var div = document.createElement("div");
    div.className = "alert alert-danger alert-dismissible";
    div.innerHTML = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>'&times;</a> <strong>ERROR!! Email Required..</strong>";
    div.style.width = "250px";
    div.style.marginLeft = "1050px";
    div.style.marginTop = "160px";
    document.getElementById("snackbarnm").appendChild(div);
  }
  else if (phn == "") {
    var div = document.createElement("div");
    div.className = "alert alert-danger alert-dismissible";
    div.innerHTML = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>'&times;</a> <strong>ERROR!! Phone Number Required..</strong>";
    div.style.width = "250px";
    div.style.marginLeft = "1050px";
    div.style.marginTop = "160px";
    document.getElementById("snackbarnm").appendChild(div);
  }
  else if (accn == "") {
    var div = document.createElement("div");
    div.className = "alert alert-danger alert-dismissible";
    div.innerHTML = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>'&times;</a> <strong>ERROR!! Account Number Required..</strong>";
    div.style.width = "250px";
    div.style.marginLeft = "1050px";
    div.style.marginTop = "160px";
    document.getElementById("snackbarnm").appendChild(div);
  }
  else if (add == "") {
    var div = document.createElement("div");
    div.className = "alert alert-danger alert-dismissible";
    div.innerHTML = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>'&times;</a> <strong>ERROR!! Address Required..</strong>";
    div.style.width = "250px";
    div.style.marginLeft = "1050px";
    div.style.marginTop = "160px";
    document.getElementById("snackbarnm").appendChild(div);
  }
  else if (bd == "") {
    var div = document.createElement("div");
    div.className = "alert alert-danger alert-dismissible";
    div.innerHTML = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>'&times;</a> <strong>ERROR!! BIRTHDAY Required..</strong>";
    div.style.width = "250px";
    div.style.marginLeft = "1050px";
    div.style.marginTop = "160px";
    document.getElementById("snackbarnm").appendChild(div);
  }
  else if (chkphn == false) {
    var div = document.createElement("div");
    div.className = "alert alert-danger alert-dismissible";
    div.innerHTML = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>'&times;</a> <strong>ERROR!! Phone Number Of 10 Digit..</strong>";
    div.style.width = "250px";
    div.style.marginLeft = "1050px";
    div.style.marginTop = "160px";
    document.getElementById("snackbarnm").appendChild(div);
  }
  else {
    window.location.href = "./login.html";
  }

}