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
    elementToChange.innerHTML = `
    <h2 style="text-align: center;">Sponsorship</h2>
            <p>
                FITE 2020 is an two days international conference to be held on 15-16 October , 2020 and hosted jointly by Departments of Mechanical Engineering, 
                Electrical and Electronics Engineering, Electronics and Communication Engineering, Civil Engineering and Master of Business Administration, ABES EC Ghaziabad. 
                This event will include oral and poster presentation of research papers from various parts of country as well as have international participation from around 
                10-15 countries of Asia, Europe and U.S.  Keynote talks from experts in academia, industry and prominent dignitaries from Government organization.</br></br>

                FITE 2020 will have phenomenal interest of Scientists and Academicians, Engineers, Industry representatives and Students from all over the globe.</br></br>   
                We invite you to team with us in promotion of scientific and engineering research by sponsoring the conference. Various opportunities for association 
                are available as per sponsorship details given below.
            </p>
                <ul class="sponsorship-tab-content">
                    <div class="color-li">
                        Platinum
                        <span style="display: inline-block; float: right;">
                            INR 2-3 lacs
                        </span>
                    </div>
                        <ul>
                            <li><img src="./icons/check.png" >Recognition on all Press releases. </li>
                            <li><img src="./icons/check.png" >Company logo and link on the conference website.</li>
                            <li><img src="./icons/check.png" >Display of banner at institute gate located on NH-24.</li>
                            <li><img src="./icons/check.png" >Acknowledgement during the inaugural ceremony.</li>
                            <li><img src="./icons/check.png" >Color advertisement of the sponsor/ product on the front page of the Souvenir.</li>
                            <li><img src="./icons/check.png" >Company's name and logo printed on the conference proceedings, posters and signage.</li>
                            <li><img src="./icons/check.png" >Company's brochure and demo CD to be included in Conference kit.</li>
                            <li><img src="./icons/check.png" >Promotion of sponsoring company on social networking sites of conference.</li>
                            <li><img src="./icons/check.png" >Sponsoring company can exhibit their products or services on a stall.</li>
                        </ul>
                    <div class="color-li">
                        Gold
                        <span style="display: inline-block; float: right;">
                            INR 1-2 lacs
                        </span>
                    </div>
                    <ul>
                        <li><img src="./icons/check.png" >Company logo and link on the Conference Website.</li>
                        <li><img src="./icons/check.png" >Acknowledgement during the Inaugural Ceremony. </li>
                        <li><img src="./icons/check.png" >Colour advertisement of the sponsor/product in Conference Souvenir.</li>
                        <li><img src="./icons/check.png" >Company's name and logo printed on the Conference Proceedings, Posters, and Signage.</li>
                        <li><img src="./icons/check.png" >Two complimentary registrations.</li>
                        <li><img src="./icons/check.png" >One exhibit space. </li>
                    </ul>
                    <div class="color-li">
                        Silver
                        <span style="display: inline-block; float: right;">
                            INR 0.5 - 1.0 lacs
                        </span>
                    </div>
                    <ul>
                        <li><img src="./icons/check.png" >Company logo and link on the Conference Website.</li>
                        <li><img src="./icons/check.png" >Colour advertisement of the sponsor/ product in the Conference Souvenir. </li>
                        <li><img src="./icons/check.png" >Company's name and logo printed on the Conference Signage.</li>
                        <li><img src="./icons/check.png" >Display of Company Banner within the Lunch Area.</li>
                        <li><img src="./icons/check.png" >One complimentary pass of networking dinner.</li>
                    </ul>
                    <div class="color-li">
                        Bronze
                        <span style="display: inline-block; float: right;">
                            Below INR 50000
                        </span>
                    </div>
                        <ul>
                            <li><img src="./icons/check.png" >Company logo and link on the Conference Website.</li>
                            <li><img src="./icons/check.png" >Colour advertisement of the sponsor/ product in the Conference Souvenir. </li>
                            <li><img src="./icons/check.png" >Company's name and logo printed on the Conference Signage.</li>
                            <li><img src="./icons/check.png" >Display of Company Banner within the Lunch Area.</li>
                            <li><img src="./icons/check.png" >One complimentary pass of networking dinner.</li>
                        </ul>
                                                
                            
                </ul>
    `


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
                Email: <a href="mailto:fite2020@abes.ac.in">fite2020@abes.ac.in</a></br>
                Website: <a href="">www.fite-abes-conference.com</a></br>
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
                <a>Machine Design<img id="machine-dropdown" style="display: inline-block; float: right; height: 20px; width: 20px;transform: rotate(0deg);" src="./icons/dropdown-color.png"></a>
                <ul id="machine-show" class="display-none">
                    <li><a href="">CAD/CAM/CIM </a> </li>
                    <li><a href="">FEM</a> </li>
                    <li><a href="">Machine Design and Dynamics,</a> </li> 
                    <li><a href="">Multi-Body Dynamics</a> </li>
                    <li><a href="">Design of Mechanical Systems</a>  </li>
                    <li><a href="">Fatigue Fracture & Failure Analysis</a> </li> 
                    <li><a href="">Mechanisms</a> </li>
                    <li><a href="">Rotor Dynamics</a> </li>
                    <li><a href="">Vibrations and Control</a> </li>
                    <li><a href="">Product Design and Development</a> </li>
                </ul>
            </li>
            <li id="tribology" onclick="changeClass(this.id)">
                <a>Tribology Material<img id="tribology-dropdown" style="display: inline-block; float: right; height: 20px; width: 20px;transform: rotate(0deg);" src="./icons/dropdown-color.png"></a>
                <ul id="tribology-show" class="display-none">
                    <li><a href="">Bearing & Gear Tribology</a> </li>
                    <li><a href="">Lubricants & Additives</a> </li>
                    <li><a href="">Wear Mechanisms</a> </li>
                    <li><a href="">Surface Treatment & Coatings</a> </li>
                    <li><a href="">Tribo-Testing</a> </li>
                    <li><a href="">Condition Based Maintenance System</a> </li>
                    <li><a href="">Tribology in Design & Manufacturing </a> </li>
                    <li><a href="">Tribology in Metalworking</a> </li>
                    <li><a href="">Bio Tribology</a> </li>
                    <li><a href="">Nano Tribology</a> </li>
                    <li><a href="">Nuclear Tribology</a> </li>
                    <li><a href="">Space Tribology</a> </li>
                    <li><a href="">Automotive Tribology</a> </li>
                    <li><a href="">Marine Tribology</a> </li>
                    <li><a href="">Tribology in Renewable Energy</a> </li>
                </ul>
            </li>
            <li  id="material" onclick="changeClass(this.id)">
            <a>Material, Manufacturing and Industrial Engineering<img id="material-dropdown" style="display: inline-block; float: right; height: 20px; width: 20px;transform: rotate(0deg);" src="./icons/dropdown-color.png"></a>
                <ul id="material-show" class="display-none">
                    <li><a href="">Supply chain</a> </li>
                    <li><a href="">Quality and Information management</a> </li>
                    <li><a href="">Human factor</a> </li>
                    <li><a href="">Biomechanics and Ergonomics</a> </li>
                    <li><a href="">Marketing</a> </li>
                    <li><a href="">Operation research</a> </li>
                    <li><a href="">Layout planning</a> </li>
                    <li><a href="">Reverse Engineering </a> </li>
                    <li><a href="">CAD/CAM/CIM</a> </li>
                    <li><a href="">Reliability and Risk assessment</a> </li>
                    <li><a href="">Robotics and Automation</a> </li>
                    <li><a href="">Mechatronics</a> </li>
                    <li><a href="">Additive and Green Manufacturing</a> </li>
                    <li><a href="">Materials Forming & Machining</a> </li>
                    <li><a href="">Micro & Nano Machining Technology</a> </li>
                    <li><a href="">Laser Processing Technology</a> </li>
                    <li><a href="">Bionic Mechanisms and Bio-manufacturing</a> </li>
                    <li><a href="">Virtual Manufacturing and Network Manufacturing</a> </li>
                    <li><a href="">Sustainable Manufacturing Technologies</a> </li>
                    <li><a href="">Production and Operation Management</a> </li>
                </ul>
            </li>
            <li id="thermal" onclick="changeClass(this.id)">
                <a>Thermal And Energy Engineering<img id="thermal-dropdown" style="display: inline-block; float: right; height: 20px; width: 20px;transform: rotate(0deg);" src="./icons/dropdown-color.png"></a>
                <ul id="thermal-show" class="display-none">
                    <li><a href="">Computational Fluid dynamics</a> </li>
                    <li><a href="">Automotive and Alternate fuels</a> </li>
                    <li><a href="">Cryogenics technologies</a> </li>
                    <li><a href="">Cold Chain Technologies</a> </li>
                    <li><a href="">Heat – Mass Transfer</a> </li>
                    <li><a href="">Thermo-fluids</a> </li>
                    <li><a href="">Energy Conversion Systems</a> </li>
                    <li><a href="">Renewable Energy Technologies</a> </li>
                    <li><a href="">Energy and Environment</a> </li>
                    <li><a href="">Air Conditioning and Refrigeration</a> </li>
                    <li><a href="">Numerical Methods in Fluid Flow and Heat Transfer</a> </li>
                    <li><a href="">Transport Phenomena in Porous Media</a> </li>
                    <li><a href="">Engine Systems: Design and Simulation</a> </li>
                    <li><a href="">Active and Passive Safety</a> </li>
                    <li><a href="">Engine Thermodynamics</a> </li>
                    <li><a href="">Gas Turbines and Gas Dynamics</a> </li>
                    <li><a href="">IC Engine & Engine Technologies</a></li>
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