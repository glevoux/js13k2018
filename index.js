require('./src/components/game.html');

require('./src/components/game.js');
require('./src/components/elements.js');
require('./src/components/player.js');
require('./src/components/map.js');
require('./src/components/events.js');
require('./src/components/menu/menu.js');

require('./src/scss/game.scss');

import Game from 'Game';

window.game = Game;
