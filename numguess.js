let computerNum = 0;

let playBtn = document.querySelector('#play');
let resetBtn = document.querySelector('#reset');

let userInput = document.querySelector('#userInput');

let chances = 5;
let chanceArea = document.querySelector('#leftchance > span');
let gameOver = false;

let result = document.querySelector('#result > span');

let history = []


resetBtn.addEventListener('click', reset);

playBtn.addEventListener('click', play);

userInput.addEventListener('focus', function() {
    userInput.value = '';
})
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log(`정답: ${computerNum}`)
} 
pickRandomNum()

function reset() { 
    history = [];
    chances = 5;
    chanceArea.textContent=chances;
    result.textContent = '결과 확인'
    userInput.value = '';
    pickRandomNum()
}

function play () {
    if (userInput.value>=1 && userInput.value<=100) {

        if (history.includes(userInput.value)) {
            result.textContent='이미 넣었던 숫자예요. 다른 숫자를 입력하세요.'
        } else if (userInput.value > computerNum) {
            chances = chances - 1;
            chanceArea.textContent=chances;
            result.textContent='더 작아야 해요.';
        } else if (userInput.value < computerNum) {
            chances = chances - 1;
            chanceArea.textContent=chances;
            result.textContent='더 커야 해요.'
        } else {
            alert('정답입니다!')
            result.textContent='정답입니다!'
            chances = 5;
            chanceArea.textContent=chances;
            reset();
            pickRandomNum()
        }

        if (chances < 0) {
            alert('다시 도전하세요.');
            reset();
        }
        
        history.push(userInput.value)
    } else {
        alert('1과 100 사이의 숫자를 입력하세요.')
    }
}

//if (history.includes(userInputNum)) {}

