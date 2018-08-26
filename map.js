import { Decor, Item, Character } from 'Elements';
import Game from 'Game';

const oMap = {};
 
var map = [
	['wall1', 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'   , 'wall1'      , 'wall1' , 'wall1'         , 'wall1'         , 'wall1'         , 'wall1'        , 'wall1'],
	['wall1', ''        , ''        , ''        , ''        , ''           , ''      , ''              , ''              , ''              , ''             , 'wall1'],
	['wall1', ''        , ''        , ''        , ''        , ''           , ''      , ''              , ''              , ''              , ''             , 'wall1'],
	['wall1', ''        , ''        , ''        , ''        , ''           , ''      , ''              , ''              , ''              , ''             , 'wall1'],
	['wall1', ''        , ''        , ''        , 'donut'   , 'pnj'        , 'list'  , ''              , ''              , ''              , ''             , 'wall1'],
	['wall1', ''        , ''        , 'ground'  , 'ground'  , 'ground'     , 'ground', 'ground'        , 'ground'        , 'ground'        , 'ground'       , 'wall1'],
	['wall1', 'stair'   , ''        , ''        , ''        , ''           , ''      , ''              , ''              , ''              , ''             , 'wall1'],
	['wall1', 'substair', 'stair'   , ''        , ''        , ''           , ''      , ''              , ''              , ''              , ''             , 'wall1'],
	['wall1', 'wall1'   , 'substair', 'stair'   , ''        , ''           , ''      , ''              , ''              , ''              , ''             , 'wall1'],
	['wall1', 'wall1'   , 'wall1'   , 'substair', 'stair'   , 'power'      , ''      , 'pnj'           , ''              , ''              , ''             , 'wall1'],
	['wall1', 'wall1'   , 'wall1'   , 'wall1'   , 'substair', 'ground'     , 'ground', 'ground'        , 'ground'        , ''              , ''             , 'wall1'],
	['wall1', ''        , ''        , ''        , ''        , ''           , ''      , ''              , ''              , ''              , 'stair flip'   , 'wall1'],
	['wall1', ''        , ''        , ''        , ''        , ''           , ''      , ''              , ''              , 'stair flip'    , 'substair flip', 'wall1'],
	['wall1', ''        , ''        , ''        , ''        , ''           , ''      , ''              , 'stair flip'    , 'substair flip' , 'wall1'        , 'wall1'],
	['wall1', ''        , 'event-0' , 'ethernet', 'pnj'     , 'wifi-router', ''      , 'stair flip'    , 'substair flip' , 'wall1'         , 'wall1'        , 'wall1'],
	['wall1', 'ground'  , 'ground'  , 'ground'  , 'ground'  , 'ground'     , 'ground', 'substair flip' , 'wall1'         , 'wall1'         , 'wall1'        , 'wall1']
];

var i, j;
var domMap = [];

var decors = ['wall1', 'ground', 'substair', 'stair', 'stair flip', 'substair flip'];
var items = ['ethernet', 'wifi-router', 'power', 'key', 'donut', 'list'];
var ennemies = ['pnj'];

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
			} else if (items.includes(level[j])) {
				tile = new Item(level[j], j, i);
				domLevel.push(tile);
			} else if (ennemies.includes(level[j])) {
				tile = new Character('pnj', j, i);
				ennemiesDom.push(tile);
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
	domMap.push(domLevel);
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
			if (!domMap[tileY] || !domMap[tileY][tileX]) {
				continue;
			}
			var tObj = {
				x: tileX,
				y: tileY,
				w: 1,
				h: 1
			}
			var isCollapsing = collapse(pObj, tObj) && domMap[tileY][tileX].blocking;
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
			if (!domMap[tileY] || !domMap[tileY][tileX] || !domMap[tileY][tileX].type) {
				continue;
			}

			var collapsePlace = collapse(pObj, domMap[tileY][tileX].getHitbox());
			if (collapsePlace) {
				collapsingTiles.push({
					direction: collapsePlace,
					element: domMap[tileY][tileX]
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
	var yCollapseBottom	= (obj2.y <= obj1.y && obj2.y + obj2.h > obj1.y);

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

function remove(e) {
	domMap[e.y][e.x] = undefined;
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
