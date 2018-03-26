function renderMenuButton(button){
    canvas = game_data['canvas'];
    context = game_data['context'];

    x = button.min_x;
    y = button.min_y;

    drawRectangle(context,
        {
            x: x,
            y: y,
            width: MENU_BUTTON_WIDTH,
            height: MENU_BUTTON_HEIGHT,
            fill: MENU_BUTTON_FILL,
            stroke: MENU_BUTTON_STROKE
        }
    );

    context.font=MENU_FONT;
    context.textAlign="center";
    x += MENU_BUTTON_WIDTH/2;
    y += MENU_BUTTON_HEIGHT/2 + 5;
    context.fillStyle = MENU_FONT_COLOR;
    context.fillText(button.display_name, x, y);

}

function renderButtons(buttons){
    for(i = 0; i < buttons.length; i++){
        renderMenuButton(buttons[i]);
    }
}

function renderMenu(){
    window[game_data.menu['state'] + 'MenuRender']();
}

function baseMenuRender(){
    renderButtons(game_data.menu['buttons']);
}
