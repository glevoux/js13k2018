var size = 4;

var gameDom = document.querySelector('.game');

var keys = {};

var objectsFound = [];

function drawElement(e) {
	e.isRendered = true;
	gameDom.appendChild(e.dom);
}

window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
    },
false);

window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
    },
false);