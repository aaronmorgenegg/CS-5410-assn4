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
SELL_MULT = .5; // Percentage of the buy cost regained from selling a tower

// Tower Stats

BULLET1_DISPLAY = 'Bullet Tower lvl 1';
BULLET1_RANGE = 5;
BULLET1_DAMAGE = 3;
BULLET1_SPEED = 3;
BULLET1_SPLASH = false;
BULLET1_TARGETING = 'ground';
BULLET1_COST = 10;

BULLET2_DISPLAY = 'Bullet Tower lvl 2';
BULLET2_RANGE = 6;
BULLET2_DAMAGE = 6;
BULLET2_SPEED = 3;
BULLET2_SPLASH = false;
BULLET2_TARGETING = 'ground';
BULLET2_COST = 20;

BULLET3_DISPLAY = 'Bullet Tower lvl 3';
BULLET3_RANGE = 7;
BULLET3_DAMAGE = 12;
BULLET3_SPEED = 5;
BULLET3_SPLASH = false;
BULLET3_TARGETING = 'ground';
BULLET3_COST = 40;

BOMB1_DISPLAY = 'Bomb Tower lvl 1';
BOMB1_RANGE = 4;
BOMB1_DAMAGE = 2;
BOMB1_SPEED = 2;
BOMB1_SPLASH = true;
BOMB1_TARGETING = 'ground';
BOMB1_COST = 25;

BOMB2_DISPLAY = 'Bomb Tower lvl 2';
BOMB2_RANGE = 4;
BOMB2_DAMAGE = 4;
BOMB2_SPEED = 2;
BOMB2_SPLASH = true;
BOMB2_TARGETING = 'ground';
BOMB2_COST = 50;

BOMB3_DISPLAY = 'Bomb Tower lvl 3';
BOMB3_RANGE = 4;
BOMB3_DAMAGE = 12;
BOMB3_SPEED = 2;
BOMB3_SPLASH = true;
BOMB3_TARGETING = 'ground';
BOMB3_COST = 75;

LASER1_DISPLAY = 'Laser Tower lvl 1';
LASER1_RANGE = 8;
LASER1_DAMAGE = 4;
LASER1_SPEED = 3;
LASER1_SPLASH = false;
LASER1_TARGETING = 'air';
LASER1_COST = 15;

LASER2_DISPLAY = 'Laser Tower lvl 2';
LASER2_RANGE = 9;
LASER2_DAMAGE = 6;
LASER2_SPEED = 5;
LASER2_SPLASH = false;
LASER2_TARGETING = 'air';
LASER2_COST = 30;

LASER3_DISPLAY = 'Laser Tower lvl 3';
LASER3_RANGE = 10;
LASER3_DAMAGE = 9;
LASER3_SPEED = 8;
LASER3_SPLASH = false;
LASER3_TARGETING = 'air';
LASER3_COST = 50;

MISSILE1_DISPLAY = 'Missile Tower lvl 1';
MISSILE1_RANGE = 10;
MISSILE1_DAMAGE = 3;
MISSILE1_SPEED = 1;
MISSILE1_SPLASH = true;
MISSILE1_TARGETING = 'air';
MISSILE1_COST = 30;

MISSILE2_DISPLAY = 'Missile Tower lvl 2';
MISSILE2_RANGE = 12;
MISSILE2_DAMAGE = 5;
MISSILE2_SPEED = 1;
MISSILE2_SPLASH = true;
MISSILE2_TARGETING = 'air';
MISSILE2_COST = 60;

MISSILE3_DISPLAY = 'Missile Tower lvl 3';
MISSILE3_RANGE = 15;
MISSILE3_DAMAGE = 8;
MISSILE3_SPEED = 1;
MISSILE3_SPLASH = true;
MISSILE3_TARGETING = 'air';
MISSILE3_COST = 100;

// Creep Stats

CREEP_G1_DISPLAY = 'Ground Creep 1'; // Display name
CREEP_G1_HEALTH = 30; // HP
CREEP_G1_SPEED = 5; // Movement speed
CREEP_G1_TYPE = 'ground'; // Air or Ground
CREEP_G1_MONEY = 2; // Money dropped on death
CREEP_G1_DAMAGE = 1; // Number of Lives taken
CREEP_G1_SIZE = CELL_WIDTH/3; // Size of texture to render

CREEP_G2_DISPLAY = 'Ground Creep 2'; // Display name
CREEP_G2_HEALTH = 200; // HP
CREEP_G2_SPEED = 2; // Movement speed
CREEP_G2_TYPE = 'ground'; // Air or Ground
CREEP_G2_MONEY = 8; // Money dropped on death
CREEP_G2_DAMAGE = 5; // Number of Lives taken
CREEP_G2_SIZE = CELL_WIDTH*2/3; // Size of texture to render

CREEP_F1_DISPLAY = 'Flying Creep 1'; // Display name
CREEP_F1_HEALTH = 20; // HP
CREEP_F1_SPEED = 3; // Movement speed
CREEP_F1_TYPE = 'air'; // Air or Ground
CREEP_F1_MONEY = 2; // Money dropped on death
CREEP_F1_DAMAGE = 1; // Number of Lives taken
CREEP_F1_SIZE = CELL_WIDTH/2; // Size of texture to render

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
