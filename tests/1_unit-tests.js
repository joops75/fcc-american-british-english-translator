/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require('chai');
const assert = chai.assert;

const { JSDOM } = require('jsdom');
let Translator;

suite('Unit Tests', () => {
  suiteSetup(() => {
    // Mock the DOM for testing and load Translator
    return JSDOM.fromFile('./views/index.html', { runScripts: 'dangerously', resources: 'usable' })
      .then((dom) => {
        global.window = dom.window;
        global.document = dom.window.document;

        Translator = require('../public/translator.js');
      });
  });

  suite('Function ____()', () => {

    suite('American to British English', () => {

      test('Mangoes are my favorite fruit. --> Mangoes are my favourite fruit.', () => {
        const input = 'Mangoes are my favorite fruit.';
        const output = 'Mangoes are my favourite fruit.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('I ate yogurt for breakfast. --> I ate yoghurt for breakfast.', () => {
        const input = 'I ate yogurt for breakfast.';
        const output = 'I ate yoghurt for breakfast.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test("We had a party at my friend's condo. --> We had a party at my friend's flat.", () => {
        const input = "We had a party at my friend's condo.";
        const output = "We had a party at my friend's flat.";
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('Can you toss this in the trashcan for me? --> Can you toss this in the bin for me?', () => {
        const input = 'Can you toss this in the trashcan for me?';
        const output = 'Can you toss this in the bin for me?';
        const translated = Translator.translateText(input);
        assert.equal(translated, output);
      });

      test('The parking lot was full. --> The car park was full.', () => {
        const input = 'The parking lot was full.';
        const output = 'The car park was full.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('Like a high tech Rube Goldberg machine. --> Like a high tech Heath Robinson device.', () => {
        const input = 'Like a high tech Rube Goldberg machine.';
        const output = 'Like a high tech Heath Robinson device.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });
      
      test('To play hooky means to skip class or work. --> To bunk off means to skip class or work.', () => {
        const input = 'To play hooky means to skip class or work.';
        const output = 'To bunk off means to skip class or work.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('No Mr. Bond, I expect you to die. --> No Mr Bond, I expect you to die. ', () => {
        const input = 'No Mr. Bond, I expect you to die.';
        const output = 'No Mr Bond, I expect you to die.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('Dr. Grosh will see you now. --> Dr Grosh will see you now. ', () => {
        const input = 'Dr. Grosh will see you now.';
        const output = 'Dr Grosh will see you now.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('Lunch is at 12:15 today. --> Lunch is at 12.15 today.', () => {
        const input = 'Lunch is at 12:15 today.';
        const output = 'Lunch is at 12.15 today.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

    });

    suite('British to American English', () => {

      test.skip('We watched the footie match for a while. --> We watched the soccer match for a while.', () => {
        const input = 'We watched the footie match for a while.';
        const output = 'We watched the soccer match for a while.';

        
      });

      test.skip('Paracetamol takes up to an hour to work. --> Tylenol takes up to an hour to work.', () => {
        const input = 'Paracetamol takes up to an hour to work.';
        const output = 'Tylenol takes up to an hour to work.';

        
      });

      test.skip('First, caramelise the onions. --> First, caramelize the onions.', () => {
        const input = 'First, caramelise the onions.';
        const output = 'First, caramelize the onions.';

        
      });

      test.skip('I spent the bank holiday at the funfair. --> I spent the public holiday at the carnival.', () => {
        const input = 'I spent the bank holiday at the funfair.';
        const output = 'I spent the public holiday at the carnival.';

        
      });

      test.skip('I had a bicky then went to the chippy. --> I had a cookie then went to the fish-and-chip shop.', () => {
        const input = 'I had a bicky then went to the chippy.';
        const output = 'I had a cookie then went to the fish-and-chip shop.';

        
      });

      test.skip("I've just got bits and bobs in my bum bag. --> I've just got odds and ends in my fanny pack.", () => {
        const input = "I've just got bits and bobs in my bum bag.";
        const output = "I've just got odds and ends in my fanny pack.";

        
      });
      
      test.skip("The car boot sale at Boxted Airfield was called off. --> The swap meet at Boxted Airfield was called off.", () => {
        const input = "The car boot sale at Boxted Airfield was called off.";
        const output = "The swap meet at Boxted Airfield was called off.";

        
      });

      test.skip("Have you met Mrs Kalyani? --> Have you met Mrs. Kalyani?", () => {
        const input = "Have you met Mrs Kalyani?";
        const output = "Have you met Mrs. Kalyani?";

        
      });

      test.skip("Prof Joyner of King's College, London. --> Prof. Joyner of King's College, London.", () => {
        const input = "Prof Joyner of King's College, London.";
        const output = "Prof. Joyner of King's College, London.";

        
      });

      test.skip('Tea time is usually around 4 or 4.30. --> Tea time is usually around 4 or 4:30.', () => {
        const input = 'Lunch is at 12:15 today.';
        const output = 'Lunch is at 12.15 today.';

        
      });

    });

    suite('Correct replacement of all words and ignoring of partial matches.', () => {

      test('Can replace multiple words at once', () => {
        const input = 'Please can you put the candy apple in the trashcan. That\'s what the trashcan is for.';
        const output = 'Please can you put the toffee apple in the bin. That\'s what the bin is for.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('Ignores partial matches at start of words', () => {
        const input = 'His pen was turned into trash after he trashed it.';
        const output = 'His pen was turned into rubbish after he trashed it.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('Ignores partial matches at end of words', () => {
        const input = 'The guy with an ax said his favorite band is Anthrax.';
        const output = 'The guy with an axe said his favourite band is Anthrax.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

      test('Ignores partial matches of times.', () => {
        const input = 'At 12:45, enter the code 123:456.';
        const output = 'At 12.45, enter the code 123:456.';
        const translated = Translator.translateText(input);
        
        assert.equal(translated, output);
      });

    });

  });

});
