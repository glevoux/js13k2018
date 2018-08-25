// Décor bloquant ou non
// - Sprite
// - info
// Personnages
// - Sprite
// - 
// - Fonction de déplacement
// - Fonction de contact
// Items
// - Sprite
// - 

class Element {
	constructor(type, x, y) {
		this.type = type;
		this.x = x;
		this.y = y;

		this.dom = document.createElement('div');
		this.type.split(' ').forEach(t => this.dom.classList.add(t));
		
		this.dom.classList.add('sprite');

		this.dom.style.top = this.y * toDom() + 'px';
		this.dom.style.left = this.x * toDom() + 'px';

		this.isRendered = false;
	}

	move(deltaX, deltaY) {
		this.x += deltaX;
		this.y += deltaY;

		this.dom.style.top = this.y * toDom() + 'px';
		this.dom.style.left = this.x * toDom() + 'px';
	}

	touch(e) {}

	getHitbox() {
		return {
			x: this.x,
			y: this.y,
			w: 1,
			h: 1
		};
	}
}

class Decor extends Element {
	constructor(type, x, y) {
		super(type, x, y);
		if (this.type.indexOf('stair') === -1) {
			this.blocking = true;
		}
	}

	touch(e) {
		if (this.type.indexOf('stair') === 0 && this.type.indexOf('flip') !== -1) {
			var hitbox = e.getHitbox();
			var center = hitbox.x+hitbox.w/2;
			if (Math.floor(center) === this.x) {
				var insideProgress = center - this.x;
				if (hitbox.y+hitbox.h > this.y + 1 - insideProgress) {
					e.move(0, -(hitbox.y+hitbox.h - (this.y + 1 - insideProgress)));
					if (e.isFalling) {
						e.falling(false);
					}
				}
			}
		} else if (this.type.indexOf('stair') === 0 && this.type.indexOf('flip') === -1) {
			var hitbox = e.getHitbox();
			var center = hitbox.x+hitbox.w/2;
			if (Math.floor(center) === this.x) {
				var insideProgress = 1 + this.x - center;
				if (hitbox.y+hitbox.h > this.y + 1 - insideProgress) {
					e.move(0, -(hitbox.y+hitbox.h - (this.y + 1 - insideProgress)));
					if (e.isFalling) {
						e.falling(false);
					}
				}
			}
		}
	}
}

function toDom() {
	return 16 * size;
}

class Character extends Element {
	constructor(type, x, y) {
		switch (type) {
			case 'player':
				super(type, x, y);
				break;
			case 'PNJ':
				super(`pnj${randomPNJ}`, x, y);
				break;
			default:
				throw new Error(`Type ${type} unknown for class Character`);
		}
	}

	currentMovement(movement) {
		var movements = ['walking-left', 'walking-right', 'hurted'];
		movements.forEach(m => {
			if (m !== movement) {
				this.dom.classList.remove(m);
			} else {
				this.dom.classList.add(m);
			}
		});

		if (movement === 'walking-left') {
			this.dom.classList.add('flip');
		} else if (movement === 'walking-right') {
			this.dom.classList.remove('flip');
		}
	}

	startJump() {
		if (this.jumping) {
			return;
		}

		this.jumping = (new Date()).getTime();
	}

	falling(isFalling) {
		if (isFalling) {
			this.dom.classList.add('falling');
		} else {
			this.dom.classList.remove('falling');
		}
		this.isFalling = isFalling;
	}

	getHitbox() {
		return {
			x: this.x + 0.25,
			y: this.y,
			w: 0.5,
			h: 1
		};
	}
}

function randomPNJ() {
	return Math.floor(Math.random() * 3);
}

class Item extends Element {
	constructor(type, x, y) {
		switch (type) {
			case 'ethernet':
				super('0,80,16,16', x, y);
				break;
			case 'wifi':
				super('16,80,16,16', x, y);
				break;
			case 'alim':
				super('32,80,16,16', x, y);
				break;
			case 'keys':
				super('48,80,16,16', x, y);
				break;
			case 'donuts':
				super('64,80,16,16', x, y);
				break;
			case 'cake':
				super('80,80,16,16', x, y);
				break;
		}
	}
}

class Wifi extends Element {
	constructor(x, y) {
		super('0,96,48,16');
	}
}