function handleMenuClick(x, y){
    buttons = game_data.menu['buttons'];
    for(i = 0; i < buttons.length; i++){
        if (x >= buttons[i]['min_x'] && x <= buttons[i]['max_x'] &&
            y >= buttons[i]['min_y'] && y <= buttons[i]['max_y']){
            window[game_data.menu['state'] + '_' + buttons[i]['internal_name'] + 'Button']();
        }
    }
}

function base_new_gameButton(){
    console.log('New Game Button Pressed!');
}

function base_optionsButton(){
    console.log('Options Button Pressed!');
}

function base_high_scoresButton(){
    console.log('High Scores Button Pressed!');
}

function base_creditsButton(){
    console.log('Credits Button Pressed!');
}

function base_backButton(){
    console.log('Back Button Pressed!');
}

function getMenuButtonsTemplate(display_names, internal_names){
    buttons = [];
    offset = MENU_HEIGHT/internal_names.length - MENU_BUTTON_HEIGHT/2;
    min_x = MENU_WIDTH/2 - MENU_BUTTON_WIDTH/2;
    max_x = min_x + MENU_BUTTON_WIDTH;
    min_y = offset;
    max_y = min_y + MENU_BUTTON_HEIGHT;
    button_y = MENU_BUTTON_HEIGHT/2;
    for(i = 0; i < internal_names.length; i++){
        buttons.push({'min_x': min_x, 'min_y': min_y, 'max_x': max_x, 'max_y': max_y, 'internal_name': internal_names[i], 'display_name': display_names[i]});
        min_y += offset;
        max_y += offset;
    }
    return buttons;
}

function getMenuButtons(){
    return window['get' + game_data.menu['state'] + 'MenuButtons']();
}

function getbaseMenuButtons(){
    display_names = ['New Game', 'Options', 'High Scores', 'Credits', 'Back'];
    internal_names = ['new_game', 'options', 'high_scores', 'credits', 'back'];
    return getMenuButtonsTemplate(display_names, internal_names);
}
