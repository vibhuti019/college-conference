function StartLoad(){
    
    var mainContent = body.innerHTML
    body.innerHTML=`
    <div class="loader"></div> 
    `
    body.style.opacity = 1;
    setTimeout(function(){
        body.style.opacity = 0;
        body.innerHTML = mainContent
        unfade(body,80)
        body.innerHTML= mainContent;        
    }, 1200);
    
}

function unfade(element,delay) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, delay);
}

function changeClass(element){
    var elementToChange = document.getElementById(element+"-show")
    var dropdown = document.getElementById(element+"-dropdown")

    if (elementToChange.className === "display-none"){
        elementToChange.className = "display-on-click"
    }
    else if(elementToChange.className === "display-on-click"){
        elementToChange.className = "display-none" 
    }

    if (dropdown.style.transform === "rotate(0deg)"){
        dropdown.style.transform = "rotate(180deg)"
    }
    else if (dropdown.style.transform === "rotate(180deg)"){
        dropdown.style.transform = "rotate(0deg)"
    }

    

}