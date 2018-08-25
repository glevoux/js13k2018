var player = new Character('player', 1, 8);
drawElement(player);

var movementSpeed = 2;

setInterval(function() {
	var deltaX = movementSpeed/16;
	var deltaY = movementSpeed * 2 / 16;
	//getArround(player.x - deltaX, player.y, 1, 1);
	// console.log('--------------');

	// Sprite specific dimensions
	var xPos = player.x + 0.25;
	var yPos = player.y;
	var xWidth = 0.5;
	var yWidth = 1;

	if (keys[37] && !getArround(xPos - deltaX, yPos, xWidth, yWidth).left) {
		player.move(-deltaX, 0);
		player.currentMovement('walking-left');
	}
	
	if (keys[39] && !getArround(xPos + deltaX, yPos, xWidth, yWidth).right) {
		player.move(deltaX, 0);
		player.currentMovement('walking-right');
	}

	if (keys[38] && !player.jumping && !player.isFalling) {
		player.startJump();
	}

	if (!keys[37] && !keys[39]) {
		player.currentMovement();
	}

	if (player.jumping) {
		var deltaXJ = (new Date()).getTime() - player.jumping;
		player.falling(true);

		if (deltaXJ < 150 && !getArround(xPos, yPos - deltaY, xWidth, yWidth).top) {
			player.move(0, -deltaY);
		} else {
			player.jumping = false;
		}
	} else {
		if (!getArround(xPos, yPos + deltaY, xWidth, yWidth).bottom) {
			player.move(0, deltaY);
			player.falling(true);
		} else {
			player.falling(false);
		}
	}
}, 33);