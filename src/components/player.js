import { Character } from 'Elements';
import Game from 'Game';
import Map from 'Map';

var player = new Character('player', 5, 14);
Game.drawElement(player);
var playerPosition = player.dom.getBoundingClientRect();
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var targetLeft = screenWidth / 2;
var targetTop = screenHeight / 2;

Game.gameDom.style.left = targetLeft - playerPosition.left - 24 + 'px';
Game.gameDom.style.top = targetTop - playerPosition.top - 24 + 'px';

var movementSpeed = 2;

var remainingTime = document.querySelector('.remainingTime');
var youAreDead = document.querySelector('.you-are-dead');

var stop = false;

setInterval(function() {
	if (stop) {
		return;
	}
	var deltaX = movementSpeed/16;
	var deltaY = movementSpeed * 2 / 16;

	var hitbox = player.getHitbox();

	if (player.hurted) {
		var [hurtedTime, hurtedDirection] = player.hurted.split('-');
		var deltaTime = (new Date()).getTime() - hurtedTime;

		var hit = false;
		if (deltaTime < 300) {
			if (hurtedDirection === 'left') {
				if (!Map.getArround(hitbox.x - deltaY, hitbox.y - deltaX, hitbox.w, hitbox.h).left) {
					player.move(-deltaY, -deltaX);
				}
			} else {
				if (!Map.getArround(hitbox.x + deltaY, hitbox.y - deltaX, hitbox.w, hitbox.h).right) {
					player.move(deltaY, -deltaX);
				}
			}
		} else {
			player.endHurt();
		}
	} else {
		if (Game.keys[37] && !Map.getArround(hitbox.x - deltaX, hitbox.y, hitbox.w, hitbox.h).left) {
			player.move(-deltaX, 0);
			player.currentMovement('walking-left');
		}
		
		if (Game.keys[39] && !Map.getArround(hitbox.x + deltaX, hitbox.y, hitbox.w, hitbox.h).right) {
			player.move(deltaX, 0);
			player.currentMovement('walking-right');
		}

		if (Game.keys[38] && !player.jumping && !player.isFalling) {
			player.startJump();
		}

		if (!Game.keys[37] && !Game.keys[39]) {
			player.currentMovement();
		}

		if (player.jumping) {
			var deltaXJ = (new Date()).getTime() - player.jumping;
			player.falling(true);

			if (deltaXJ < 300 && !Map.getArround(hitbox.x, hitbox.y - deltaY, hitbox.w, hitbox.h).top) {
				player.move(0, -deltaY);
			} else {
				player.jumping = false;
			}
		} else {
			if (!Map.getArround(hitbox.x, hitbox.y + deltaY, hitbox.w, hitbox.h).bottom) {
				player.move(0, deltaY);
				player.falling(true);
			} else if (!Map.getArround(hitbox.x, hitbox.y + deltaX, hitbox.w, hitbox.h).bottom) {
				player.move(0, deltaX);
				player.falling(true);
			} else {
				player.falling(false);
			}
		}
	}

	Map.moveEnnemies(deltaX);

	Map.getCurrents(hitbox.x, hitbox.y, hitbox.w, hitbox.h).forEach(function(t) {
		t.element.touch(player, t.direction);
	});

	var currentDate = (new Date()).getTime();
	var time = (30000 - (currentDate - player.lastSelfieTime));
	if (time < 0) {
		player.die();
		remainingTime.innerHTML = 'YOU LOSE';
		youAreDead.classList.add('very-dead');
		stop = true;
	} else {
		remainingTime.innerHTML = 'Take a selfie before: ' + (time / 1000);
	}

	if (player.x % 0.125 !== 0) {
		console.log('There !');
		player.move(-player.x % 0.125, 0);
	}
}, 33);
