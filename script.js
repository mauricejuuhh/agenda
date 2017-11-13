//for (var i = 0; i < 24; i++) {
  var div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "calc(100% / 24)";
  div.style.background = "red";
  div.style.color = "white";
  div.setAttribute("id", "hour");
  div.innerHTML = "Hello";
//}


document.getElementById("lool").appendChild(div);
