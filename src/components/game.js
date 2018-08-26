import Menu from 'Menu';

const game = {};

game.size = 4;
game.keys = {};
game.gameDom = document.querySelector('.game');
game.gameDom.style.left = '0px';
game.gameDom.style.top = '0px';
game.domMap = [];
game.objectsFound = [];

game.drawElement = function(e) {
	e.isRendered = true;
	game.gameDom.appendChild(e.dom);
}
game.remove = function(e) {
	game.domMap[e.y][e.x] = undefined;
}
game.addObject = function(newObject) {
  game.objectsFound.push(newObject);
  Menu.addItemToInvent(newObject);
}
game.removeObject = function(object) {
  for(var i = game.objectsFound.length - 1; i >= 0; i--) {
    if(game.objectsFound[i] === object) {
      game.objectsFound.splice(i, 1);
      return;
    }
  }
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
