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

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {

  }
} catch (e) {}
