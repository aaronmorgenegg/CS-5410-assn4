function getBaseMap(){
    // Return a basic map object, with grid and walls defined.
    map = getEmptyMap();
    setMapWalls(map);

    return map;
}

function getEmptyMap(){
    map = [];
    for(i = 0; i < GAME_WIDTH; i++){
        col = [];
        for(j = 0; j < GAME_HEIGHT; j++){
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

    wall_height = (GRID_HEIGHT - LR_GATE_SIZE)/2;
    for(i = 0; i < wall_height; i++){
        map[0][i] = 'wall';
        map[0][GRID_HEIGHT-i-1] = 'wall';
        map[GRID_WIDTH-1][i] = 'wall';
        map[GRID_WIDTH-1][GRID_HEIGHT-i-1] = 'wall';
    }
}

function getCell(){
    return 'empty';
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

    if(game_data.options['show_grid']){
        renderGrid(coords);
    }
    if(cell === 'wall'){
        renderWall(coords);
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

function renderWall(coords){
    context.drawImage(
        img = game_data.textures['wall'],
        x = coords.x,
        y = coords.y,
        width = CELL_WIDTH,
        height = CELL_HEIGHT
    );
}
