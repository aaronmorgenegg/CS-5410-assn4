function drawRectangle(context, spec) {
    context.save();

    context.fillStyle = spec.fill;
    context.fillRect(spec.x, spec.y, spec.width, spec.height);

    context.strokeStyle = spec.stroke;
    context.strokeRect(spec.x, spec.y, spec.width, spec.height);

    context.restore();

}

function drawCircle(context, spec) {
    context.beginPath();

    context.strokeStyle = spec.stroke;
    context.arc(spec.x, spec.y, spec.radius, 0, 2*Math.PI);

    context.fillStyle = spec.fill;
    context.fill();

    context.stroke();

}

function renderBackground() {
    canvas = game_data['canvas'];
    context = game_data['context'];

    // Image background
    context.drawImage(
        img = game_data.textures['background'],
        x = 0,
        y = 0,
        width = canvas.width,
        height = canvas.height
    );
}

function getRandomColor(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return 'rgba('+r+', '+g+', '+b+', 1)'
}
