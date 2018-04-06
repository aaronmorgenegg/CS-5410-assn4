function resetGame(){
    saveHighScores();
    game_data.player['input'] = [];
    game_data.player['lives'] = STARTING_LIVES;
    game_data.player['money'] = STARTING_MONEY;
    game_data.player['score'] = 0;
    game_data.particles = [];
}

function endGame(){
    saveHighScores();
    saveControls();
    window.close();
}

function handleGameClick(x, y){
    indices = getMapIndices({'x':x, 'y':y});
}
