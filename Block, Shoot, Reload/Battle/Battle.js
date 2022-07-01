// DECLARATIONS 
const canvas = document.getElementById('game-canvas');
const c = canvas.getContext('2d');
const buttonsP1 = document.getElementById('buttonsP1');
const buttonsP2 = document.getElementById('buttonsP2');
let logo = document.createElement('img');
let cactus1 = document.createElement('img');
const cowboy1 = document.createElement('img');
const cowboy2 = document.createElement('img');
canvas.width = innerWidth;      // Formatting canvas
canvas.height = innerHeight;    // Formatting canvas
let start = document.getElementById('spawnCowboys');
let dodgeButtonP1 = document.createElement('button');
let shootButtonP1 = document.createElement('button');
let reloadButtonP1 = document.createElement('button');
let dodgeButtonP2 = document.createElement('button');
let shootButtonP2 = document.createElement('button');
let reloadButtonP2 = document.createElement('button');

// FUNCTIONS
function drawLine(c, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        c.strokeStyle = stroke;
    }

    if (width) {
        c.lineWidth = width;
    }

    c.beginPath();
    c.moveTo(...begin);
    c.lineTo(...end);
    c.stroke();
}

// CLASSES
class DSRLogo {
    constructor (x, y) {

        logo.src = '/characters/d,s,r-logo.png';
        logo.class = 'logo';
        logo.alt = 'Logo'
    canvas.appendChild(logo);

    }
}
class Cactus {
    constructor (x,y) {
        cactus1.src = '/characters/cactus1.png';
        cactus1.alt = 'cactus';
        cactus1.class = 'cactus';
        canvas.appendChild(cactus1);
    }
}
class Cowboy {
    constructor (x, y) {
        
        cowboy1.src = '/characters/cowboy1.png';
        cowboy1.class = 'cowboys';
        cowboy1.alt = 'Cowboy 1';
    canvas.appendChild(cowboy1);
    }
}
class Cowboy2 {
    constructor (x, y) {
       
        cowboy2.src = '/characters/cowboy2.png';
        cowboy2.class = 'cowboys';
        cowboy2.alt = 'Cowboy 2';
    canvas.appendChild(cowboy2);
    }
}


//   Start Button ---> draws cowboys
start.addEventListener('click',()=>{
    var player1 = new Cowboy;
    var player2 = new Cowboy2;
    cowboy1.onload = function() {
        c.drawImage(cowboy1, 200, 350);
    }
    cowboy2.onload = function() {
        c.drawImage(cowboy2, 1000, 350);
   } 
    start.remove();
    
  //    BUTTONS P1
    dodgeButtonP1.innerText = 'Dodge';
    shootButtonP1.innerText = "Shoot";
    reloadButtonP1.innerText = 'Reload';

  //    BUTTONS P2
  dodgeButtonP2.innerText = 'Dodge';
  shootButtonP2.innerText = "Shoot";
  reloadButtonP2.innerText = 'Reload';


  //  put buttons into button div under canvas
    buttonsP1.appendChild(dodgeButtonP1);
    buttonsP1.appendChild(shootButtonP1);
    buttonsP1.appendChild(reloadButtonP1);
    buttonsP2.appendChild(dodgeButtonP2);
    buttonsP2.appendChild(shootButtonP2);
    buttonsP2.appendChild(reloadButtonP2);
})






