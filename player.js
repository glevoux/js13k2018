var player = new Character('player', 1, 8);
drawElement(player);

var movementSpeed = 2;

setInterval(function() {
	var arround = getArround(player.x, player.y, 1, 1, movementSpeed / 16, movementSpeed * 2 / 16);
	if (keys[37] && !arround.left) {
		player.move(-movementSpeed/16, 0);
		player.currentMovement('walking-left');
	}
	if (keys[38] && !player.jumping) {
		player.startJump();
	}
	if (keys[39] && !arround.right) {
		player.move(movementSpeed/16, 0);
		player.currentMovement('walking-right');
	}

	if (!keys[37] && !keys[39]) {
		player.currentMovement();
	}

	if (player.jumping) {
		var deltaX = (new Date()).getTime() - player.jumping;
		if (deltaX < 150 && !arround.top) {
			player.move(0, -movementSpeed * 2 / 16);
		} else {
			player.jumping = false;
		}
	} else {
		if (!arround.bottom) {
			player.move(0, movementSpeed * 2 / 16);
		}
	}
}, 33);