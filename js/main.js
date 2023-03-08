
//Boton Intereses
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

//Boton Skills
let hideTextS_btn = document.getElementById('hideTextS_btn');
let hideTextS = document.getElementById('hideTextS');

//Boton Experiencia
let hideTextE = document.getElementById('hideTextE');
let hideTextE_btn = document.getElementById('hideTextE_btn');

//Boton Derecha Educacion
let hideTextR = document.getElementById('hideTextR');
let hideTextR_btn = document.getElementById('hideTextR_btn');

//Boton Intereses
hideText_btn.addEventListener('click', toggleText);
function toggleText(){
    hideText.classList.toggle('show');
    if (hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Read Less';
    }
    else{
        hideText_btn.innerHTML = 'Interests';
    }
}

//Boton Skills
hideTextS_btn.addEventListener('click', toggleText1);
function toggleText1(){
    hideTextS.classList.toggle('show');
    if (hideTextS.classList.contains('show')){
        hideTextS_btn.innerHTML = 'Read Less';
    }
    else{
        hideTextS_btn.innerHTML = 'Skills';
    }
}

//Boton Experience
hideTextE_btn.addEventListener('click', toggleText2);
function toggleText2(){
    hideTextE.classList.toggle('show');
    if (hideTextE.classList.contains('show')){
        hideTextE_btn.innerHTML = 'Read Less';
    }
    else{
        hideTextE_btn.innerHTML = 'Experience';
    }
}

//Boton Education
hideTextR_btn.addEventListener('click', toggleText3);
function toggleText3(){
    hideTextR.classList.toggle('show');
    if (hideTextR.classList.contains('show')){
        hideTextR_btn.innerHTML = 'Read Less';
    }
    else{
        hideTextR_btn.innerHTML = 'Education';
    }
}