function resetGame(){
    saveHighScores();
    game_data.player['input'] = [];
    game_data.player['lives'] = STARTING_LIVES;
    game_data.player['money'] = STARTING_MONEY;
    game_data.player['score'] = 0;
    game_data.particles = [];
    game_data.state.input = 'base';
    game_data.state.selection = {
                'object': 'none',
                'coords': 'none'
            };
    game_data.creeps = [];
    game_data.towers = [];
    game_data.map = getBaseMap();
    game_data.path = {
            'alr': getShortestAirPath('lr', map),
            'aud': getShortestAirPath('ud', map),
            'glr': getShortestGroundPath('lr', map),
            'gud': getShortestGroundPath('ud', map)
        };
    game_data.level['number'] = 0;
    game_data.level['creeps_remaining'] = 0;
    game_data.game_over = false;
}

function endGame(){
    saveHighScores();
    saveControls();
    game_data.game_over = true;
}

function updateGameOver(){
    if(game_data.player['lives'] <= 0) game_data.game_over = true;
}

function renderGameOver(){
    if(game_data.game_over){
        x = GAME_WIDTH/2;
        y = GAME_HEIGHT/2;
        drawText(game_data.context,
        {x:x, y:y, color:MENU_FONT_COLOR, font:GAME_OVER_FONT, msg:'GAME OVER'}
        );
    }
}


