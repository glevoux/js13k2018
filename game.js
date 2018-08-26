const game = {};

game.size = 4;
game.keys = {};
game.gameDom = document.querySelector('.game');
game.gameDom.style.left = '0px';
game.gameDom.style.top = '0px';
game.objectsFound = [];

game.drawElement = function(e) {
	e.isRendered = true;
	game.gameDom.appendChild(e.dom);
}

window.addEventListener("keydown",
    function(e){
      game.keys[e.keyCode] = true;
    },
false);

window.addEventListener('keyup',
    function(e){
      game.keys[e.keyCode] = false;
    },
false);

export default game;
