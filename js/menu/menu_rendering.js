function renderMenuButton(button){
    canvas = game_data['canvas'];
    context = game_data['context'];

    x = button.min_x;
    y = button.min_y;
    width = button.max_x - button.min_x;
    height = button.max_y - button.min_y;

    drawRectangle(context,
        {
            x: x,
            y: y,
            width: width,
            height: height,
            fill: MENU_BUTTON_FILL,
            stroke: MENU_BUTTON_STROKE
        }
    );

    x += width/2;
    y += height/2 + 10;

    drawText(context, {x:x, y:y, color:MENU_FONT_COLOR, font:MENU_FONT, msg:button.display_name});
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

function creditsMenuRender(){
    renderButtons(game_data.menu['buttons']);
    credits = { x:MENU_WIDTH/2,
                y:MENU_HEIGHT/5,
                color:MENU_FONT_COLOR,
                font:MENU_FONT,
                msg:'Created by'};
    drawText(game_data.context, credits);

    credits = { x:MENU_WIDTH/2,
                y:MENU_HEIGHT/5 + 30,
                color:MENU_FONT_COLOR,
                font:MENU_FONT,
                msg:'Aaron Morgenegg'
    };
    drawText(game_data.context, credits);
}

function high_scoresMenuRender(){
    renderButtons(game_data.menu['buttons']);
    renderHighScores();
}

function optionsMenuRender(){
    renderButtons(game_data.menu['buttons']);
}

function controlsMenuRender(){
    renderButtons(game_data.menu['buttons']);
}

function gameMenuRender(){
    renderButtons(game_data.menu['buttons']);
    renderHUD();
}

function renderHUD(){
    x = 10;
    y = MENU_HEIGHT/2;
    drawRectangle(game_data.context,
        {
            x: x,
            y: y,
            width: MENU_WIDTH-20,
            height: MENU_HEIGHT/2 - 10,
            fill: MENU_BUTTON_FILL,
            stroke: MENU_BUTTON_STROKE
        }
    );

    renderHUDElement('money', 10, MENU_HEIGHT/2);
    renderHUDElement('lives', MENU_WIDTH/2, MENU_HEIGHT/2);

    renderSelection();
}

function renderHUDElement(element, x, y){
    game_data.context.drawImage(
        game_data.textures[element],
        x + 10,
        y + 10,
        25,
        25
    );
    drawText(game_data.context,
        {x:x + 100, y:y + 30, color:MENU_FONT_COLOR, font:MENU_FONT, msg:game_data.player[element]}
        );
}

function renderSelection(){
    if(game_data.state['selection']['object'] === 'none') return;
    if(isTower(game_data.state['selection']['object'])) {
        drawText(game_data.context,
            {x:MENU_WIDTH/2, y:MENU_HEIGHT/2+70, color:MENU_FONT_COLOR, font:MENU_FONT, msg:getTowerDisplayName(game_data.state['selection']['object'])}
        );
        game_data.context.drawImage(
            game_data.textures[game_data.state['selection']['object']],
            MENU_WIDTH/2 - 25,
            MENU_HEIGHT/2 + 90,
            50,
            50
        );
        renderSelectionElement('Cost', getTowerCost(game_data.state['selection']['object']), MENU_WIDTH/2, MENU_HEIGHT/2 + 175);
        renderSelectionElement('Range', getTowerRange(game_data.state['selection']['object']), MENU_WIDTH/2, MENU_HEIGHT/2 + 215);
        renderSelectionElement('Damage', getTowerDamage(game_data.state['selection']['object']), MENU_WIDTH/2, MENU_HEIGHT/2 + 255);
        renderSelectionElement('Fire Rate', getTowerSpeed(game_data.state['selection']['object']), MENU_WIDTH/2, MENU_HEIGHT/2 + 295);
        renderSelectionElement('Splash', getTowerSplash(game_data.state['selection']['object']), MENU_WIDTH/2, MENU_HEIGHT/2 + 335);
        renderSelectionElement('Targeting', getTowerTargeting(game_data.state['selection']['object']), MENU_WIDTH/2, MENU_HEIGHT/2 + 375);
    }
}

function renderSelectionElement(element, data, x, y){
    drawText(game_data.context,
        {x:x, y:y, color:MENU_FONT_COLOR, font:MENU_FONT, msg:element+ '  :  ' + data}
        );
}
