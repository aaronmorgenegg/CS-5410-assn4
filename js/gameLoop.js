game_data = {};

function initialize(){
    // Initializes the textures, options, and calls gameLoop
    canvas = document.getElementById('canvas_main');
    context = canvas.getContext('2d');
    background_game = document.getElementById("img-background_game");
    background_menu = document.getElementById("img-background_menu");
    wall = document.getElementById("img-wall");
    entrance = document.getElementById("img-entrance");
    exit = document.getElementById("img-exit");
    bullet1 = document.getElementById("img-bullet1");
    bomb1 = document.getElementById("img-bomb1");
    laser1 = document.getElementById("img-laser1");
    missile1 = document.getElementById("img-missile1");
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
            'bomb1': bomb1,
            'laser1': laser1,
            'missile1': missile1
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
            'selection': 'none'
        },
        'map': getBaseMap(),
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

}

function render(){
    renderBackground();
    renderMenu();
    renderMap();
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
