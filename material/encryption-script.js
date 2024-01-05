// Function to perform Caesar cipher encryption
function encryptCaesar(plaintext, shift) {
    return plaintext.replace(/[a-zA-Z]/g, function (char) {
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 65 : 97;
        return String.fromCharCode((char.charCodeAt(0) - offset + shift) % 26 + offset);
    });
}

// Function to perform encryption and update the result
function performEncryption() {
    const inputText = document.getElementById("inputText").value;
    const shiftValue = parseInt(document.getElementById("shiftValue").value, 10);
    const encryptedText = encryptCaesar(inputText, shiftValue);
    document.getElementById("outputResult").textContent = `Encrypted: ${encryptedText}`;
}
// Function to perform Caesar cipher decryption
function decryptCaesar(ciphertext, shift) {
    return encryptCaesar(ciphertext, 26 - shift); // Decryption is just encryption with the opposite shift
}

// Function to perform decryption and update the result
function performDecryption() {
    const inputText = document.getElementById("inputText").value;
    const shiftValue = parseInt(document.getElementById("shiftValue").value, 10);
    const decryptedText = decryptCaesar(inputText, shiftValue);
    document.getElementById("outputResult").textContent = `Decrypted: ${decryptedText}`;
}

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
