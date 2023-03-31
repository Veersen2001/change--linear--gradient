let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let body_color = document.getElementById('body');

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

function setGradient(){
    body_color.style.background = "linear-gradient(to right, " + color1.value + ","+ color2.value + ")";

    
}
