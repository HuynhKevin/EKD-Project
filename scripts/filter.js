
filterFr("all")
function filterFr(c) {
  var x, i;
  x = document.getElementsByClassName("columnFr");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "display");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "display");
  }
}
filterPl("all")
function filterPl(c) {
  var x, i;
  x = document.getElementsByClassName("columnPl");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "display");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "display");
  }
}

filterKr("all")
function filterKr(c) {
  var x, i;
  x = document.getElementsByClassName("columnKr");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "display");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "display");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}


var filtersFr = document.getElementById("filtersFr");
var buttonsFr = filtersFr.getElementsByClassName("btn btn-outline-dark");
for (var i = 0; i < buttonsFr.length; i++) {
  buttonsFr[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active Fr");
    current[0].className = current[0].className.replace(" active Fr", "");
    this.className += " active Fr";
  });
}

var filtersPl = document.getElementById("filtersPl");
var buttonsPl = filtersPl.getElementsByClassName("btn btn-outline-dark");
for (var i = 0; i < buttonsPl.length; i++) {
  buttonsPl[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active Pl");
    current[0].className = current[0].className.replace(" active Pl", "");
    this.className += " active Pl";
  });
}

var filtersKr = document.getElementById("filtersKr");
var buttonsKr = filtersKr.getElementsByClassName("btn btn-outline-dark");
for (var i = 0; i < buttonsKr.length; i++) {
  buttonsKr[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active Kr");
    current[0].className = current[0].className.replace(" active Kr", "");
    this.className += " active Kr";
  });
}
