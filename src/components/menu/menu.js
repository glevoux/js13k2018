const menu = {};
menu.el = document.querySelector('.menu');
menu.status = 'close';
menu.inventory = [];
menu.inventoryEl = document.querySelector('.inventory');

menu.open = function() {
  menu.el.classList.add('open');
  menu.status = 'open';
}
menu.close = function() {
  menu.el.classList.replace('open', 'close');
  setTimeout(function() {
    menu.el.classList.remove('close');
    menu.status = 'close';
  }, 300);
}
menu.addItemToInvent = function(item) {
  let newItem = {};
  newItem.id = makeid();
  newItem.name = item;
  newItem.state = '';
  menu.inventory[newItem.id] = newItem;
  menu.drawInventoryItem(newItem);
}
menu.drawInventoryItem = function(item) {
  let newEl = document.createElement('li');
  newEl.classList.add('inventory__item');
  newEl.id = item.id;
  newEl.innerText = item.name;
  menu.inventoryEl.appendChild(newEl);
  console.log(menu.inventory);
}

function makeid() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

// Tape I to open/close the menu
window.addEventListener('keyup',
  function(e){
    if(e.keyCode === 73) {
      if(menu.status === 'close') {
        menu.open();
      } else {
        menu.close();
      }
    }
  },
false);

export default menu;
