var map = [
	['wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1'],
	['wall1', ''     , ''     , ''     , ''     , ''     , ''     , ''     , ''     , 'wall1'],
	['wall1', ''     , ''     , ''     , ''     , ''     , ''     , ''     , ''     , 'wall1'],
	['wall1', ''     , ''     , 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1'],
	['wall1', 'stair', ''     , ''     , ''     , ''     , ''     , ''     , ''     , 'wall1'],
	['wall1', 'wall1', 'stair', ''     , ''     , ''     , ''     , ''     , ''     , 'wall1'],
	['wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', ''     , ''     , 'wall1'],
	['wall1', ''     , ''     , ''     , ''     , ''     , ''     , ''     , 'stair', 'wall1'],
	['wall1', ''     , ''     , ''     , ''     , ''     , ''     , 'stair', 'wall1', 'wall1'],
	['wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1', 'wall1']
];

var i, j;
var domMap = [];
for (i = 0; i < map.length; i++) {
	var level = map[i];
	var domLevel = [];
	for (j = 0; j < map.length; j++) {
		if (level[j]) {
			var tile = new Decor(level[j], j, i, true);
			domLevel.push(tile);
			drawElement(tile);
		} else {
			domLevel.push({blocking: false});
		}
	}
	domMap.push(domLevel);
}

function getArround(x, y, w, h, distanceX, distanceY) {
	var xStart = Math.floor(x);
	var xEnd = Math.floor(x+w-1);

	var yStart = Math.floor(y);
	var yEnd = Math.floor(y+h-1);
	var i;

	var left = false;
	xStart = Math.floor(x - distanceX);
	for (i = yStart; i <= yEnd; i++) {
		if (domMap[i] && domMap[i][xStart] && domMap[i][xStart].blocking) {
			left = true;
			break;
		}
	}
	xStart = Math.floor(x);

	var right = false;
	xEnd = Math.floor(x+w);
	for (i = yStart; i <= yEnd; i++) {
		if (domMap[i] && domMap[i][xEnd] && domMap[i][xEnd].blocking) {
			right = true;
			break;
		}
	}
	xEnd = Math.floor(x+w-1);

	var bottom = false;
	yEnd = Math.floor(y+h);
	for (i = xStart; i <= xEnd; i++) {
		if (domMap[yEnd] && domMap[yEnd][i] && domMap[yEnd][i].blocking) {
			bottom = true;
			break;
		}
	}
	yEnd = Math.floor(y+h-1);

	var top = false;
	yStart = Math.floor(y - distanceY);
	for (i = xStart; i <= xEnd; i++) {
		if (domMap[yStart] && domMap[yStart][i] && domMap[yStart][i].blocking) {
			top = true;
			break;
		}
	}
	yStart = Math.floor(y);

	return {
		bottom,
		left,
		right,
		top
	};
}