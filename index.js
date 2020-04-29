function StartLoad(){
    
    var body = document.getElementById("body");
    var mainContent = body.innerHTML
    body.innerHTML=`
    <div class="loader"></div> 
    `
    body.style.opacity = 1;
    setTimeout(function(){
        body.style.opacity = 0;
        body.innerHTML = mainContent
        unfade(body,80)
        home()        
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

function sponsorship(){
    elementToChange = document.getElementById("container")
    elementToChange.innerHTML = " "


}


function contacts(){
    elementToChange = document.getElementById("container")
    elementToChange.innerHTML = `
        <div class="contacts">
            <h1> Contact </h1>
            <p> 
                Organizing Secretory - FITE - 2020</br>
                ABES EC, Campus-1, 19th KM Stone, NH 24,</br> 
                Ghaziabad, Uttar Pradesh 201009</br>
                Phone No. 0120-4392640, 0120-4392781</br> 
                Email: fite2020@abes.ac.in</br>
                Website: 
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.397612433007!2d77.4455342!3d28.6342753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1588179576529!5m2!1sen!2sin" width="95%" height="70%" frameborder="0" style="border:1;margin:2.5%;" allowfullscreen="" aria-hidden="false" tabindex="0">
            </iframe>
        </div>
    `
}


function home(){
    elementToChange = document.getElementById("container")
    elementToChange.innerHTML = `
    <div>
    <p>
    <div class="carousel-container">
        <button class="image-box PrevBtn"><</button>
        <p id="myimage">
                <img src="./convocation-512x380.jpg" alt="" id="image-to-change">
        </p>
        <button class="image-box NxtBtn">></button>
        <div class="image-selector-container"> 
            <button id="1" class="image-selector" onclick="changeImage()">.</button>
            <button id="2" class="image-selector-active" onclick="changeImage()">.</button>
            <button id="3" class="image-selector" onclick="changeImage()">.</button>
            <button id="4" class="image-selector" onclick="changeImage()">.</button>
            <button id="5" class="image-selector" onclick="changeImage()">.</button>
        </div>                   
    </div>
    </p>
</div>
</br>

<div class="content-main-site">
    <h3>Welcome</h3>
    <p class="welcome-content">
        ABES Engineering College, Ghaziabad, one of the pioneer institutions in the field of Engineering, Research and Technology is organizing International Conference on 
        <span class="bold-text"> 
            Futuristic Innovations in Technology and Engineering (FITE)-2020 
        </span>  
        The conference is sponsored by All India Council for Technical Education (AICTE).
        This technical conference aims at providing a platform for industry and academia to discuss various emerging trends and innovations, 
        share research results and new directions in upcoming areas. 
        FITE -2020 will provide a leading edge, scholarly forum for researchers, engineers, and students alike to share their state-of-the art
        research and developmental work in the broad areas. 
        The conference will feature a diverse mixture of interactive forums, core technical sessions of high quality cutting-edge research articles; 
        targeted workshops on exciting topics; 
        live demonstrations of pervasive computing in action; insightful keynote speeches;
        panel discussions from domain experts and posters of emerging ideas and achieve the following:
        <ul>
            <li>To present the ongoing researches in the field of Engineering and Business and hence to foster research relations between the Universities and the industry.</li>
            <li>Give participants a review of the latest and upcoming trends in the next few years.</li>
            <li>Provides an opportunity for researchers, academicians, scientists and professional engineers to present their work, publish their results, exchange ideas and network for scientific and industrial collaborations.</li>
            <li>Provide the delegates to share their new idea and the application experiences face to face.</li>
            <li>The conference aims to cover the following areas of business and engineering for sustainable growth but not limited to: 
            </li>
        </ul>
    </p>

    <!--<h4> Topics Covered </h4>-->
    <div class="topics-covered">
        <ul>
            <li id="machine" onclick="changeClass(this.id)">
                <a>Machine Design<img id="machine-dropdown" style="display: inline-block; float: right; height: 25px; width: 25px;transform: rotate(0deg);" src="./icons/dropdown-color.png"></a>
                <ul id="machine-show" class="display-none">
                    <li><a href="">CAD/CAM/CIM </a> 
                    <li><a href="">FEM</a> 
                    <li><a href="">Machine Design and Dynamics,</a> 
                    <li><a href="">Multi-Body Dynamics</a> 
                    <li><a href="">Design of Mechanical Systems</a> 
                    <li><a href="">Fatigue Fracture & Failure Analysis</a> 
                    <li><a href="">Mechanisms</a> 
                    <li><a href="">Rotor Dynamics</a> 
                    <li><a href="">Vibrations and Control</a> 
                    <li><a href="">Product Design and Development</a> 
                </ul>
            </li>
            <li id="tribology" onclick="changeClass(this.id)">
                <a>Tribology Material<img id="tribology-dropdown" style="display: inline-block; float: right; height: 25px; width: 25px;transform: rotate(0deg);" src="./icons/dropdown-color.png"></a>
                <ul id="tribology-show" class="display-none">
                    <li><a href="">Bearing & Gear Tribology</a> 
                    <li><a href="">Lubricants & Additives</a> 
                    <li><a href="">Wear Mechanisms</a> 
                    <li><a href="">Surface Treatment & Coatings</a> 
                    <li><a href="">Tribo-Testing</a> 
                    <li><a href="">Condition Based Maintenance System</a> 
                    <li><a href="">Tribology in Design & Manufacturing </a> 
                    <li><a href="">Tribology in Metalworking</a> 
                    <li><a href="">Bio Tribology</a> 
                    <li><a href="">Nano Tribology</a> 
                    <li><a href="">Nuclear Tribology</a> 
                    <li><a href="">Space Tribology</a> 
                    <li><a href="">Automotive Tribology</a> 
                    <li><a href="">Marine Tribology</a> 
                    <li><a href="">Tribology in Renewable Energy</a> 
                </ul>
            </li>
            <li  id="material" onclick="changeClass(this.id)">
            <a>Material, Manufacturing and Industrial Engineering<img id="material-dropdown" style="display: inline-block; float: right; height: 25px; width: 25px;transform: rotate(0deg);" src="./icons/dropdown-color.png"></a>
                <ul id="material-show" class="display-none">
                    <li><a href="">Supply chain</a> 
                    <li><a href="">Quality and Information management</a> 
                    <li><a href="">Human factor</a> 
                    <li><a href="">Biomechanics and Ergonomics</a> 
                    <li><a href="">Marketing</a> 
                    <li><a href="">Operation research</a> 
                    <li><a href="">Layout planning</a> 
                    <li><a href="">Reverse Engineering </a> 
                    <li><a href="">CAD/CAM/CIM</a> 
                    <li><a href="">Reliability and Risk assessment</a> 
                    <li><a href="">Robotics and Automation</a> 
                    <li><a href="">Mechatronics</a> 
                    <li><a href="">Additive and Green Manufacturing</a> 
                    <li><a href="">Materials Forming & Machining</a> 
                    <li><a href="">Micro & Nano Machining Technology</a> 
                    <li><a href="">Laser Processing Technology</a> 
                    <li><a href="">Bionic Mechanisms and Bio-manufacturing</a> 
                    <li><a href="">Virtual Manufacturing and Network Manufacturing</a> 
                    <li><a href="">Sustainable Manufacturing Technologies</a> 
                    <li><a href="">Production and Operation Management</a> 
                </ul>
            </li>
            <li id="thermal" onclick="changeClass(this.id)">
                <a>Thermal And Energy Engineering<img id="thermal-dropdown" style="display: inline-block; float: right; height: 25px; width: 25px;transform: rotate(0deg);" src="./icons/dropdown-color.png"></a>
                <ul id="thermal-show" class="display-none">
                    <li><a href="">Computational Fluid dynamics</a> 
                    <li><a href="">Automotive and Alternate fuels</a> 
                    <li><a href="">Cryogenics technologies</a> 
                    <li><a href="">Cold Chain Technologies</a> 
                    <li><a href="">Heat – Mass Transfer</a> 
                    <li><a href="">Thermo-fluids</a> 
                    <li><a href="">Energy Conversion Systems</a> 
                    <li><a href="">Renewable Energy Technologies</a> 
                    <li><a href="">Energy and Environment</a> 
                    <li><a href="">Air Conditioning and Refrigeration</a> 
                    <li><a href="">Numerical Methods in Fluid Flow and Heat Transfer</a> 
                    <li><a href="">Transport Phenomena in Porous Media</a> 
                    <li><a href="">Engine Systems: Design and Simulation</a> 
                    <li><a href="">Active and Passive Safety</a> 
                    <li><a href="">Engine Thermodynamics</a> 
                    <li><a href="">Gas Turbines and Gas Dynamics</a> 
                    <li><a href="">IC Engine & Engine Technologies</a>
                </ul>
            </li>
        </ul>
    </div>
    <div class="Speakers">
        <h1> Speakers </h1>
        <img src="https://www.amity.edu/flame2020/images/spk1.png" alt="">
        <img src="https://www.amity.edu/flame2020/images/spk1.png" alt="">
        <img src="https://www.amity.edu/flame2020/images/spk1.png" alt="">
        <img src="https://www.amity.edu/flame2020/images/spk1.png" alt="">
        <img src="https://www.amity.edu/flame2020/images/spk1.png" alt="">
        <img src="https://www.amity.edu/flame2020/images/spk1.png" alt="">
        </br><a href="">See more....</a>
    </div>
    `

}