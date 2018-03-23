game_data = {};

function initialize(){
    // Initializes the textures, options, and calls gameLoop
    canvas = document.getElementById('canvas_main');
    context = canvas.getContext('2d');
    background = document.getElementById("img-background");
    game_data = {
        'time':{
            'previous':performance.now(),
            'current':0,
            'elapsed':0,
            'running':0,
            'countdown': 0
        },
        'textures':{
            'background': background
        },
        'player':{
            'input': []
        },
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
    for(i = 0; i < game_data.player['input'].length; i++){
        window[game_data.player['input'][i] + "InputToken"]();
    }
    resetInput();
}

function update(){

}

function render(){
    renderBackground();
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
