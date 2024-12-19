let redArea = document.querySelector(".red-area") //pulling red area
let blueArea = document.querySelector(".blue-area")//pulling blue area

redArea.addEventListener("mousedown", cliqueEmMim) //area click function
redArea.addEventListener("mouseup",SaindoComMouse)//function to remove the mouse from the red area

blueArea.addEventListener("mouseover",PasseMouse)//mouse over function
blueArea.addEventListener("mouseout", PasseNovamente)

//Red area function
function cliqueEmMim(){
    redArea.innerHTML = "Solte me!"
    redArea.style.background = "#1ec5e5"
}
function SaindoComMouse(){
    redArea.innerHTML="Obrigado!"
    redArea.style.background = "red"
}
//Blue area function
function PasseMouse(){
    blueArea.innerHTML = "Obrigado!"
}
function PasseNovamente(){
    blueArea.innerHTML="Passe novamente!"
}