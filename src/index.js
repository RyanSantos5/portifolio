import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import App from './App';
import $ from 'jquery';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

var altura;
var largura;
var altura_documento;
var load_skills = false;

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// PARALLAX
function parallaxBanner(mouseX,mouseY) {
  let originX = mouseX - largura * 0.3;
  let originY = mouseY - altura * 0.5;

  let eHeight = $(".banner-content__image").height();
  let eWidth = $(".banner-content__image").width();

  let x = (scale(originX,0,largura,-12,12) * -1) - eWidth / 5;
  let y = (scale(originY,0,altura,-12,12) * -1) - eHeight / 5;


  $(".banner-content__image").css({
    "backgroundPosition":
    `${x}px 
    ${y}px`
  });
}

function parallaxNeblina(mouseX,mouseY) {
  let originX = mouseX - largura * 0.3;
  let originY = mouseY - altura * 0.7;

  let x = (scale(originX,0,largura,60,100) * -1);
  let y = (scale(originY,0,altura,60,100)) ;

  let x2 = (scale(originX,0,largura,80,120) * -1);
  let y2 = (scale(originY,0,altura,80,120)) ;


  $(".neblina1").css({
    "left":`${x}px`,
    "bottom":`${y}px`
  });

  $(".neblina2").css({
    "left":`${x2}px`,
    "bottom":`${y2}px`
  });
}

function parallaxText(mouseX,mouseY) {
  let originX = (mouseX - largura * 0.1);
  let originY = (mouseY - altura * 0.4);


  let x = (scale(originX,0,largura,-5,5) * -1) + largura * 0.1;
  let y = (scale(originY,0,altura,-10,10));

  $(".banner-content__titulo").css({
    "left":`${x}px`,
    "bottom":`${y}px`
  });
}

function parallaxMenu(mouseX,mouseY) {
  let originX = (mouseX - largura * 0.5);
  let originY = (mouseY - altura * 0.7);

  // let eHeight = $(".banner-content__image").height();
  let eWidth = $(".menu__content").width();

  let x = (scale(originX,0,largura,0,5) * -1) + (largura/2 - eWidth/2);
  let y = (scale(originY,0,altura,0,5));

  $(".menu__content").css({
    "left":`${x}px`,
    "bottom":`${y}px`
  });
}

function parallaxLapa(scroll) {
  let originY = (altura_documento * 0.05) + altura + scroll;

  let y = (scale(originY,0,altura_documento,-180,120));

  $(".lapa").css({
    "bottom":`${y}px`
  });
}

function parallaxBirds(scroll) {
  let originY = (altura_documento * 0.05) + altura + scroll;

  let y = (scale(originY,0,altura_documento,-150,380));


  $(".birds").css({
    "left":`${y + largura * 0.4}px`,
    "bottom":`${y}px`
  });
}

function loadParallax(e){
  let mouseX = e.pageX;
      let mouseY = e.pageY;

      if(mouseY < altura + altura_documento * 0.4) { 
        parallaxBanner(mouseX,mouseY);
        parallaxNeblina(mouseX,mouseY);
        parallaxText(mouseX,mouseY);
      }
}

// Skills
function skill(e,max) {
  console.log(e);
    var numero = e;
    var min = 1;
    var duração = 5000 * (max / 100); // proporcional
  
    for (var i = min; i <= max; i++) {
      setTimeout(function(nr) {
        numero.innerHTML = nr;
      }, i * duração / max, i);
      duração += 30;
      console.log(duração);
    }
}


$( document ).ready(function(i) {

  largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  altura = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  altura_documento = $(document).height(); // altura do documento HTML

  loadParallax(i);

  // $( ".banner" ).click(function() {
  //   $( "#animated" ).addClass( "off" );
  // });

  // Parallax
  $(function(){
    // var altura1 = window.screen.height;
    // var largura1 = window.screen.width;

    let bannerX = 10;
    let bannerY = 20;

    $(".App").mousemove(function(e){
      loadParallax(e);
      // parallaxMenu(mouseX,mouseY);
    });
    
    // Header Fixed
    $(window).scroll(function() { 
      parallaxLapa($(this).scrollTop());
      parallaxBirds($(this).scrollTop());
    });
  });

  // Skills
  $(window).on("scroll", function(){
    if($("#skill").offset().top - $(window).scrollTop() > -10 && load_skills == false) {
      skill($('.html')[0], 98);
      skill($('.css')[0], 98);
      skill($('.js')[0], 87);
      skill($('.react')[0], 73);
      skill($('.node')[0], 54);
      skill($('.vtex')[0], 79);
      skill($('.git')[0], 83);
      skill($('.sql')[0], 57);

      load_skills = true;
    }
  });

  // About section
  $( ".about-info-1" ).on( "click", function() {
    $(".about-texts").removeClass("info-2");
    $(".about-texts").toggleClass("info-1");
    $(".about-info-2").removeClass("active");
    $(".about-info-1").toggleClass("active");
  });
  
  $( ".about-info-2" ).on( "click", function() {
    $(".about-texts").removeClass("info-1");
    $(".about-texts").toggleClass("info-2");
    $(".about-info-1").removeClass("active");
    $(".about-info-2").toggleClass("active");
  });
  


});