# 🕹️ Guess My Number - JavaScript DOM Game

A sleek, interactive number-guessing game built with **Vanilla JavaScript**. This project focuses on DOM manipulation, event handling, and maintaining game state.

## 🎮 How to Play
1. **The Goal:** Guess the secret number hidden behind the "?" box.
2. **Range:** The number is randomly generated between **1 and 20**.
3. **Check:** Enter your guess and click the "Check!" button.
4. **Hints:** The game will tell you if your guess is "Too High" or "Too Low."
5. **Win:** When you find the number, the screen turns **green**, the number is revealed, and the high score is updated.
6. **Reset:** Use the "Again!" button to restart the game without losing your high score.

## 🛠️ Technical Features
* **DOM Manipulation:** Uses `document.querySelector` to dynamically update text content, CSS styles, and input values.
* **Event Listeners:** Implements `addEventListener` to handle user interactions on click.
* **Game Logic:** * Random number generation using `Math.random()`.
    * Score decrementing logic with "Game Over" validation.
    * High score persistence during the current session.
* **CSS in JS:** Dynamically alters the UI (background colors and element widths) based on the game state.



## 📁 File Structure
```text
├── index.html   # The structure of the game
├── style.css    # Modern dark-theme styling
└── script.js    # The game logic and DOM manipulation
