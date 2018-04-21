function startLevel(){
    if(game_data.level['creeps_remaining'] === 0){
        game_data.level['number'] += 1;
        game_data.level['creeps_remaining'] = getLevelNumCreeps(game_data.level['number']);
    }
}

function updateLevel(){
    if(game_data.level['creeps_remaining'] > 0){
        if(game_data.time['creep_spawn'] <= 0){
            getRandomCreep(getLevelCreepRatio(game_data.level['number']));
        }
    }
}

function getRandomCreep(ratio){
    r = Math.random();
    direction = getRandomDirection(game_data.level['number']);
    if(r <= ratio[0]){
        game_data.creeps.push(getCreep(direction, 'creep_g1'));
        game_data.level['creeps_remaining']-=1;
    } else if(r <= ratio[0]+ratio[1]){
        game_data.creeps.push(getCreep(direction, 'creep_g2'));
        game_data.level['creeps_remaining']-=1;
    } else if(r <= ratio[0]+ratio[1]+ratio[2]){
        game_data.creeps.push(getCreep(direction, 'creep_f1'));
        game_data.level['creeps_remaining']-=1;
    }
}

function getRandomDirection(level){
    if(level === 1) return 'lr';
    d = Math.random();
    if(d <= .5) return 'lr';
    else return 'ud';
}

function getLevelNumCreeps(level){
    if(level === 1) return LEVEL1_NUM_CREEPS;
    else if(level === 2) return LEVEL2_NUM_CREEPS;
    else if(level === 3) return LEVEL3_NUM_CREEPS;
    else return 0;
}

function getLevelCreepRatio(level){
    if(level === 1) return LEVEL1_CREEP_RATIO;
    else if(level === 2) return LEVEL2_CREEP_RATIO;
    else if(level === 3) return LEVEL3_CREEP_RATIO;
    else return [0,0,0];
}
