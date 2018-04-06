function getBulletTower(indices){
    x = indices.x;
    y = indices.y;
    cell = map[x][y];
    adjacent_cells = getAdjacentCells(indices);
    if(adjacent_cells === undefined){
        console.log('Adjacent cells undefined');
        return cell;
    } else if(checkListOfCellsEquality(adjacent_cells, 'empty')){
        // If the cell and the adjacent cells are empty
        setListOfCells(adjacent_cells, 'wall');
    } else{
        console.log('Adjacent cells invalid');
        return cell;
    }
}