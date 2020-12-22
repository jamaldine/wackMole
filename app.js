let timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let rand = Math.floor(Math.random()*9+1);
let square = document.getElementById(`${rand}`);
let gameOver = false;
let steps = 500;
let counter = 1;

function whackMole(){
    let elementSelected = this.getAttribute('id')
    let actuelPosition = document.querySelector('.mole').getAttribute('id');
    if(elementSelected === actuelPosition && timeLeft.textContent != 0){
        gameOver = true;
        let myScore = Math.floor(timeLeft.textContent*100/60);
        score.textContent=`${myScore} %`
    }
    else if(elementSelected === actuelPosition && timeLeft.textContent == 0){
        score.textContent=`You losed !`;
    }
}

function result(newRand){
    square.classList.remove('mole');
    square = document.getElementById(`${newRand}`);
    rand=newRand;
    square.classList.add('mole');
    square.addEventListener('mouseup',whackMole);
}

function verifyRandom(newRand){
    while(rand === newRand){
        newRand = Math.floor(Math.random()*9+1);
    }
    result(newRand);
}

function direction(){
    if(timeLeft.textContent <= 10){
        timeLeft.classList.add('ten');
    }
    if(!gameOver){
        let newRand = Math.floor(Math.random()*9+1);
        verifyRandom(newRand);
        if(counter %2 === 0){
            timeLeft.textContent-=1;
        }
        counter++;
    }
}

function reloadMole(){
    if(timeLeft.textContent == 0){
        score.textContent=`Game Over !`;
    }
}

function move(){
    while (steps <= 60000 || gameOver) {
        setTimeout(direction,steps);
        steps+=500;
    }
    setTimeout(reloadMole,60001);
}

move();
