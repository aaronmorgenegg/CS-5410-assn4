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
    if (cell === 'bullet1' || cell === 'bullet2' || cell === 'bullet3' ||
        cell === 'bomb1' || cell === 'bomb2' || cell === 'bomb3' ||
        cell === 'missile1' || cell === 'missile2' || cell === 'missile3' ||
        cell === 'laser1' || cell === 'laser2' || cell === 'laser3'
    ){
        return true;
    }
    else {
        return false;
    }
}

function getTowerRange(tower){
    if(tower === 'bullet1') return BULLET1_RANGE;
    else if(tower === 'bullet2') return BULLET2_RANGE;
    else if(tower === 'bullet3') return BULLET3_RANGE;
    else if(tower === 'bomb1') return BOMB1_RANGE;
    else if(tower === 'bomb2') return BOMB2_RANGE;
    else if(tower === 'bomb3') return BOMB3_RANGE;
    else if(tower === 'missile1') return MISSILE1_RANGE;
    else if(tower === 'missile2') return MISSILE2_RANGE;
    else if(tower === 'missile3') return MISSILE3_RANGE;
    else if(tower === 'laser1') return LASER1_RANGE;
    else if(tower === 'laser2') return LASER2_RANGE;
    else if(tower === 'laser3') return LASER3_RANGE;
    else {
        console.log('Error: Not a tower');
        return -1;
    }
}

function getTowerCost(tower){
    if(tower === 'bullet1') return BULLET1_COST;
    else if(tower === 'bullet2') return BULLET2_COST;
    else if(tower === 'bullet3') return BULLET3_COST;
    else if(tower === 'bomb1') return BOMB1_COST;
    else if(tower === 'bomb2') return BOMB2_COST;
    else if(tower === 'bomb3') return BOMB3_COST;
    else if(tower === 'missile1') return MISSILE1_COST;
    else if(tower === 'missile2') return MISSILE2_COST;
    else if(tower === 'missile3') return MISSILE3_COST;
    else if(tower === 'laser1') return LASER1_COST;
    else if(tower === 'laser2') return LASER2_COST;
    else if(tower === 'laser3') return LASER3_COST;
    else {
        console.log('Error: Not a tower');
        return -1;
    }
}

function getTowerDisplayName(tower){
    if(tower === 'bullet1') return BULLET1_DISPLAY;
    else if(tower === 'bullet2') return BULLET2_DISPLAY;
    else if(tower === 'bullet3') return BULLET3_DISPLAY;
    else if(tower === 'bomb1') return BOMB1_DISPLAY;
    else if(tower === 'bomb2') return BOMB2_DISPLAY;
    else if(tower === 'bomb3') return BOMB3_DISPLAY;
    else if(tower === 'missile1') return MISSILE1_DISPLAY;
    else if(tower === 'missile2') return MISSILE2_DISPLAY;
    else if(tower === 'missile3') return MISSILE3_DISPLAY;
    else if(tower === 'laser1') return LASER1_DISPLAY;
    else if(tower === 'laser2') return LASER2_DISPLAY;
    else if(tower === 'laser3') return LASER3_DISPLAY;
    else {
        console.log('Error: Not a tower');
        return -1;
    }
}

function getTowerDamage(tower){
    if(tower === 'bullet1') return BULLET1_DAMAGE;
    else if(tower === 'bullet2') return BULLET2_DAMAGE;
    else if(tower === 'bullet3') return BULLET3_DAMAGE;
    else if(tower === 'bomb1') return BOMB1_DAMAGE;
    else if(tower === 'bomb2') return BOMB2_DAMAGE;
    else if(tower === 'bomb3') return BOMB3_DAMAGE;
    else if(tower === 'missile1') return MISSILE1_DAMAGE;
    else if(tower === 'missile2') return MISSILE2_DAMAGE;
    else if(tower === 'missile3') return MISSILE3_DAMAGE;
    else if(tower === 'laser1') return LASER1_DAMAGE;
    else if(tower === 'laser2') return LASER2_DAMAGE;
    else if(tower === 'laser3') return LASER3_DAMAGE;
    else {
        console.log('Error: Not a tower');
        return -1;
    }
}

function getTowerSpeed(tower){
    if(tower === 'bullet1') return BULLET1_SPEED;
    else if(tower === 'bullet2') return BULLET2_SPEED;
    else if(tower === 'bullet3') return BULLET3_SPEED;
    else if(tower === 'bomb1') return BOMB1_SPEED;
    else if(tower === 'bomb2') return BOMB2_SPEED;
    else if(tower === 'bomb3') return BOMB3_SPEED;
    else if(tower === 'missile1') return MISSILE1_SPEED;
    else if(tower === 'missile2') return MISSILE2_SPEED;
    else if(tower === 'missile3') return MISSILE3_SPEED;
    else if(tower === 'laser1') return LASER1_SPEED;
    else if(tower === 'laser2') return LASER2_SPEED;
    else if(tower === 'laser3') return LASER3_SPEED;
    else {
        console.log('Error: Not a tower');
        return -1;
    }
}

function getTowerSplash(tower){
    if(tower === 'bullet1') return BULLET1_SPLASH;
    else if(tower === 'bullet2') return BULLET2_SPLASH;
    else if(tower === 'bullet3') return BULLET3_SPLASH;
    else if(tower === 'bomb1') return BOMB1_SPLASH;
    else if(tower === 'bomb2') return BOMB2_SPLASH;
    else if(tower === 'bomb3') return BOMB3_SPLASH;
    else if(tower === 'missile1') return MISSILE1_SPLASH;
    else if(tower === 'missile2') return MISSILE2_SPLASH;
    else if(tower === 'missile3') return MISSILE3_SPLASH;
    else if(tower === 'laser1') return LASER1_SPLASH;
    else if(tower === 'laser2') return LASER2_SPLASH;
    else if(tower === 'laser3') return LASER3_SPLASH;
    else {
        console.log('Error: Not a tower');
        return -1;
    }
}

function getTowerTargeting(tower){
    if(tower === 'bullet1') return BULLET1_TARGETING;
    else if(tower === 'bullet2') return BULLET2_TARGETING;
    else if(tower === 'bullet3') return BULLET3_TARGETING;
    else if(tower === 'bomb1') return BOMB1_TARGETING;
    else if(tower === 'bomb2') return BOMB2_TARGETING;
    else if(tower === 'bomb3') return BOMB3_TARGETING;
    else if(tower === 'missile1') return MISSILE1_TARGETING;
    else if(tower === 'missile2') return MISSILE2_TARGETING;
    else if(tower === 'missile3') return MISSILE3_TARGETING;
    else if(tower === 'laser1') return LASER1_TARGETING;
    else if(tower === 'laser2') return LASER2_TARGETING;
    else if(tower === 'laser3') return LASER3_TARGETING;
    else {
        console.log('Error: Not a tower');
        return -1;
    }
}

function getNextUpgrade(tower){
    if(tower === 'bullet1') return 'bullet2';
    else if(tower === 'bullet2') return 'bullet3';
    else if(tower === 'bullet3') return 'none';
    else if(tower === 'bomb1') return 'bomb2';
    else if(tower === 'bomb2') return 'bomb3';
    else if(tower === 'bomb3') return 'none';
    else if(tower === 'missile1') return 'missile2';
    else if(tower === 'missile2') return 'missile3';
    else if(tower === 'missile3') return 'none';
    else if(tower === 'laser1') return 'laser2';
    else if(tower === 'laser2') return 'laser3';
    else if(tower === 'laser3') return 'none';
    else {
        console.log('Error: Not a tower');
        return 'none';
    }
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

function upgradeTower(){
    tower = game_data.state.selection['object'];
    coords = game_data.state.selection['coords'];
    if(tower === 'none' || coords === 'none') return;
    new_tower = getNextUpgrade(tower);
    if(new_tower === 'none') return;
    if(game_data.player['money'] < getTowerCost(new_tower)) return;
    game_data.player['money'] -= getTowerCost(new_tower);
    x = coords['x'];
    y = coords['y'];
    game_data.map[x][y] = new_tower;
    game_data.state.selection['coords'] = coords;
    game_data.state.selection['object'] = new_tower;
}
