function GoToGame(id) {
  //console.log(id);
  window.location.href = "/games/" + id + ".html";
}

function GoToHome() {
  //console.log(id);
  window.location.href = "/index.html";
}

function submitButtonFunction() {
 	document.getElementById("responseArea").innerHTML += "<br>" + document.getElementById("textArea").value;
  document.getElementById("textArea").value = "";
}