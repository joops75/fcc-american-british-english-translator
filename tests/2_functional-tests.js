/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require('chai');
const assert = chai.assert;

let textarea;
let errorDiv;
let translateBtn;
let clearBtn;
let translatedDiv;

suite('Functional Tests', () => {
  suiteSetup(() => {
    // DOM already mocked -- no need to initialize JSDOM
    textarea = document.getElementById('text-input');
    translatedDiv = document.getElementById('translated-sentence');
    errorDiv = document.getElementById('error-msg');
    translateBtn = document.getElementById('translate-btn');
    clearBtn = document.getElementById('clear-btn');
  });

  suite('Function ____()', () => {
    /* 
      The translated sentence is appended to the `translated-sentence` `div`
      and the translated words or terms are wrapped in 
      `<span class="highlight">...</span>` tags when the "Translate" button is pressed.
    */
    test("Translation appended to the `translated-sentence` `div`", () => {
      // clear div
      translatedDiv.innerHTML = '';
      assert.isEmpty(translatedDiv.innerHTML);

      // enter text
      textarea.value = 'The rv park is open from 7:00.';
      translateBtn.click();

      assert.equal(translatedDiv.innerHTML, 'The <span class="highlight">caravan site</span> is open from <span class="highlight">7.00</span>.')
    });

    /* 
      If there are no words or terms that need to be translated,
      the message 'Everything looks good to me!' is appended to the
      `translated-sentence` `div` when the "Translate" button is pressed.
    */
    test("'Everything looks good to me!' message appended to the `translated-sentence` `div`", () => {
      // clear div
      translatedDiv.innerHTML = '';
      assert.isEmpty(translatedDiv.innerHTML);

      // enter text
      textarea.value = `1                       2`;
      translateBtn.click();

      assert.equal(translatedDiv.innerHTML, 'Everything looks good to me!')
    });

    /* 
      If the text area is empty when the "Translation" button is
      pressed, append the message 'Error: No text to translate.' to 
      the `error-msg` `div`.
    */
    test("'Error: No text to translate.' message appended to the `error-msg` `div`", () => {
      // empty textarea
      textarea.value = '';
      assert.isEmpty(errorDiv);

      // populate textarea
      translateBtn.click();
      assert.equal(errorDiv.textContent, 'Error: No text to translate.');
    });

  });

  suite('Function ____()', () => {
    /* 
      The text area and both the `translated-sentence` and `error-msg`
      `divs` are cleared when the "Clear" button is pressed.
    */
    test("Text area, `translated-sentence`, and `error-msg` are cleared", () => {
      // populate `translated-sentence` and `error-msg` `divs`
      textarea.value = 'Some text to translate.'
      translatedDiv.textContent = 'Some text that has been translated.';
      errorDiv.textContent = 'Some error message.'
      assert.isNotEmpty(textarea.value);
      assert.isNotEmpty(translatedDiv.textContent);
      assert.isNotEmpty(errorDiv.textContent);

      // clear `translated-sentence` and `error-msg` `divs`
      clearBtn.click();
      assert.isEmpty(textarea.value);
      assert.isEmpty(translatedDiv.textContent);
      assert.isEmpty(errorDiv.textContent);
    });

  });

});
