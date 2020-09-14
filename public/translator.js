import { americanOnly } from './american-only.js';
import { britishOnly } from './british-only.js';
import { americanToBritishSpelling } from './american-to-british-spelling.js';
import { britishToAmericanSpelling } from './british-to-american-spelling.js';
import { americanToBritishTitles } from './american-to-british-titles.js';
import { britishToAmericanTitles } from './british-to-american-titles.js';

const textarea = document.getElementById('text-input');
const translateBtn = document.getElementById('translate-btn');
const clearBtn = document.getElementById('clear-btn');
const translatedDiv = document.getElementById('translated-sentence');
const errorDiv = document.getElementById('error-msg');
const localeSelect = document.getElementById('locale-select');

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
  
  const fromBritish = localeSelect.value === 'british-to-american';
  const translatedText = translateText(text, fromBritish, true);
  translatedDiv.innerHTML = translatedText === text ? 'Everything looks good to me!' : translatedText;
}

const clearListener = () => {
  textarea.value = '';
  translatedDiv.textContent = '';
  errorDiv.textContent = '';
}

const translateText = (str, fromBritish, highlightTranslatedWords) => {
  let possibleWords;
  let timeRegex;
  let possibleTitlesRegex;
  
  if (fromBritish) {
    possibleWords = Object.keys(britishOnly).concat(Object.keys(britishToAmericanSpelling));
    possibleTitlesRegex = ('\\b' + Object.keys(britishToAmericanTitles).join('\\b(?!\\.)|\\b') + '\\b(?!\\.)');
    timeRegex = '\\b\\d{1,2}\\.\\d{2}\\b';
  } else {
    possibleWords = Object.keys(americanOnly).concat(Object.keys(americanToBritishSpelling));
    possibleTitlesRegex = ('\\b' + Object.keys(americanToBritishTitles).join('\\B|\\b') + '\\B').replace(/\./g, '\\.');
    timeRegex = '\\b\\d{1,2}:\\d{2}\\b';
  }

  // sort wordlist so longest are at the start
  // necessary so that longest words are matched first with RegExp
  possibleWords.sort((a, b) => {
    return b.length - a.length;
  });

  return str.replace(new RegExp('\\b' + possibleWords.join('\\b|\\b') + '\\b' + '|' + possibleTitlesRegex + '|' + timeRegex, 'gi'), matchingWord => {
    const isTime = new RegExp(timeRegex).test(matchingWord);
    const firstLetterCode = matchingWord[0].charCodeAt(0);
    const isCapitalized = firstLetterCode >= 65 && firstLetterCode <= 90;
    const matchingWordLC = matchingWord.toLowerCase();
    let translatedWord;

    if (isTime) {
      translatedWord = matchingWord.replace(/:|\./, match => match === ':' ? '.' : ':');
    } else if (fromBritish) {
      translatedWord = britishOnly[matchingWordLC] || britishToAmericanSpelling[matchingWordLC] || britishToAmericanTitles[matchingWordLC];
    } else {
      translatedWord = americanOnly[matchingWordLC] || americanToBritishSpelling[matchingWordLC] || americanToBritishTitles[matchingWordLC];
    }

    if (isCapitalized) {
      translatedWord = translatedWord[0].toUpperCase() + translatedWord.slice(1);
    }

    if (highlightTranslatedWords) {
      translatedWord = '<span class="highlight">' + translatedWord + '</span>';
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
