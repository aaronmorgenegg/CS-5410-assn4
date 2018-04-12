game_data = {};

function initialize(){
    // Initializes the textures, options, and calls gameLoop
    canvas = document.getElementById('canvas_main');
    context = canvas.getContext('2d');
    map = getBaseMap();
    background_game = document.getElementById("img-background_game");
    background_menu = document.getElementById("img-background_menu");
    wall = document.getElementById("img-wall");
    entrance = document.getElementById("img-entrance");
    exit = document.getElementById("img-exit");
    radius = document.getElementById("img-radius");
    bullet1 = document.getElementById("img-bullet1");
    bullet2 = document.getElementById("img-bullet1"); // TODO: Change these to upgraded images
    bullet3 = document.getElementById("img-bullet1");
    bomb1 = document.getElementById("img-bomb1");
    bomb2 = document.getElementById("img-bomb1");
    bomb3 = document.getElementById("img-bomb1");
    laser1 = document.getElementById("img-laser1");
    laser2 = document.getElementById("img-laser1");
    laser3 = document.getElementById("img-laser1");
    missile1 = document.getElementById("img-missile1");
    missile2 = document.getElementById("img-missile1");
    missile3 = document.getElementById("img-missile1");
    creep_f1 = document.getElementById("img-creep_f1");
    money = document.getElementById("img-money");
    lives = document.getElementById("img-lives");
    selection = document.getElementById("img-selection");
    game_data = {
        'time':{
            'previous':performance.now(),
            'current':0,
            'elapsed':0,
            'running':0,
            'countdown': 0
        },
        'textures':{
            'background_game': background_game,
            'background_menu': background_menu,
            'wall': wall,
            'entrance': entrance,
            'exit': exit,
            'bullet1': bullet1,
            'bullet2': bullet2,
            'bullet3': bullet3,
            'bomb1': bomb1,
            'bomb2': bomb2,
            'bomb3': bomb3,
            'laser1': laser1,
            'laser2': laser2,
            'laser3': laser3,
            'missile1': missile1,
            'missile2': missile2,
            'missile3': missile3,
            'creep_f1': creep_f1,
            'radius': radius,
            'money': money,
            'lives': lives,
            'selection': selection
        },
        'player':{
            'input': [],
            'lives': STARTING_LIVES,
            'money': STARTING_MONEY,
            'score': 0
        },
        'options':{
            'show_radius': true,
            'show_grid': false,
            'show_path': false,
            'mute': false
        },
        'menu':{
            'state': 'game',
            'buttons': getgameMenuButtons(),
            'rebind': ''
        },
        'state':{
            'input': 'base',
            'selection': {
                'object': 'none',
                'coords': 'none'
            }
        },
        'map': map,
        'creeps': [],
        'towers': [],
        'tower_cooldowns': getTowerCooldowns(),
        'path': {
            'alr': getShortestAirPath('lr', map),
            'aud': getShortestAirPath('ud', map),
            'glr': getShortestGroundPath('lr', map),
            'gud': getShortestGroundPath('ud', map)
        },
        'high_scores': loadHighScores(),
        'controls': loadControls(),
        'canvas': canvas,
        'context': context,
        'particles': []
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener("mousedown", onMouseClick, false);

    requestAnimationFrame(gameLoop);
}

function processInput(){
    rebindKeys();
    for(i = 0; i < game_data.player['input'].length; i++){
        window[game_data.player['input'][i] + "InputToken"]();
    }
    resetInput();
}

function update(){
    updateCreeps();
    updateTowers();
}

function render(){
    clearCanvas();
    renderBackground();
    renderMenu();
    renderMap();
    renderCreeps();
}

function gameLoop(){
    updateTime();

    processInput();
    update();
    render();

    // Event-based model, makes a request to the browser to loop when its ready. Allows the browser to do other things
    requestAnimationFrame(gameLoop);
}

initialize();
