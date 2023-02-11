const selectionButtons = document.querySelectorAll("[data-selection]");

const finalColumn = document.querySelector('[data-final-column]');

const computerScoreSpan = document.querySelector('[data-computer-score]');

const yourScoreSpan = document.querySelector('[data-your-score]');

const SELECTIONS = [
  { name: 'rock', emoji: '✊', beats: 'scissors' },
  { name: 'paper', emoji: '✋', beats: 'rock' },
  { name: 'scissors', emoji: '✌️', beats: 'paper' }
];

selectionButtons.forEach(btn => btn.addEventListener('click', e => makeSelection(SELECTIONS.find(sel => sel.name === btn.dataset.selection))));

function addSelectionResult(sel, winner) { const div = document.createElement('div'); div.innerText = (sel.emoji); div.classList.add('result-selection'); if (winner) div.classList.add('winner'); finalColumn.after(div); }

function makeSelection(sel) { const compSel = randomSelection(), yourWinner = isWinner(sel, compSel), compWinner = isWinner(compSel, sel); addSelectionResult(compSel, compWinner); addSelectionResult(sel, yourWinner); if (yourWinner) incrementScore(yourScoreSpan); if (compWinner) incrementScore(computerScoreSpan); }

function isWinner(sel, oppSel) { return sel.beats === oppSel.name; }

function randomSelection() { return SELECTIONS[Math.floor(Math
