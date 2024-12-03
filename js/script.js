var img=[
    "../images/1.1.jpg",
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/2.1.jpg",
    "../images/2.2.jpg",
    "../images/3.1.jpg",
    "../images/3.2.jpg",
    "../images/6.1.jpg",
    "../images/6.2.jpg",
    "../images/8.jpg",
    "../images/12.jpg",
    "../images/48.jpg",
    "../images/44.jpg",
    "../images/ff.jpg",
]
var num=0
var slider= document.getElementById("slider")
let indicators = Array.from(document.querySelectorAll(".fa-circle"));
console.log(indicators)
let interval;
window.onload= startSlider
function startSlider(){
    interval = setInterval(imgSlider,3000)
}
function stopSlider(){
    clearInterval(interval)
}

function numEvaluate(){
    if(num>=img.length){
        num=0
    }
    else if (num < 0) {
        num = img.length - 1;
    }
}
function pIndicator(num){
    indicators[num].style.color="rgb(196, 78, 27)";
    let array = [...indicators.slice(0, num),...indicators.slice(num + 1)];
    for(let i=0; i<array.length;i++){
        array[i].style.color=" antiquewhite"
    } 
 }
function imgSlider(){
   slider.style.backgroundImage= `url(${img[num]})`;
   pIndicator(num)
   num++
   numEvaluate();
}

function next(){
 stopSlider();
 num++
 numEvaluate();
 slider.style.backgroundImage= `url(${img[num]})`;
 pIndicator(num)
 startSlider();
}

function prev(){
 stopSlider();
 num--
 numEvaluate();
 slider.style.backgroundImage= `url(${img[num]})`;
 pIndicator(num)
 startSlider();
}

slider.addEventListener("mouseenter", stopSlider);

slider.addEventListener("mouseleave", startSlider);
