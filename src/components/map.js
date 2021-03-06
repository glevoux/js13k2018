import Game from 'Game';
import { Decor, Item, Character, Wifi, GameEvent, Element } from 'Elements';

const oMap = {};
 
var map = [
  ['wall1', 'wall1'   , 'wall1'   , 'wall1'  , 'wall1'  , 'wall1'  , 'wall1'  , 'wall1' , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1' , 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1' , 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'   ,'wall1'  ,'wall1'  ,'wall1'  ,'wall1'  ,'wall1'  ,'wall1'  ,'wall1'  ,'wall1'  ,'wall1'  ,'wall1'   ,'wall1'  ,'wall1'  ,'wall1'   ,'wall1'  ,'wall1'  , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      ,'wall1'  , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      ,'wall1'  , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , 'art3'  , ''             , ''             , ''             , ''             , ''             , ''      , ''        , ''        , ''        , ''        , ''        , ''             , ''             , ''             , ''             , ''             , ''      , ''        , ''        , ''        , ''        , ''        , ''      , ''      , 'art2'  , ''      , ''      , ''      , ''      , ''      , ''      , ''       , ''      , ''      , 'wifi'   , ''      , ''      , ''             , 'art1'         , ''             , ''             , ''             , 'wall1'],
  ['wall1', 'ethernet', ''        , 'flower' , 'desktop', 'pnj'    , ''       , ''      , ''             , ''             , ''             , ''             , ''             , ''      , ''        , ''        , ''        , ''        , ''        , 'flower'       , ''             , 'pnj'          , ''             , ''             , ''      , ''        , ''        , ''        , 'pnj'     , 'flower'  , ''      ,'pnj'    , ''      , 'donut' , ''      , 'flower', ''      , ''      , ''      , ''       , 'pnj'   , ''      , ''       , ''      , 'flower', 'pnj'          , 'desktop'      , 'pnj'          , 'wifirouter'   , ''             , 'wall1'],
  ['wall1', 'ground'  , 'ground'  , 'ground' , 'ground' , 'ground' , 'ground' , 'ground', 'ground'       , 'ground'       , ''             , ''             , 'stair flip'   , 'ground', 'stair'   , ''        , ''        , 'ground'  , 'ground'  , 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground', 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground' , 'ground', 'ground', 'ground' , 'ground', 'ground', 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , ''      , ''             , ''             , ''             , 'stair flip'   , 'substair flip', 'wall1' , 'substair', 'stair'   , ''        , ''        , ''        , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      ,'wall1'  , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , ''      , ''             , ''             , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1' , 'wall1'   , 'substair', 'stair'   , ''        , ''        , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      ,'wall1'  , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1'],
  ['wall1', ''        , 'wifi'    , ''       , ''       , 'art2'   , ''       , ''      , ''             , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1'        , 'wall1' , 'wall1'   , 'wall1'   , 'substair', 'stair'   , ''        , ''             , ''             , ''             , ''             , ''             , ''      , ''        , ''        , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''       , 'art3'  , ''      , ''       , ''      , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1'],
  ['wall1', 'power'   , 'desktop' , 'pnj'    , ''       , ''       , 'pnj'    , ''      , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1'        , 'wall1'        , 'wall1' , 'wall1'   , 'wall1'   , 'wall1'   , 'substair', 'stair'   , ''             , ''             , 'flower'       , ''             , ''             , ''      , ''        , ''        , 'pnj'     , ''        , ''        , 'donut' ,'pnj'    , ''      , 'flower', 'pnj'   , ''      , ''      , ''      , ''      , ''       , ''      , ''      , 'flower' , ''      , 'pnj'   , ''             , ''             , ''             , ''             , ''             , 'wall1'],
  ['wall1', 'ground'  , 'ground'  , 'ground' , 'ground' , 'ground' , 'ground' , 'ground', 'substair flip', 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1' , 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'   , 'substair', 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground', 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground' , 'ground', 'ground', 'ground' , 'ground', 'ground', 'ground'       , 'ground'       , ''             , ''             , 'stair flip'   , 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      ,'wall1'  , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , ''             , ''             , 'stair flip'   , 'substair flip', 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      ,'wall1'  , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , ''             , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1'],
  ['wall1', ''        , 'wifi'    , ''       , ''       , ''       , 'art1'   , ''      , ''             , ''             , ''             , ''             , ''             , 'door1' , ''        , ''        , ''        , ''        , ''        , ''             , ''             , ''             , ''             , ''             , ''      , ''        , ''        , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1'        , 'wall1'],
  ['wall1', 'bed'     , ''        , ''       , 'desktop', 'event-0', 'event-3', ''      , ''             , 'flower'       , ''             , ''             , ''             , 'door2' , 'event-4' , ''        , 'pnj'     , ''        , 'flower'  , ''             , ''             , ''             , ''             , ''             , ''      , ''        , ''        , ''        , ''        , ''        , 'pnj'   , ''      , 'flower', ''      , ''      , ''      , 'pnj'   , ''      , ''      , ''       , 'flower', 'pnj'   , ''       , ''      , ''      , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'],
  ['wall1', 'ground'  , 'ground'  , 'ground' , 'ground' , 'ground' , 'ground' , 'ground', 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground', 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'ground'       , 'ground'       , ''             , ''             , 'stair flip'   , 'ground', 'stair'   , ''        , ''        , 'ground'  , 'ground'  , 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground' , 'ground', 'ground', 'ground' , 'ground', 'ground', 'substair flip', 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''             , ''             , ''             , 'stair flip'   , 'substair flip', 'wall1' , 'substair', 'stair'   , ''        , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      ,'wall1'  , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1'],
  ['wall1', ''        , 'it-plate', ''       , ''       , ''       , ''       , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1' , ''        , ''        , ''        , ''        , ''        , ''             , ''             , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1' , 'wall1'   , 'substair', 'stair'   , ''        , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      ,'wall1'  , ''      , ''       , ''      , ''      , ''       , ''      , ''      , ''             , ''             , ''             , ''             , ''             , 'wall1'],
  ['wall1', ''        , ''        , ''       , ''       , ''       , ''       , ''      , ''             , ''             , ''             , ''             , ''             , ''      , ''        , ''        , ''        , ''        , ''        , ''             , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1'        , 'wall1' , 'wall1'   , 'wall1'   , 'substair', 'stair'   , ''        , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''      , ''       , ''      , 'art2'  , ''       , ''      , ''      , ''             , ''             , 'wifi'         , ''             , ''             , 'wall1'],
  ['wall1', 'it1'     , 'it2'     , 'event-1', ''       , ''       , ''       , ''      , ''             , ''             , ''             , ''             , ''             , ''      , ''        , ''        , 'pnj'     , ''        , ''        , 'stair flip'   , 'substair flip', 'wall1'        , 'wall1'        , 'wall1'        , 'wall1' , 'wall1'   , 'wall1'   , 'wall1'   , 'substair', 'stair'   , ''      , ''      , ''      , ''      , ''      , 'pnj'   , ''      , ''      , ''      , 'desktop', 'pnj'   , ''      , 'desktop', ''      , 'pnj'   , 'desktop'      , ''             , ''             , 'desktop'      , 'key'          , 'wall1'],
  ['wall1', 'ground'  , 'ground'  , 'ground' , 'ground' , 'ground' , 'ground' , 'ground', 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground', 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'substair flip', 'wall1'        , 'wall1'        , 'wall1'        , 'wall1'        , 'wall1' , 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'   , 'substair', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground' , 'ground', 'ground', 'ground' , 'ground', 'ground', 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'ground'       , 'wall1'],
];

var i, j;

var decors = ['wall1', 'ground', 'substair', 'stair', 'stair flip', 'substair flip', 'it1', 'it2'];
var ennemies = ['pnj'];
var decorations = ['it-plate', 'desktop', 'bed', 'door1', 'door2', 'flower', 'art1', 'art2', 'art3'];

var ennemiesDom = [];

for (i = 0; i < map.length; i++) {
  var level = map[i];
  var domLevel = [];
  for (j = 0; j < level.length; j++) {
    if (level[j]) {
      var tile = undefined;
      if (decors.includes(level[j])) {
        tile = new Decor(level[j], j, i);
        domLevel.push(tile);
      } else if (Game.items.includes(level[j])) {
        tile = new Item(level[j], j, i);
        domLevel.push(tile);
      } else if (ennemies.includes(level[j])) {
        tile = new Character('pnj', j, i);
        ennemiesDom.push(tile);
        domLevel.push({blocking: false});
      } else if (level[j] === 'wifi') {
        tile = new Wifi(j, i);
        domLevel.push(tile);
      } else if (decorations.includes(level[j])) {
        tile = new Element(level[j], j, i, true);
        domLevel.push({blocking: false});
      }

      if (tile) {
        Game.drawElement(tile);
      }  else if (level[j].indexOf('event') === 0){
        tile = new GameEvent(level[j].split('-')[1], 'event', j, i);
        domLevel.push(tile);
      }
    } else {
      domLevel.push({blocking: false});
    }
  }
  Game.domMap.push(domLevel);
}

oMap.getArround = function(x, y, w, h) {
  var currentX = Math.floor(x);
  var currentY = Math.floor(y);

  var tileX, tileY;

  var left = false;
  var right = false;
  var top = false;
  var bottom = false;

  var pObj = {
    x,
    y,
    w,
    h
  };

  for (tileX = currentX - 1; tileX <= currentX + 1; tileX++) {
    for (tileY = currentY - 1; tileY <= currentY + 1; tileY++) {
      if (!Game.domMap[tileY] || !Game.domMap[tileY][tileX]) {
        continue;
      }
      var tObj = {
        x: tileX,
        y: tileY,
        w: 1,
        h: 1
      }
      var isCollapsing = collapse(pObj, tObj) && Game.domMap[tileY][tileX].blocking;
      if (isCollapsing) {
        if (tileX <= currentX) {
          left = true;
        }
        if (tileX >= currentX) {
          right = true;
        }
        if (tileY <= currentY) {
          top = true;
        }
        if (tileY >= currentY) {
          bottom = true;
        }
      }
    }
  }

  return {
    left,
    right,
    top,
    bottom
  };
}

oMap.getCurrents = function(x, y, w, h) {
  var currentX = Math.floor(x);
  var currentY = Math.floor(y);

  var tileX, tileY;

  var collapsingTiles = [];

  var pObj = {x,y,w,h};

  for (tileX = currentX - 1; tileX <= currentX + 1; tileX++) {
    for (tileY = currentY - 1; tileY <= currentY + 1; tileY++) {
      if (!Game.domMap[tileY] || !Game.domMap[tileY][tileX] || !Game.domMap[tileY][tileX].type) {
        continue;
      }

      var collapsePlace = collapse(pObj, Game.domMap[tileY][tileX].getHitbox());
      if (collapsePlace) {
        collapsingTiles.push({
          direction: collapsePlace,
          element: Game.domMap[tileY][tileX]
        });
      }
    }
  }

  ennemiesDom.forEach(function(ennemy) {
    var collapsePlace = collapse(ennemy.getHitbox(), pObj);
    if (collapsePlace) {
      collapsingTiles.push({
        direction: collapsePlace,
        element: ennemy
      });
    }
  });

  return collapsingTiles;
}

function collapse(obj1, obj2) {
  var isCollapsing = false;

  var xCollapseRight = (obj1.x <= obj2.x && obj1.x + obj1.w > obj2.x);
  var xCollapseLeft = (obj2.x <= obj1.x && obj2.x + obj2.w > obj1.x);

  var yCollapseTop = (obj1.y <= obj2.y && obj1.y + obj1.h > obj2.y);
  var yCollapseBottom  = (obj2.y <= obj1.y && obj2.y + obj2.h > obj1.y);

  if ((xCollapseLeft || xCollapseRight) && (yCollapseTop || yCollapseBottom)) {
    var collapsePlace = [];
    if (xCollapseLeft) {
      collapsePlace.push('left');
    }
    if (xCollapseRight) {
      collapsePlace.push('right');
    }
    if (yCollapseTop) {
      collapsePlace.push('top');
    }
    if (yCollapseBottom) {
      collapsePlace.push('bottom');
    }

    // console.log(JSON.stringify(obj1), JSON.stringify(obj2), xCollapse, yCollapse);
    return collapsePlace.join('-');
  }

  return false;
}

oMap.moveEnnemies = function(deltaX) {
  ennemiesDom.forEach(function(ennemy) {
    if (ennemy.x < ennemy.baseX - 1 || ennemy.x > ennemy.baseX + 1) {
      ennemy.direction *= -1;
      if (ennemy.direction === -1) {
        ennemy.currentMovement('walking-left');
      } else {
        ennemy.currentMovement('walking-right');
      }
    }

    ennemy.move(ennemy.direction * deltaX, 0);
  });
}

export default oMap;
