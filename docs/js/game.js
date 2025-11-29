// Tạo số ngẫu nhiên từ 50-150
let randomNumber = Math.floor(Math.random() * 101) + 50;
let tries = 0;
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const result = document.getElementById('result');
const triesDiv = document.getElementById('tries');
const confetti = document.getElementById('confetti');

guessBtn.addEventListener('click', function() {
    const guess = Number(guessInput.value);
    if (isNaN(guess) || guess < 50 || guess > 150) {
        result.textContent = 'Vui lòng nhập số từ 50 đến 150!';
        return;
    }
    tries++;
    triesDiv.textContent = `Số lần thử: ${tries}`;
    if (guess < randomNumber) {
        result.textContent = 'Quá thấp!';
    } else if (guess > randomNumber) {
        result.textContent = 'Quá cao!';
    } else {
        result.textContent = `Chính xác! Số là ${randomNumber}`;
        showConfetti();
        guessBtn.disabled = true;
        guessInput.disabled = true;
    }
});

function showConfetti() {
    confetti.innerHTML = '';
    for(let i=0; i<40; i++) {
        const dot = document.createElement('div');
        dot.className = 'confetti-dot';
        dot.style.left = Math.random()*100 + '%';
        dot.style.background = `hsl(${Math.random()*360},80%,60%)`;
        dot.style.animationDelay = (Math.random()*1.5) + 's';
        confetti.appendChild(dot);
    }
}
