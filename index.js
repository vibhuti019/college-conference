function changeClass(element){
    var elementToChange = document.getElementById(element+"-show")
    if (elementToChange.className === "display-none"){
        elementToChange.className = "display-on-click"
    }
    else if(elementToChange.className === "display-on-click"){
        elementToChange.className = "display-none" 
    }
}