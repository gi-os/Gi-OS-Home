function opengios6() {
  location.href='http://gi-os6.tk/';
}
function opengalileo() {
  location.href='http://galileo.ml/';
}
function openedge() {
  location.href='http://www.gi-os.com/#!edge/c7b9';
}
function opengrid() {
  location.href='http://www.gi-os.com/#!join-grid/cq6l';
}
function openspotlight() {
  location.href='http://www.gi-os.com/#!revolution/c1mpu';
}
function opendashboard() {
  location.href='http://www.gi-os.com/#!launch/mainPage';
}
function opencodepen() {
  location.href='http://codepen.io/gi-os/';
}
function openmiku3() {
  location.href='http://s.codepen.io/gi-os/debug/GNKyvG';
}
function openmiku2() {
  location.href='http://s.codepen.io/gi-os/debug/ZWQMxa';
}
function openmiku1() {
  location.href='http://s.codepen.io/gi-os/debug/GNKyvG';

}  
function opengiosi() {
  location.href='http://gi-os.github.io/Home/projects/I';

}  
function opengithub() {
  location.href='https://github.com/gi-os/';

}  
function generateDiv(){
	var container = document.getElementById('divContainer');
	for (var i = 0; i <15; i++) {	
		for (var j = 0; j < 30; j++) {
		var nbRand = Math.floor((Math.random() * 4) + 1); 
	    container.innerHTML+= "<div class=\"cell"+nbRand+"\"></div>";
		}
		"<br>"
	};
}
function triggerBtn(){
	var circle = document.getElementById('circle');
	var arrow1 = document.getElementById('arrow1');
	var arrow2 = document.getElementById('arrow2');
	var arrow3 = document.getElementById('arrow3');
	var star1 = document.getElementById('star1_sub_container');
	var star2 = document.getElementById('star2_sub_container');
	var flower1 = document.getElementById('flower1_sub_container');
	var flower2 = document.getElementById('flower2_sub_container');
	var tv_screen = document.getElementById('tv_screen');

	document.getElementById('tvBtn').onclick=function(){
		circle.className="circleBig";	
		arrow1.className="arrow1Anim";	
		arrow2.className="arrow2Anim";	
		arrow3.className="arrow3Anim";	
		star1.className="star1Anim";	
		star2.className="star2Anim";	
		flower1.className="flower1Anim";	
		flower2.className="flower2Anim";	
		tv_screen.style.opacity="0";
	};
}
generateDiv();
triggerBtn();
