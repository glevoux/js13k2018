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
  console.log(e);
	game.domMap[e.y][e.x] = undefined;
}
game.addObject = function(object) {
  let newId = makeid();
  let newObject = {
    name: object,
    id: newId
  }
  game.objectsFound.push(newObject);
  Menu.addItemToInvent(object, newId);
}
game.removeObject = function(object) {
  for(var i = game.objectsFound.length - 1; i >= 0; i--) {
    if(game.objectsFound[i].name === object) {
      Menu.setAsTaken(game.objectsFound[i].id);
      game.objectsFound.splice(i, 1);
      return;
    }
  }
}

function makeid() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
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
