const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


    if (tuboPosition <= 120 && tuboPosition > 0  && marioPosition < 80){

        tubo.style.animation = 'none';
        tubo.style.left = '${tuboPosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '50px';

        mario.src= './OIP_gameover.jpeg';
        mario.style.width = '75px'
        mario.style.marginleft = '50px'

        clearInterval(loop)
    }
}, 10);


document.addEventListener('keydown', jump);
