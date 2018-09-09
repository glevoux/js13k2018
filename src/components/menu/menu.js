import Utils from 'Utils';

const itemList = ['ethernet', 'wifirouter', 'power', 'key'];
let donutsAvailable = 2;

const menu = {};
menu.el = document.querySelector('.menu');
menu.status = 'open';
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
menu.addItemToInvent = function(item, id, state) {
  if (item === 'list') {
    generateList();
  }
  if (state === undefined) {
    state = '';
  }

  if (item !== 'donut' && checkIfInInvent(item) !== undefined) {
    let itemFound = checkIfInInvent(item);
    if (itemFound.state === 'listed') {
      let elToUpdate = document.getElementById(itemFound.id);
      elToUpdate.innerHTML = '';
      elToUpdate.classList.remove('listed');
      itemFound.state = '';
    }
  } else {
    if (item === 'donut') {
      if (donutsAvailable > 0) {
        donutsAvailable--;
      } else {
        return false;
      }
    }

    let newItem = {};
    newItem.id = id;
    newItem.name = item;
    newItem.state = state;
    menu.inventory.push(newItem);
    menu.drawInventoryItem(newItem);
  }
}
menu.drawInventoryItem = function(item) {
  let newElContainer = document.createElement('li');
  newElContainer.classList.add('inventory__block');

  let newEl = document.createElement('div');
  if (item.state === 'listed') {
    newEl.classList = 'inventory__item sprite listed ' + item.name;
  } else {
    newEl.classList = 'inventory__item sprite ' + item.name;
  }
  newEl.id = item.id;
  newEl.title = item.name;
  if(item.state === 'listed') {
    newEl.innerText = item.name;
  }

  newElContainer.appendChild(newEl);
  menu.inventoryEl.appendChild(newElContainer);
}
menu.setAsTaken = function(id) {
  let elToUpdate = document.getElementById(id);
  elToUpdate.classList.add('taken');
  let itemToUpdate = menu.inventory.find(item => item.id === id);
  itemToUpdate.state = 'taken';
}

function checkIfInInvent(name) {
  let itemSearched = menu.inventory.find(item => item.name === name);
  return itemSearched;
}

function generateList() {
  for (let i = 0; i < itemList.length; i++) {
    menu.addItemToInvent(itemList[i], Utils.makeId(), 'listed');
  }
}

// Tape ESC or I to open/close the menu
window.addEventListener('keyup',
  function(e){
    if(e.keyCode === 27 || e.keyCode === 73) {
      if(menu.status === 'close') {
        menu.open();
      } else {
        menu.close();
      }
    }
  },
false);

export default menu;
