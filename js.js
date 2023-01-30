const girl = document.querySelector('.girl');
const zombie = document.querySelector('.zombie');

const jump = () => {
    girl.classList.add('jump');

    setTimeout(() => {

        girl.classList.remove('jump');

    } , 500);
}

const loop = setInterval(() => {

   
   
    const zombiePosition = zombie.offsetLeft;
    const girlPosition = +window.getComputedStyle(girl).bottom.replace('px', '');

    console.log(girlPosition);
    
    if (zombiePosition <= 125 && zombiePosition > 0 && girlPosition < 180){

        zombie.style.animation = 'none';
        zombie.style.left = `${zombiePosition}px`;

        girl.style.animation = 'none';
        girl.style.bottom = `${girlPosition}px`;

        /*game over*/

        girl.src = "img/game-over.png"
        girl.style.width = "70px"
        girl.style.marginLeft = "50px"

        /*Ao acabar o jogo*/
        clearInterval(loop)

    }

}, 10);

document.addEventListener('keydown', jump);