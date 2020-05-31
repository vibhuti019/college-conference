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

function submitResponse() {
    var AuthorName = fetchValue("txtName")
    var AuthorTypeBlock = document.getElementById("ddlAuthorType")
    var AuthorType = AuthorTypeBlock[AuthorTypeBlock.selectedIndex].label
    console.log("AuthorType = " + AuthorType)
    var x = "rdbPages_"   
    for(i=0; i<=4; i++){
        var index = x + i
        var noOfPagesBlock = document.getElementById(index)
        if (noOfPagesBlock.checked){
            var noOfPages = i
            console.log(noOfPages)
            break
        }
    }
    var Designation = fetchValue("txtDesignation")
    var Department  = fetchValue("txtDepartment")
    var Organization = fetchValue("txtOrganization")
    var Mobile = fetchValue("txtMobile")
    var Email = fetchValue("txtEmail")
    var Address = fetchValue("txtAddress")
    var City = fetchValue("txtCity")
    var CountryBlock = document.getElementById("ddlCountry")
    var Country = CountryBlock[CountryBlock.selectedIndex].label
    console.log(Country)
    if (sendData){
        sendResponse(AuthorName,AuthorType,Designation,Department,Organization,Mobile,Email,Address,City,Country)
        console.log("Response Sent")
    }
}
var displayDialog = true;
var sendData = true;
function fetchValue(valueName){
    var Variable = document.getElementById(valueName)
    if (Variable.value == ''){
        if (displayDialog)    
            alert("Please Enter " + Variable.placeholder)
        displayDialog = false
        sendData = false
    }
    else {
        displayDialog = true
        sendData = true
        console.log(Variable.value)
        return Variable.value
    }
}

function sendResponse(Name,Type,Designation,Department,Organization,Mobile,Email,Address,City,Country) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               alert("The Data Has Been Sent");
           }
           else if (xmlhttp.status == 400) {
              alert("Error Sending Data");
           }
           else {
               alert("Error In Sending Data");
           }
        }
    };

    url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfv1WY_JCBw8UI3Jgls4Qd4q4E7vxcjLxGdMLZwwi5x3k7Sow/formResponse"
    

    xmlhttp.open("POST", url, true);
    xmlhttp.send("entry.1040180469="+Name+"&entry.354980592="+Type+"&entry.45339239="+Designation+"&entry.499908739="+Department+"&entry.1813433208="+Organization+"&entry.1815839256="+Mobile+"&entry.984853836="+Email+"&entry.978019621="+Address+"&entry.1180549134="+City+"&entry.447049462="+Country+"&fvv=1&draftResponse=[null,null,\"-6085246042236856651\"] &pageHistory=0&fbzx=-6085246042236856651");
}