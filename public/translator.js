import { americanOnly } from './american-only.js';
import { britishOnly } from './british-only.js';
import { americanToBritishSpelling } from './american-to-british-spelling.js';
import { americanToBritishTitles } from './american-to-british-titles.js';

const textarea = document.getElementById('text-input');
const translateBtn = document.getElementById('translate-btn');
const clearBtn = document.getElementById('clear-btn');
const translatedDiv = document.getElementById('translated-sentence');
const errorDiv = document.getElementById('error-msg');

document.addEventListener('DOMContentLoaded', () => {
  translateBtn.addEventListener('click', translateListener);
  clearBtn.addEventListener('click', clearListener);
});

const displayError = str => {
  errorDiv.textContent = str;
}

const translateListener = () => {
  const text = textarea.value;
  if (!text) {
    return displayError('Error: No text to translate.');
  }
}

const clearListener = () => {
  textarea.value = '';
  translatedDiv.textContent = '';
  errorDiv.textContent = '';
}

const translateText = (str, toBritish) => {
  let possibleWords;
  let timeRegex;
  let possibleTitlesRegex;
  
  if (!toBritish) {
    possibleWords = Object.keys(americanOnly).concat(Object.keys(americanToBritishSpelling));
    possibleTitlesRegex = ('\\b' + Object.keys(americanToBritishTitles).join('\\B|\\b') + '\\B').replace(/\./g, '\\.');
    timeRegex = '\\b\\d{1,2}:\\d{2}\\b';
  } else {
    possibleWords = Object.keys(britishOnly);
    possibleTitlesRegex = ('\\b' + Object.keys(americanToBritishTitles).join('\\b|\\b') + '\\b').replace(/\./g, '');
    timeRegex = '\\b\\d{1,2}\\.\\d{2}\\b';
  }

  // sort wordlist so longest are at the start
  // necessary so that longest words are matched first with RegExp
  possibleWords.sort((a, b) => {
    return b.length - a.length;
  });

  return str.replace(new RegExp('\\b' + possibleWords.join('\\b|\\b') + '\\b' + '|' + possibleTitlesRegex + '|' + timeRegex, 'gi'), matchingWord => {
    if (new RegExp(timeRegex).test(matchingWord)) {
      return matchingWord.replace(/:|\./, match => match === ':' ? '.' : ':');
    }
    const firstLetterCode = matchingWord[0].charCodeAt(0);
    const isCapitalized = firstLetterCode >= 65 && firstLetterCode <= 90;
    const translatedWord = americanOnly[matchingWord.toLowerCase()] || americanToBritishSpelling[matchingWord.toLowerCase()] || americanToBritishTitles[matchingWord.toLowerCase()];
    if (isCapitalized) {
      return translatedWord[0].toUpperCase() + translatedWord.slice(1);
    }
    return translatedWord;
  });
}

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {
    translateText
  }
} catch (e) {}
