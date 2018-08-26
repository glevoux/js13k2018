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
menu.addItemToInvent = function(item, id) {
  let newItem = {};
  newItem.id = id;
  newItem.name = item;
  newItem.state = '';
  menu.inventory[newItem.id] = newItem;
  menu.drawInventoryItem(newItem);
}
menu.drawInventoryItem = function(item) {
  let newElContainer = document.createElement('li');
  newElContainer.classList.add('inventory__block');

  let newEl = document.createElement('div');
  newEl.classList = 'inventory__item sprite ' + item.name;
  newEl.id = item.id;
  if(item.state === 'listed') {
    newEl.innerText = item.name;
  }

  newElContainer.appendChild(newEl);
  menu.inventoryEl.appendChild(newElContainer);
}
menu.setAsTaken = function(id) {
  let elToUpdate = document.getElementById(id);
  elToUpdate.classList.add('taken');
  menu.inventory[id].state = 'taken';
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
