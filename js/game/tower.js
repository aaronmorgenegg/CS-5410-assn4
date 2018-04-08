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
