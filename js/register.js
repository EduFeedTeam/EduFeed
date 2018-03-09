//alert("register.js importiert");
function CheckCode() {
  //alert("CheckCode wird aufgerufen");
  var code = document.getElementById("code").value;
  //alert(code);

  //Checkt ob der Code in der Datenbank vorhanden ist
  if(code == "s3476c2228a" || code == "l3476c2228a") {
    //alert("in if");
    //alert(code.substring(0,1));
    if(code.substring(0,1) == "s") {
      document.getElementById("divcode").style.display = "none";
      document.getElementById("dive-mail").style.display = "block";
      document.getElementById("divusername").style.display = "block";
      document.getElementById("divpassword").style.display = "block";
      //Button unsichtbar setzen
      document.getElementById("buttoncode").style.display = "none";
      document.getElementById("buttoninput").style.display = "block";

    }
    if(code.substring(0,1) == "l") {
      document.getElementById("divcode").style.display = "none";
      document.getElementById("dive-mail").style.display = "block";
      document.getElementById("divfirstname").style.display = "block";
      document.getElementById("divsecondname").style.display = "block";
      document.getElementById("divusername").style.display = "block";
      document.getElementById("divpassword").style.display = "block";
      //Button unsichtbar setzen
      document.getElementById("buttoncode").style.display = "none";
      document.getElementById("buttoninput").style.display = "block";
    }
  }
}

  function CreateUsername() {
    alert("CreateUsername")
    var firstname = document.getElementById("firstname").value;
    var secondname = document.getElementById("secondname").value;
    var username = firstname.substring(0,1) + secondname;
    document.getElementById("username").value = username.toLowerCase();
  }
