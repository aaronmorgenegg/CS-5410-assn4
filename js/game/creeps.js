function getCreep(direction, creep){
    if(direction === 'lr') {
        coords = getMapCoords(getLeftEntrance());
        coords.x += CELL_WIDTH/2;
    } else if(direction === 'ud'){
        coords = getMapCoords(getTopEntrance());
        coords.y += CELL_HEIGHT/2;
    }
    indices = getMapIndices(coords);
    path = getShortestPath(direction, getCreepType(creep));

    return {'name': creep,
            'coords': coords,
            'direction' : direction,
            'health': getCreepMaxHealth(creep),
            'delete': false
    };
}

function getCreepMaxHealth(creep){
    if(creep === 'creep_g1') return CREEP_G1_HEALTH;
    else if(creep === 'creep_g2') return CREEP_G2_HEALTH;
    else if(creep === 'creep_f1') return CREEP_F1_HEALTH;
    else {
        console.log('Creep does not exist');
        return -1;
    }
}

function getCreepDisplay(creep){
    if(creep === 'creep_g1') return CREEP_G1_DISPLAY;
    else if(creep === 'creep_g2') return CREEP_G2_DISPLAY;
    else if(creep === 'creep_f1') return CREEP_F1_DISPLAY;
    else {
        console.log('Creep does not exist');
        return -1;
    }
}

function getCreepSpeed(creep){
    if(creep === 'creep_g1') return CREEP_G1_SPEED*CREEP_SPEED_MULT;
    else if(creep === 'creep_g2') return CREEP_G2_SPEED*CREEP_SPEED_MULT;
    else if(creep === 'creep_f1') return CREEP_F1_SPEED*CREEP_SPEED_MULT;
    else {
        console.log('Creep does not exist');
        return -1;
    }
}

function getCreepType(creep){
    if(creep === 'creep_g1') return CREEP_G1_TYPE;
    else if(creep === 'creep_g2') return CREEP_G2_TYPE;
    else if(creep === 'creep_f1') return CREEP_F1_TYPE;
    else {
        console.log('Creep does not exist');
        return -1;
    }
}

function getCreepMoney(creep){
    if(creep === 'creep_g1') return CREEP_G1_MONEY;
    else if(creep === 'creep_g2') return CREEP_G2_MONEY;
    else if(creep === 'creep_f1') return CREEP_F1_MONEY;
    else {
        console.log('Creep does not exist');
        return -1;
    }
}

function getCreepDamage(creep){
    if(creep === 'creep_g1') return CREEP_G1_DAMAGE;
    else if(creep === 'creep_g2') return CREEP_G2_DAMAGE;
    else if(creep === 'creep_f1') return CREEP_F1_DAMAGE;
    else {
        console.log('Creep does not exist');
        return -1;
    }
}

function getCreepSize(creep){
    if(creep === 'creep_g1') return CREEP_G1_SIZE;
    else if(creep === 'creep_g2') return CREEP_G2_SIZE;
    else if(creep === 'creep_f1') return CREEP_F1_SIZE;
    else {
        console.log('Creep does not exist');
        return -1;
    }
}

function updateCreep(creep){
    updateCreepMovement(creep);
    updateCreepKill(creep);
    updateCreepLeak(creep);
}

function updateCreepMovement(creep){
    path = getShortestPath(creep['direction'], getCreepType(creep['name']));
    creep_indices = getMapIndices(creep['coords']);
    creep_movement = game_data.time['elapsed'] * getCreepSpeed(creep['name']);
    current_index = getIndexOf(path, creep_indices);

    if(current_index+1 >= path.length){
        if(creep['direction'] === 'lr'){
            creep['coords']['x'] += creep_movement;
        } else if(creep['direction'] === 'ud'){
            creep['coords']['y'] += creep_movement;
        }
        return;
    }

    goal = path[current_index+1];
    if(goal['x'] > creep_indices['x']){
        creep['coords']['x'] += creep_movement;
    } else if(goal['x'] < creep_indices['x']){
        creep['coords']['x'] -= creep_movement;
    } else if(goal['y'] > creep_indices['y']){
        creep['coords']['y'] += creep_movement;
    } else if(goal['y'] < creep_indices['y']){
        creep['coords']['y'] -= creep_movement;
    }
}

function updateCreepKill(creep){
    if(creep['health'] <= 0) {
        game_data.player.money += getCreepMoney(creep['name']);
        creep['delete'] = true;
    }
}

function updateCreepLeak(creep){
    if(creep['coords']['x'] >= GAME_WIDTH - CREEP_LEAK_THRESHOLD ||
       creep['coords']['y'] >= GAME_HEIGHT - CREEP_LEAK_THRESHOLD){
        game_data.player['lives'] -= getCreepDamage(creep['name']);
        creep['delete'] = true;
    }
}

function updateCreeps(){
    for(c = game_data.creeps.length-1; c >= 0; c--){
        if(game_data.creeps[c]['delete'] === true) game_data.creeps.splice(c, 1);
        else updateCreep(game_data.creeps[c]);
    }
}

function renderCreep(creep){
    texture = game_data.textures[creep['name']];
    size = getCreepSize(creep['name']);
    x = creep['coords']['x'];
    y = creep['coords']['y'];
    game_data.context.drawImage(
        img = texture,
        x = x - size/2,
        y = y - size/2,
        width = size,
        height = size
    );

    renderCreepHealthBar(creep);
}

function renderCreepHealthBar(creep){
    size = getCreepSize(creep['name']);
    x = creep['coords']['x'];
    y = creep['coords']['y'];
    health_ratio = creep['health'] / getCreepMaxHealth(creep['name']);
    if(health_ratio < .25) color = HEALTH_BAR_COLOR_LOW;
    else if(health_ratio < .5) color = HEALTH_BAR_COLOR_MED;
    else color = HEALTH_BAR_COLOR_HIGH;

    drawRectangle(game_data.context,
        {
            x: x - size/2,
            y: y - size/2 - 10,
            width: size * health_ratio,
            height: size/4,
            fill: color,
            stroke: color
        }
    );

    drawRectangle(game_data.context,
        {
            x: x - size/2,
            y: y - size/2 - 10,
            width: size,
            height: size/4,
            fill: TRANSPARENT_COLOR,
            stroke: BLACK_COLOR
        }
    );
}

function renderCreeps(){
    for(i = 0; i < game_data.creeps.length; i++){
        renderCreep(game_data.creeps[i]);
    }
}

function getShortestPath(direction, type){
    if(direction === 'lr'){
        if(type === 'air'){
            return game_data.path['alr'];
        }
        else if(type === 'ground'){
            return game_data.path['glr'];
        }
        else {
            console.log('Error during getShortestPath : invalid type');
        }
    } else if(direction === 'ud'){
        if(type === 'air'){
            return game_data.path['aud'];
        }
        else if(type === 'ground'){
            return game_data.path['gud'];
        }
        else {
            console.log('Error during getShortestPath : invalid type');
        }
    } else {
        console.log('Error during getShortestPath : invalid direction');
    }
}

