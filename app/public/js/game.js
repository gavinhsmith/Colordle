/**
 * Colordle
 * A fun color-matching game with Hexidecimals!
 * Gavin Smith
 * (C) Feb 9th, 2024
 */

// Elements
const ELEMENTS = [
    document.body, 
    document.getElementById("game_number"), 
    document.getElementById("guess"), 
    document.getElementById("guesses"),
    document.getElementById("color_display"),
    document.getElementById("title")
];
const BODY = 0;
const GAME_NUMBER = 1;
const GUESS = 2;
const GUESSES_BOX = 3;
const COLOR_DISP = 4;
const TITLE = 5;
const getElm = elm => ELEMENTS[elm];

// Dates
const first_date = new Date("Feb 9, 2024");
const date = new Date();
const game_number = Math.ceil(Math.abs(date - first_date) / (1000 * 60 * 60 * 24));
getElm(GAME_NUMBER).innerHTML = game_number;

// Color Generation
const rand = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
const color = Color.seedGenerateRandom(rand);
getElm(BODY).style.backgroundColor = color.hex;
getElm(TITLE).style.color = color.hex;
getElm(COLOR_DISP).style.backgroundColor = color.hex;
console.info("Today's Color", color);

// Make Guess Item
function createGuessElm(guess) {
    let main_div = document.createElement("div");

    main_div.style.backgroundColor = guess.hex;

    main_div.innerHTML = "";
}

// Color Guess Logic
function handleGuess() {
    if (getElm(GUESS).value.length < 6) return;
    let guess = Color.fromHex(`#${getElm(GUESS).value}`);
    getElm(GUESS).value = "";

    console.info("Guessed", guess);
}

// Input
function isValidKey(code) {
    let valid_key = false;
    const valid_keys = [
        "Digit0", "Digit1", "Digit2",
        "Digit3", "Digit4", "Digit5",
        "Digit6", "Digit7", "Digit8",
        "Digit9", "KeyA",   "KeyB", 
        "KeyC",   "KeyD",   "KeyE", 
        "KeyF",   "Enter",  "Backspace"
    ];
    valid_keys.forEach(key => {
        if (code === key) valid_key = true;
    })
    return valid_key;
}
getElm(GUESS).addEventListener("keydown", function (e) {
    if (!isValidKey(e.code)) e.preventDefault();
    if (e.code === "Enter") handleGuess();
});