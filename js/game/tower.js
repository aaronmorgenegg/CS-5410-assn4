function getTower(indices, tower){
    x = indices.x;
    y = indices.y;
    cell = map[x][y];
    adjacent_cells = getAdjacentCells(indices);
    if(adjacent_cells === undefined){
        console.log('Adjacent cells undefined');
        return;
    } else {
        map[x][y] = tower;
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