var player = new Character('player', 1, 11);
drawElement(player);
var playerPosition = player.dom.getBoundingClientRect();
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var targetLeft = screenWidth / 2;
var targetTop = screenHeight / 2;

gameDom.style.left = targetLeft - playerPosition.left - 24 + 'px';
gameDom.style.top = targetTop - playerPosition.top - 24 + 'px';

var movementSpeed = 2;

setInterval(function() {
	var deltaX = movementSpeed/16;
	var deltaY = movementSpeed * 2 / 16;

	var hitbox = player.getHitbox();

	if (player.hurted) {
		var [hurtedTime, hurtedDirection] = player.hurted.split('-');
		var deltaTime = (new Date()).getTime() - hurtedTime;

		var hit = false;
		if (deltaTime < 300) {
			if (hurtedDirection === 'left') {
				if (!getArround(hitbox.x - deltaY, hitbox.y - deltaX, hitbox.w, hitbox.h).left) {
					player.move(-deltaY, -deltaX);
				}
			} else {
				if (!getArround(hitbox.x + deltaY, hitbox.y - deltaX, hitbox.w, hitbox.h).right) {
					player.move(deltaY, -deltaX);
				}
			}
		} else {
			player.endHurt();
		}
	} else {
		if (keys[37] && !getArround(hitbox.x - deltaX, hitbox.y, hitbox.w, hitbox.h).left) {
			player.move(-deltaX, 0);
			player.currentMovement('walking-left');
		}
		
		if (keys[39] && !getArround(hitbox.x + deltaX, hitbox.y, hitbox.w, hitbox.h).right) {
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

			if (deltaXJ < 300 && !getArround(hitbox.x, hitbox.y - deltaY, hitbox.w, hitbox.h).top) {
				player.move(0, -deltaY);
			} else {
				player.jumping = false;
			}
		} else {
			if (!getArround(hitbox.x, hitbox.y + deltaY, hitbox.w, hitbox.h).bottom) {
				player.move(0, deltaY);
				player.falling(true);
			} else if (!getArround(hitbox.x, hitbox.y + deltaX, hitbox.w, hitbox.h).bottom) {
				player.move(0, deltaX);
				player.falling(true);
			} else {
				player.falling(false);
			}
		}
	}

	moveEnnemies(deltaX);

	getCurrents(hitbox.x, hitbox.y, hitbox.w, hitbox.h).forEach(function(t) {
		t.element.touch(player, t.direction);
	});
}, 33);