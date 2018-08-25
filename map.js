var map = [
	['wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1'],
	['wall1', ''     , ''     , ''     , ''     , ''     , ''     , ''     , ''     , 'wall1'],
	['wall1', ''     , ''     , ''     , ''     , ''     , ''     , ''     , ''     , 'wall1'],
	['wall1', ''     , ''     , 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1'],
	['wall1', 'stair', ''     , ''     , ''     , ''     , ''     , ''     , ''     , 'wall1'],
	['wall1', 'substair', 'stair', ''     , ''     , ''     , ''     , ''     , ''     , 'wall1'],
	['wall1', 'wall1', 'wall1', 'ground', 'ground', 'ground', 'ground', ''     , ''     , 'wall1'],
	['wall1', ''     , ''     , ''     , ''     , ''     , ''     , ''     , 'stair flip', 'wall1'],
	['wall1', ''     , ''     , ''     , ''     , ''     , ''     , 'stair flip', 'substair flip', 'wall1'],
	['wall1', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'wall1', 'wall1', 'wall1']
];

var i, j;
var domMap = [];
for (i = 0; i < map.length; i++) {
	var level = map[i];
	var domLevel = [];
	for (j = 0; j < map.length; j++) {
		if (level[j]) {
			var tile = new Decor(level[j], j, i);
			domLevel.push(tile);
			drawElement(tile);
		} else {
			domLevel.push({blocking: false});
		}
	}
	domMap.push(domLevel);
}

function getArround(x, y, w, h) {
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

function getCurrents(x, y, w, h) {
	var currentX = Math.floor(x);
	var currentY = Math.floor(y);

	var tileX, tileY;

	var collapsingTiles = [];

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
			if (collapse(pObj, tObj) && domMap[tileY][tileX].type) {
				collapsingTiles.push(domMap[tileY][tileX]);
			}
		}
	}

	return collapsingTiles;
}

function collapse(obj1, obj2) {
	var isCollapsing = false;

	var xCollapse = (obj1.x <= obj2.x && obj1.x + obj1.w > obj2.x)
				 || (obj2.x <= obj1.x && obj2.x + obj2.w > obj1.x);

	var yCollapse = (obj1.y <= obj2.y && obj1.y + obj1.h > obj2.y)
				 || (obj2.y <= obj1.y && obj2.y + obj2.h > obj1.y);

	// console.log(JSON.stringify(obj1), JSON.stringify(obj2), xCollapse, yCollapse);
	return xCollapse && yCollapse;
}