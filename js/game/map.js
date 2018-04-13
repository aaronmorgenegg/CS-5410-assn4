function getBaseMap(){
    // Return a basic map object, with grid and walls defined.
    map = getEmptyMap();
    setMapWalls(map);

    return map;
}

function getEmptyMap(){
    map = [];
    for(i = 0; i < GRID_WIDTH; i++){
        col = [];
        for(j = 0; j < GRID_HEIGHT; j++){
            col.push(getCell());
        }
        map.push(col);
    }
    return map;
}

function setMapWalls(map){
    wall_width = (GRID_WIDTH - UD_GATE_SIZE)/2;
    for(i = 0; i < wall_width; i++){
        map[i][0] = 'wall';
        map[GRID_WIDTH-i-1][0] = 'wall';
        map[i][GRID_HEIGHT-1] = 'wall';
        map[GRID_WIDTH-i-1][GRID_HEIGHT-1] = 'wall';
    }

    for(i = wall_width; i < wall_width+UD_GATE_SIZE; i++){
        map[i][0] = 'entrance';
        map[i][GRID_HEIGHT-1] = 'exit';
    }

    wall_height = (GRID_HEIGHT - LR_GATE_SIZE)/2;
    for(i = 0; i < wall_height; i++){
        map[0][i] = 'wall';
        map[0][GRID_HEIGHT-i-1] = 'wall';
        map[GRID_WIDTH-1][i] = 'wall';
        map[GRID_WIDTH-1][GRID_HEIGHT-i-1] = 'wall';
    }

    for(i = wall_height; i < wall_height+LR_GATE_SIZE; i++){
        map[0][i] = 'entrance';
        map[GRID_WIDTH-1][i] = 'exit';
    }
}

function getCell(){
    return 'empty';
}

function getLeftEntrance(){
    x = 0;
    y = Math.floor(GRID_HEIGHT/2);
    return {'x':x, 'y':y};
}

function getTopEntrance(){
    x = Math.floor(GRID_WIDTH/2);
    y = 0;
    return {'x':x, 'y':y};
}

function getAdjacentCells(indices){
    // Returns a list of the adjacent cell indices, including the given cell
    x = indices.x;
    y = indices.y;
    map = game_data.map;
    if(x < 1 || x > GRID_WIDTH-2 || y < 1 || y > GRID_HEIGHT-2){
        return undefined;
    }
    return [
            {'x':x-1,'y':y-1},{'x':x,'y':y-1},{'x':x+1,'y':y-1},
            {'x':x-1,'y':y},{'x':x,'y':y},{'x':x+1,'y':y},
            {'x':x-1,'y':y+1},{'x':x,'y':y+1},{'x':x+1,'y':y+1}
            ];
}

function setListOfCells(list, value){
    // Assign every cell in the list to the given value
    for(i = 0; i < list.length; i++){
        x = list[i]['x'];
        y = list[i]['y'];
        map[x][y] = value;
    }
}

function checkListOfCellsEquality(list, state){
    // Return true if every cell in the list is in the given state
    for(i = 0; i < list.length; i++){
        x = list[i]['x'];
        y = list[i]['y'];
        if(map[x][y] !== state) return false;
    }
    return true;
}

function getMapCoords(indices){
    // Given map[x][y], return the cartesian coordinates of the top left corner of that tile
    x = indices.x;
    y = indices.y;

    coords = {};
    x_scalar = x/GRID_WIDTH;
    coords['x'] = Math.floor(x_scalar * (GAME_WIDTH - MENU_WIDTH)) + MENU_WIDTH;
    y_scalar = y/GRID_HEIGHT;
    coords['y'] = Math.floor(y_scalar * GAME_HEIGHT);

    return coords;
}

function getMapIndices(coords){
    // given coords, return the corresponding indices of the map
    x = coords.x - MENU_WIDTH;
    y = coords.y;

    indices = {};
    x_scalar = x/(GAME_WIDTH - MENU_WIDTH);
    indices['x'] = Math.floor(x_scalar * GRID_WIDTH);
    y_scalar = y/GAME_HEIGHT;
    indices['y'] = Math.floor(y_scalar * GRID_HEIGHT);

    return indices;
}

function getShortestAirPath(direction, map){
    if(direction === 'lr') indices = getLeftEntrance();
    else if(direction === 'ud') indices = getTopEntrance();
    else console.log('Error: invalid direction during getShortestAirPath');
    x = indices.x;
    y = indices.y;
    shortest_path = [];
    if(direction === 'lr'){
        for(i = 0; i < GRID_WIDTH; i++){
            shortest_path.push({'x': x+i, 'y':y});
            if(map[i+x][y] === 'exit'){
                return shortest_path;
            }
        }
    } else if(direction === 'ud'){
        for(i = 0; i < GRID_HEIGHT; i++){
            shortest_path.push({'x': x, 'y':y+i});
            if(map[x][i+y] === 'exit'){
                return shortest_path;
            }
        }
    } else {
        console.log('Error: invalid direction during getShortestAirPath');
    }
    return shortest_path;
}

function getConnectedCell(coords, direction){
    if(direction === 'u'){
        return {'x':coords.x, 'y':coords.y-1};
    } else if(direction === 'r'){
        return {'x':coords.x+1, 'y':coords.y};
    } else if(direction === 'd'){
        return {'x':coords.x, 'y':coords.y+1};
    } else if(direction === 'l'){
        return {'x':coords.x-1, 'y':coords.y};
    } else {
        console.log('Error: Invalid direction during getConnectedCell');
    }
}

function checkConnectedCoords(connected_coords){
    if(connected_coords.x >= 0 && connected_coords.y >= 0 &&
       connected_coords.x < GRID_WIDTH && connected_coords.y < GRID_HEIGHT){
        return true;
    }
    return false;
}

function isValidExit(coords, cell, direction){
    if(cell !== 'exit'){
        return false;
    }
    if(direction === 'lr'){
        if(coords.x < GRID_WIDTH-2){
            return false;
        }
    }
    if(direction === 'ud'){
        if(coords.y < GRID_HEIGHT-2){
            return false;
        }
    }
    return true;
}

function getShortestGroundPath(direction, map){
    if(direction === 'lr') {
        solutions = [[getLeftEntrance()]];
    } else {
        solutions = [[getTopEntrance()]];
    }
    visited = [];
    directions = ['u', 'r', 'd', 'l'];
    counter = 100;
    while (solutions.length > 0 && counter >= 0) {
        counter--;
        path = solutions.pop();
        for (s = 0; s < directions.length; s++) {
            // Add new paths spreading in each viable direction
            new_path = path.slice();
            connected_coords = getConnectedCell(new_path[new_path.length - 1], directions[s]);
            if(checkConnectedCoords(connected_coords)) {
                connected_cell = map[connected_coords.x][connected_coords.y];
                if (connected_cell === 'empty' || connected_cell === 'exit') {
                    if (getIndexOf(visited, connected_coords) === -1) {
                        new_path.push(connected_coords);
                        if (isValidExit(connected_coords, connected_cell, direction)) {
                            return new_path;
                        }
                        solutions.push(new_path);
                        visited.push(connected_coords);
                    }
                }
            }
        }
    }
    console.log('Error: no shortest ground path found');
}

function updateShortestPaths(){
    game_data.paths['glr'] = getShortestGroundPath('lr', game_data.map);
    game_data.paths['gud'] = getShortestGroundPath('ud', game_data.map);
}

function renderMap(){
    for(i = 0; i < GRID_WIDTH; i++){
        for(j = 0; j < GRID_HEIGHT; j++){
            renderCell({'x':i,'y':j});
        }
    }
}

function renderCell(indices){
    cell = game_data.map[indices.x][indices.y];
    coords = getMapCoords(indices);


    if(indices.x === game_data.state.selection['coords']['x'] &&
       indices.y === game_data.state.selection['coords']['y']){
        renderCellImage(coords, 'selection');
    }

    if(cell !== 'empty') renderCellImage(coords, cell);

    if(game_data.options['show_radius'] && isTower(cell)) {
        renderRadius(coords, cell);
    }
    if(game_data.options['show_grid']){
        renderGrid(coords);
    }
}

function renderGrid(coords){
    drawRectangle(game_data.context,
        {
            x: coords.x,
            y: coords.y,
            width: CELL_WIDTH,
            height: CELL_HEIGHT,
            fill: TRANSPARENT_COLOR,
            stroke: BLACK_COLOR
        }
    );
}

function renderRadius(coords, tower){
    tower_range = getTowerRange(tower);

    drawCircle(game_data.context,
        {
            'x': coords.x + CELL_WIDTH/2,
            'y': coords.y + CELL_HEIGHT/2,
            'radius': tower_range * CELL_WIDTH,
            'stroke': BLACK_COLOR,
            'fill': TRANSPARENT_COLOR
        });
}
