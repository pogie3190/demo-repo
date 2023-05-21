var menuBtn = document.getElementById("menuBtn")
var sideBar = document.getElementById("sideBar")
var menu = document.getElementById("menu")

sideBar.style.right = "-250px"

menuBtn.onclick = function () {
    if(sideBar.style.right == "-250px"){
      sideBar.style.right = "0";
    }
    else {
      sideBar.style.right = "-250px"
      
    }
}






