function loadControls(){
    controls = localStorage['controls'];
    if(controls !== undefined){
        return JSON.parse(controls);
    } else{
        return {'sell': 83, 'upgrade': 85, 'start_level': 76, 'toggle_grid': 71, 'toggle_radius': 82};
    }
}

function onKeyDown(e) {
    handleKeyToken(e, 'sell');
    handleKeyToken(e, 'upgrade');
    handleKeyToken(e, 'start_level');
    handleKeyToken(e, 'toggle_grid');
    handleKeyToken(e, 'toggle_radius');
}

function handleKeyToken(e, token){
    if (e.keyCode === game_data.controls[token] && game_data.player['input'][game_data.player['input'].length-1] !== token) {
        game_data.player['input'].push(token);
    }
}

function onMouseClick(){
    x = event.x - game_data.canvas.offsetLeft;
    y = event.y - game_data.canvas.offsetTop;

    button_min_x = canvas.width/2 - 125;
    button_max_x = button_min_x + 250;

    high_scores_button_y = game_data.canvas.height/3 + 300;

    if(mouseInRange(x, y, button_min_x, button_max_x, 300, 350)) { // high scores button
        newGameButton();
    }
    else if(mouseInRange(x, y, button_min_x, button_max_x, 400, 450)){ // high scores button
        highScoresButton();
    } else if(mouseInRange(x, y, button_min_x, button_max_x, 500, 550)){ // credits button
        creditsButton();
    } else if(mouseInRange(x, y, button_min_x, button_max_x, 600, 650)){ // exit menu button
        exitMenuButton();
    } else if(mouseInRange(x, y, button_min_x, button_max_x, high_scores_button_y, high_scores_button_y + 50) && game_data.options['high_scores']){ // reset high scores button
        resetHighScores();
    }
}

function mouseInRange(x, y, min_x, max_x, min_y, max_y){
    if(x >= min_x && x <= max_x && y >= min_y && y <= max_y){
        return true;
    }
    return false;
}

function resetInput(){
    game_data.player['input'] = [];
}

function sellInputToken(){
    console.log("Sell token received!");
}

function upgradeInputToken(){
    console.log("Upgrade token received!");
}

function start_levelInputToken(){
    console.log("Start Level token received!");
}

function toggle_gridInputToken(){
    console.log("Toggle Grid token received!");
}

function toggle_radiusInputToken(){
    console.log("Toggle Radius token received!");
}
