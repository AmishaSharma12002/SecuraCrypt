document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('animatedText');
    const words = ["Secura","Crypta:", "Enigma", "of", "Elegance"];

    words.forEach((word, wordIndex) => {
        const wordElement = document.createElement('span');
        wordElement.classList.add('word');

        word.split('').forEach((char, charIndex) => {
            const charElement = document.createElement('span');
            charElement.classList.add('character');
            charElement.textContent = char;
            charElement.style.animationDelay = `${0.2 + (wordIndex * 0.5) + (charIndex * 0.1)}s`;
            wordElement.appendChild(charElement);

            // Add space after the last character in a word
            if (charIndex === word.length - 1) {
                const spaceElement = document.createElement('span');
                spaceElement.textContent = '\u00A0'; // Non-breaking space
                wordElement.appendChild(spaceElement);
            }
        });

        textContainer.appendChild(wordElement);
    });
});



// Assuming your buttons have specific classes, like 'encryption-btn' and 'decryption-btn'

const encryptionButtons = document.querySelectorAll('.encryption-btn');
const decryptionButtons = document.querySelectorAll('.decryption-btn');

function redirectTo(page) {
    window.location.href = page;
}

// Adding click event listeners for encryption buttons
encryptionButtons.forEach(button => {
    button.addEventListener('click', function() {
        redirectTo('material/encryption.html');
    });
});

// Adding click event listeners for decryption buttons
decryptionButtons.forEach(button => {
    button.addEventListener('click', function() {
        redirectTo('material/decryption.html');
    });
});

document.addEventListener('mousemove', createShootingStar);

function createShootingStar(event) {
    const star = document.createElement('div');
    star.className = 'shooting-star';

    const x = event.clientX;
    const y = event.clientY;

    // Randomize size, duration, and color of the shooting star
    const size = Math.random() * 10 + 5; // Random size between 5 and 15
    const duration = Math.random() * 1 + 0.5; // Random duration between 0.5 and 1.5 seconds
    const color = getRandomColor();

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.backgroundColor = color;

    document.body.appendChild(star);

    // Remove the shooting star after its duration
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

// Function to generate a random color in red or white
function getRandomColor() {
    const isRed = Math.random() < 0.5; // 50% chance of being red
    return isRed ? '#ff0000' : '#ffffff';
}
