const selectionButtons = document.querySelectorAll("[data-selection]")
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const resetButton = document.querySelector('[data-reset-button]') // add reset button element
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },

  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },

  {
    name: 'scissors',
    emoji: '✌️',
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButtons => {
  selectionButtons.addEventListener('click', e => {
    const selectionName = selectionButtons.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

resetButton.addEventListener('click', e => { // add reset button event listener
  computerScoreSpan.innerText = '0'
  yourScoreSpan.innerText = '0'
  finalColumn.innerHTML = ''
})

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = (selection.emoji)
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)
  
  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

