const text = "Student, passionate coder & tech enthusiast...";
const typingSpeed = 100;
const cursorBlinkSpeed = 400;

const typingElement = document.getElementById("typing-text");
const cursorElement = document.getElementById("cursor");

let charIndex = 0;

function typeNextChar() {
  if (charIndex < text.length) {
    typingElement.textContent += text[charIndex];
    charIndex++;
    setTimeout(typeNextChar, typingSpeed);
  } else {
    setTimeout(deleteText, 1000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingElement.textContent = text.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, typingSpeed);
  } else {
    setTimeout(typeNextChar, 500);
  }
}

function blinkCursor() {
  cursorElement.classList.toggle("hidden");
  setTimeout(blinkCursor, cursorBlinkSpeed);
}

typeNextChar();
blinkCursor();