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
imgPlayer.src = './img/playerArriba.png'; 

class Sprite {
    constructor({ position, velocity }){
        this.position = position
    }
}

const background = new scrit({
    position: {
        x: 0,
        y: 0
    }
})

function animate() {
    window.requestAnimationFrame(animate)
    context2D.drawImage(fondoLevel1, 0, 0);
    context2D.drawImage(
        imgPlayer,
        0,
        0,
        imgPlayer.width / 4,
        imgPlayer.height,
        canvas.width / 2 - imgPlayer.width / 4 / 2,
        canvas.height / 2 - imgPlayer.height / 2,
        imgPlayer.width / 4,
        imgPlayer.height
        )   
}

animate()

window.addEventListener('keydown', (keyMoving) => {
    switch (keyMoving.key ){
        case 'w':
            console.log('la W esta presionada');
            break
        case 'a':
            console.log('la A esta presionada');
            break
        case 's':
            console.log('la S esta presionada');
            break
        case 'd':
            console.log('la D esta presionada');
            break
    }
});


