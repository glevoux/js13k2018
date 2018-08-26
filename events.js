var events = [
	'Welcome to Instabitch ! This is the panic in the University, Internet is broken ! But you NEED to upload selfies for your followers ! Find a Way to fix the Internet !'
];

var talks = document.querySelector('.talks');
function startEvent(id) {
	talks.innerHTML = events[id];
	setTimeout(() => talks.innerHTML = '', 5000);
	return true;
}