const canvas = document.querySelector('canvas');
console.log(canvas);

const context2D = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

context2D.fillStyle = 'black';

context2D.fillRect(0, 0, canvas.width, canvas.height);

const fondoLevel1 = new Image();
fondoLevel1.src = './img/azukaprueba.jpg';

const imgPlayer = new Image();
imgPlayer.src = './img/playerAbajo.png'; 

fondoLevel1.onload = () => {
    context2D.drawImage(fondoLevel1, 0, 0);
    context2D.drawImage(imgPlayer, canvas.width / 2 - imgPlayer.width / 2, canvas.height / 2 - imgPlayer.height / 2);
}


