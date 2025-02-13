document.getElementById('yesButton').addEventListener('click', function() {
    const response = document.getElementById('response');
    response.textContent = '¡Sabía que dirías que sí! 💖';
    response.classList.remove('hidden');
    animateConfetti();
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    const maxX = rect.width - noButton.offsetWidth;
    const maxY = rect.height - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;  // Corrección aquí
    noButton.style.top = `${randomY}px`;   // Corrección aquí
});

function animateConfetti() {
    const confettiCount = 100;
    const container = document.querySelector('.container');

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;   // Corrección aquí
        confetti.style.animationDelay = `${Math.random() * 2}s`;   // Corrección aquí
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;   // Corrección aquí
        container.appendChild(confetti);
    }
}
