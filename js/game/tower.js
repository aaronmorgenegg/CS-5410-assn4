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
        game_data.towers.push(indices);
        updateShortestPaths();
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

function getTowerCooldowns(){
    return {
        'bullet1': getTowerSpeed('bullet1') * 1000,
        'bullet2': getTowerSpeed('bullet2') * 1000,
        'bullet3': getTowerSpeed('bullet3') * 1000,
        'bomb1': getTowerSpeed('bomb1') * 1000,
        'bomb2': getTowerSpeed('bomb2') * 1000,
        'bomb3': getTowerSpeed('bomb3') * 1000,
        'laser1': getTowerSpeed('laser1') * 1000,
        'laser2': getTowerSpeed('laser2') * 1000,
        'laser3': getTowerSpeed('laser3') * 1000,
        'missile1': getTowerSpeed('missile1') * 1000,
        'missile2': getTowerSpeed('missile2') * 1000,
        'missile3': getTowerSpeed('missile3') * 1000
    }

}

function sellTower(){
    if(game_data.state.selection['object'] === 'none' || game_data.state.selection['coords'] === 'none') return;
    x = game_data.state.selection['coords']['x'];
    y = game_data.state.selection['coords']['y'];
    game_data.map[x][y] = 'empty';
    game_data.towers.splice(getIndexOf(game_data.towers, game_data.state.selection['coords']), 1);
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

function updateTowers(){
    for(t = 0; t < game_data.towers.length; t++){
        updateTower(game_data.towers[t]);
    }
    updateTowerCooldowns();
}

function updateTowerCooldowns(){
    for(tower in game_data['tower_cooldowns']){
        if(game_data['tower_cooldowns'].hasOwnProperty(tower)){
            if(game_data.tower_cooldowns[tower] < 0){
                game_data.tower_cooldowns[tower] = getTowerSpeed(tower) * 1000;
            } else{
                game_data.tower_cooldowns[tower] -= game_data.time['elapsed'];
            }
        }
    }
}

function updateTower(tower){
    updateTowerAttack(tower);
}

function updateTowerAttack(tower){
    tower_name = map[tower.x][tower.y];
    if(game_data.tower_cooldowns[tower_name] < 0){
        target = getCreepToAttack(tower);
        if(target !== undefined) attackCreep(tower, target);
    }
}

function getCreepToAttack(tower){
    tower_name = map[tower.x][tower.y];
    tower_type = getTowerTargeting(tower_name);
    tower_range = getTowerRange(tower_name);
    for(c = 0; c < game_data.creeps.length; c++){
        if(tower_type === getCreepType(game_data.creeps[c]['name'])) {
            creep_indices = getMapIndices(game_data.creeps[c]['coords']);
            if (creepInRange(tower, creep_indices, tower_range)) return game_data.creeps[c];
        }
    }
    return undefined;
}

function creepInRange(tower_indices, creep_indices, tower_range){
    a = tower_indices.x - creep_indices.x;
    b = tower_indices.y - creep_indices.y;
    return (Math.sqrt(a*a + b*b) < tower_range);
}

function attackCreep(tower, target){
    tower_name = map[tower.x][tower.y];
    if(getTowerSplash(tower_name)){
        creep_coords = target['coords'];
        // TODO: splash damage from towers
    } else {
        target['health'] -= getTowerDamage(tower_name);
    }
}
