var myButton=document.getElementById("topButton");


//when the user scrolls more than 50px from the top of the page, show the button
window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        myButton.style.display="block";
    }
    else{
        myButton.style.display="none";
    }
}
//when user click top button
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

//overlay for shop

function on1() {
	
  document.getElementById("overlay1").style.display = "block";
  
}

function off1() {
	
  document.getElementById("overlay1").style.display = "none";
  
}


function on2() {
	
  document.getElementById("overlay2").style.display = "block";
  
}

function off2() {
	
  document.getElementById("overlay2").style.display = "none";
  
}


function on3() {
	
  document.getElementById("overlay3").style.display = "block";
  
}

function off3() {
	
  document.getElementById("overlay3").style.display = "none";
  
}


function on4() {
	
  document.getElementById("overlay4").style.display = "block";
  
}

function off4() {
	
  document.getElementById("overlay4").style.display = "none";
  
}


function on5() {
	
  document.getElementById("overlay5").style.display = "block";
  
}

function off5() {
	
  document.getElementById("overlay5").style.display = "none";
  
}


function on6() {
	
  document.getElementById("overlay6").style.display = "block";
  
}

function off6() {
	
  document.getElementById("overlay6").style.display = "none";
  
}


function on7() {
	
  document.getElementById("overlay7").style.display = "block";
  
}

function off7() {
	
  document.getElementById("overlay7").style.display = "none";
  
}


function on8() {
	
  document.getElementById("overlay8").style.display = "block";
  
}

function off8() {
	
  document.getElementById("overlay8").style.display = "none";
  
}







//color and theme selection 
function changeColor(color) {
	document.body.style.background = color;
}



              
function sunnyYellow() {
	changeColor('#EFBF4D');
}

function darkMode() {
	changeColor('#101010');
}

function lightMode() {
	changeColor('#ECE9E4');
}        

function oceanBlue() {
	changeColor('#284F8F');
}        

function royalPurple() {
	changeColor('#776F9A');
}    

function kawaiiUwu() {
	changeColor('#EFBBCC');
}                          

//https://www.golangprograms.com/how-to-change-text-color-on-click-using-javascript.html//
document.getElementById("changeDark").onclick = function(){
	document.getElementById("contentDiv").style.color = '#FDFEFF';
}

document.getElementById("changeLight").onclick = function(){
	document.getElementById("contentDiv").style.color = '#0E0E10';
}

document.getElementById("changeKawaii").onclick = function(){
	document.getElementById("contentDiv").style.color = '#499DD0';
}

document.getElementById("changeOcean").onclick = function(){
	document.getElementById("contentDiv").style.color = '#FFFFF0';
}

document.getElementById("changeRoyal").onclick = function(){
	document.getElementById("contentDiv").style.color = '#FFCC11';
}

document.getElementById("changeSunny").onclick = function(){
	document.getElementById("contentDiv").style.color = '#6A0F8E';
}