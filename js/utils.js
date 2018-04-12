function getRandomNumber(max){
    // Return random number between {0, max - 1}
    return Math.floor(Math.random() * max);
}

function updateTime(){
    // console.log(game_data['time']);
    game_data['time']['current'] = performance.now();
    game_data['time']['elapsed'] = (game_data['time']['current'] - game_data['time']['previous']);
    game_data['time']['running'] += game_data['time']['elapsed'];
    game_data['time']['previous'] = game_data['time']['current'];
    if(game_data['time']['countdown'] < 0) game_data['time']['countdown'] = 0;
    else game_data['time']['countdown'] -= game_data['time']['elapsed'];
}

function getIndexOf(list, object){
    for(i = 0; i < list.length; i++){
        if(list[i]['x'] === object['x'] && list[i]['y'] === object['y']) return i;
    }
    console.log('Error: getIndexOf, object not found in list');
    return -1;
}
