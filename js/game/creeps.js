function getCreep(direction, creep){
    if(direction = 'lr') {
        coords = getMapCoords(getLeftEntrance());
        coords.x += CELL_WIDTH/2;
    } else if(direction = 'ud'){
        coords = getMapCoords(getRightEntrance());
        coords.y += CELL_HEIGHT/2;
    }
    indices = getMapIndices(coords);
    path = getShortestPath(indices, direction);

    return {'name': creep,
            'coords': coords,
            'path': path
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
    if(creep === 'creep_g1') return CREEP_G1_SPEED;
    else if(creep === 'creep_g2') return CREEP_G2_SPEED;
    else if(creep === 'creep_f1') return CREEP_F1_SPEED;
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
}

function renderCreeps(){
    for(i = 0; i < game_data.creeps.length; i++){
        renderCreep(game_data.creeps[i]);
    }
}

function getShortestPath(){ // TODO:
    return getShortestAirPath();
}

function getShortestAirPath(){ // TODO:
    return [];
}
