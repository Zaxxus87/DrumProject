var btns = document.querySelectorAll(".drum");
var sound = new Audio("sounds/tom-1.mp3");

for (var i = 0; i < btns.length; i++)
{
    btns[i].addEventListener("click", clicked);
}
function clicked()
{
    this.style.color = "white";
}



