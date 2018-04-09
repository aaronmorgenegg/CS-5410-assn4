// Constants to allow changing of 'magic numbers'
// Things may or may not work if these are changed... No guarantees

// Gameplay options

GAME_WIDTH = 1600; // Note that you'll have to change the canvas size in index.html as well
GAME_HEIGHT = 900; // Note that you'll have to change the canvas size in index.html as well
MENU_WIDTH = 400; // This is set up to have the menu on the left side, leaving a square play area
MENU_HEIGHT = GAME_HEIGHT;
GRID_WIDTH = 24;
GRID_HEIGHT = 18;
CELL_WIDTH = (GAME_WIDTH - MENU_WIDTH)/GRID_WIDTH;
CELL_HEIGHT = GAME_HEIGHT/GRID_HEIGHT;
STARTING_LIVES = 100;
STARTING_MONEY = 100;
LR_GATE_SIZE = 8; // Size of the gates on the left and right sides
UD_GATE_SIZE = 8; // Size of the gates on the top and bottom sides

// Tower Stats

BULLET1_DISPLAY = 'Bullet Tower lvl 1';
BULLET1_RANGE = 5;
BULLET1_DAMAGE = 3;
BULLET1_SPEED = 3;
BULLET1_SPLASH = false;
BULLET1_TARGETING = 'ground';
BULLET1_COST = 10;

BOMB1_DISPLAY = 'Bomb Tower lvl 1';
BOMB1_RANGE = 4;
BOMB1_DAMAGE = 2;
BOMB1_SPEED = 2;
BOMB1_SPLASH = true;
BOMB1_TARGETING = 'ground';
BOMB1_COST = 25;

LASER1_DISPLAY = 'Laser Tower lvl 1';
LASER1_RANGE = 8;
LASER1_DAMAGE = 4;
LASER1_SPEED = 5;
LASER1_SPLASH = false;
LASER1_TARGETING = 'air';
LASER1_COST = 15;

MISSILE1_DISPLAY = 'Missile Tower lvl 1';
MISSILE1_RANGE = 10;
MISSILE1_DAMAGE = 3;
MISSILE1_SPEED = 1;
MISSILE1_SPLASH = true;
MISSILE1_TARGETING = 'air';
MISSILE1_COST = 30;

// Rendering options

MENU_FONT = '30px Arial';
MENU_FONT_COLOR = 'rgba(255, 255, 255, 1)';
MENU_BUTTON_FILL = 'rgba(100, 100, 100, 1)';
MENU_BUTTON_STROKE = 'rgba(25, 25, 25, 1)';
MENU_BUTTON_WIDTH = 360;
MENU_BUTTON_HEIGHT = 90;
BLACK_COLOR = 'rgba(0,0,0,1)';
SEMI_TRANSPARENT_COLOR = 'rgba(255,255,255,.2';
TRANSPARENT_COLOR = 'rgba(0,0,0,0)';

// Constants - No Touching!
KEY_TOKENS = ['sell', 'upgrade', 'start_level', 'toggle_grid', 'toggle_radius', 'toggle_path', 'toggle_mute'];
