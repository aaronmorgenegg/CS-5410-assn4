function getTower(indices, tower){
    if(getTowerCost(tower) > game_data.player['money']){
        return;
    }
    x = indices.x;
    y = indices.y;
    cell = map[x][y];
    adjacent_cells = getAdjacentCells(indices);
    if(adjacent_cells === undefined){
        console.log('Adjacent cells undefined');
        return;
    } else if(cell === 'empty'){
        map[x][y] = tower;
        game_data.player['money'] -= getTowerCost(tower);
    } else {
        console.log('Cell is invalid.');
        return;
    }
}

function isTower(cell){
    if(cell === 'bullet1' || cell === 'bomb1' || cell === 'missile1' || cell === 'laser1'){
        return true;
    }
    else {
        return false;
    }
}

function getTowerRange(tower){
    if(tower === 'bullet1') return BULLET1_RANGE;
    else if(tower === 'bomb1') return BOMB1_RANGE;
    else if(tower === 'missile1') return MISSILE1_RANGE;
    else if(tower === 'laser1') return LASER1_RANGE;
}

function getTowerCost(tower){
    if(tower === 'bullet1') return BULLET1_COST;
    else if(tower === 'bomb1') return BOMB1_COST;
    else if(tower === 'missile1') return MISSILE1_COST;
    else if(tower === 'laser1') return LASER1_COST;
}

function getTowerDisplayName(tower){
    if(tower === 'bullet1') return BULLET1_DISPLAY;
    else if(tower === 'bomb1') return BOMB1_DISPLAY;
    else if(tower === 'missile1') return MISSILE1_DISPLAY;
    else if(tower === 'laser1') return LASER1_DISPLAY;
}

function getTowerDamage(tower){
    if(tower === 'bullet1') return BULLET1_DAMAGE;
    else if(tower === 'bomb1') return BOMB1_DAMAGE;
    else if(tower === 'missile1') return MISSILE1_DAMAGE;
    else if(tower === 'laser1') return LASER1_DAMAGE;
}

function getTowerSpeed(tower){
    if(tower === 'bullet1') return BULLET1_SPEED;
    else if(tower === 'bomb1') return BOMB1_SPEED;
    else if(tower === 'missile1') return MISSILE1_SPEED;
    else if(tower === 'laser1') return LASER1_SPEED;
}

function getTowerSplash(tower){
    if(tower === 'bullet1') return BULLET1_SPLASH;
    else if(tower === 'bomb1') return BOMB1_SPLASH;
    else if(tower === 'missile1') return MISSILE1_SPLASH;
    else if(tower === 'laser1') return LASER1_SPLASH;
}

function getTowerTargeting(tower){
    if(tower === 'bullet1') return BULLET1_TARGETING;
    else if(tower === 'bomb1') return BOMB1_TARGETING;
    else if(tower === 'missile1') return MISSILE1_TARGETING;
    else if(tower === 'laser1') return LASER1_TARGETING;
}

function sellTower(){
    if(game_data.state.selection['object'] === 'none' || game_data.state.selection['coords'] === 'none') return;
    x = game_data.state.selection['coords']['x'];
    y = game_data.state.selection['coords']['y'];
    game_data.map[x][y] = 'empty';
    game_data.player['money'] += getTowerCost(game_data.state.selection['object']) * SELL_MULT;
    game_data.state.selection['coords'] = 'none';
    game_data.state.selection['object'] = 'none';
}
