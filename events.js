var events = [
	'Welcome to Instabitch ! This is the panic in the University, Internet is broken ! But you NEED to upload selfies for your followers ! Find a way to fix the Internet !',
	'Have you tried turning it off and on again ? If you want more help, give us Donuts !',
	'Hmmm, we love donuts ! Okay ! Here is a list ! Find all elements and come back to us. Maybe it will fix the Internet ?'
];

var talks = document.querySelector('.talks');
function startEvent(event) {
	if (event.id === '1' && !objectsFound.includes('donut')) {
		talks.innerHTML = '<h1>' + events[event.id] + '<h1>';
		return false;
	} else if (event.id === '1') {
		event.id = 2;

		var list = new Item('list', 7, 4);
		domMap[4][7] = list;
		drawElement(list);

		return false;
	} else {
		talks.innerHTML = '<h1>' + events[event.id] + '<h1>';
		// setTimeout(() => talks.innerHTML = '', 5000);
		return true;
	}
}