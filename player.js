var player = new Character('player', 1, 8);
drawElement(player);

var movementSpeed = 2;

setInterval(function() {
	var deltaX = movementSpeed/16;
	var deltaY = movementSpeed * 2 / 16;
	//getArround(player.x - deltaX, player.y, 1, 1);
	// console.log('--------------');
	if (keys[37] && !getArround(player.x - deltaX, player.y, 1, 1).left) {
		player.move(-deltaX, 0);
		player.currentMovement('walking-left');
	}
	
	if (keys[39] && !getArround(player.x + deltaX, player.y, 1, 1).right) {
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

		if (deltaXJ < 150 && !getArround(player.x, player.y - deltaY, 1, 1).top) {
			player.move(0, -deltaY);
		} else {
			player.jumping = false;
		}
	} else {
		if (!getArround(player.x, player.y + deltaY, 1, 1).bottom) {
			player.move(0, deltaY);
			player.falling(true);
		} else {
			player.falling(false);
		}
	}
}, 33);