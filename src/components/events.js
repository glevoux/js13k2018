import Game from 'Game';

const oEvent = {};

var events = [
	'Welcome to my new story "How I Saved The Internet" ! This is the panic in the University, Internet is broken! But, for you my followers, I NEED to upload selfies! I will find a way to fix the Internet!',
	'Have you tried turning it off and on again? If you want more help, give us Donuts!',
	'Hmmm, we love donuts! Okay! Here is a list! Find all elements and come back to us. Maybe it will fix the Internet ?',
	'And because you can\'t live without me, I promess to upload a selfie every 30secs ! I\'m so niiiice!',
	'Looks at those people! All affraid because they don\'t have a connection anymore... I must be careful, maybe they are dangerous?',
	'Well done ! You find everything ! Mmmmh... Nope, we can\'t do anything here, you will have to call the hotline ! Bye !'
];

var talks = document.querySelector('.talks');
oEvent.startEvent = function(event, Item, timeLimit) {
	if (event.id === '1' && !Game.objectsFound.find(object => (object.name === 'donut'))) {
		talks.innerHTML = '<h1>' + events[event.id] + '<h1>';
		return false;
	} else if (event.id === '1') {
		event.id = 2;

		var list = new Item('list', 6, 19);
		Game.domMap[19][6] = list;
	    Game.drawElement(list);
	    Game.removeObject('donut');

		return false;
	} else if (event.id === 2 && Game.items.filter(o => Game.objectsFound.map(o2 => o2.name).indexOf(o) === -1).length === 0) {
		event.id = 5;
		return false;
	} else if (event.id === 2) {
		return false;
	} else {
		talks.innerHTML = '<h1>' + events[event.id] + '<h1>';
		if (timeLimit) {
			timeout = setTimeout(() => talks.innerHTML = '', timeLimit);
		}
		return true;
	}
}

export default oEvent;
