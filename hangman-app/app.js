const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const game1 = new Hangman('car parts', 2)

puzzleEl.textContent = game1.getPuzzle()
guessEl.textContent = game1.getStatusMessage()

window.addEventListener('keypress' , e => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessEl.textContent = game1.getStatusMessage()
})

getPuzzle('2').then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})