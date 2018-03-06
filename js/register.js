//alert("register.js importiert");
function CheckCode() {
  alert("CheckCode wird aufgerufen");
  var code = document.getElementById("code").value;
  alert(code);

  if(code == "sc3476c2228a") {
    alert("in if");
    document.getElementById("divcode").style.display = "none";
  }
}
