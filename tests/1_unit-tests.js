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

      test.skip('Mangoes are my favorite fruit. --> Mangoes are my favourite fruit.', () => {
        const input = 'Mangoes are my favorite fruit.';
        const output = 'Mangoes are my favourite fruit.';

        
      });

      test.skip('I ate yogurt for breakfast. --> I ate yoghurt for breakfast.', () => {
        const input = 'I ate yogurt for breakfast.';
        const output = 'I ate yoghurt for breakfast.';

        
      });

      test.skip("We had a party at my friend's condo. --> We had a party at my friend's flat.", () => {
        const input = "We had a party at my friend's condo.";
        const output = "We had a party at my friend's flat.";

        
      });

      test.skip('Can you toss this in the trashcan for me? --> Can you toss this in the bin for me?', () => {
        const input = 'Can you toss this in the trashcan for me?';
        const output = 'Can you toss this in the bin for me?';

        
      });

      test.skip('The parking lot was full. --> The car park was full.', () => {
        const input = 'The parking lot was full.';
        const output = 'The car park was full.';

        
      });

      test.skip('Like a high tech Rube Goldberg machine. --> Like a high tech Heath Robinson device.', () => {
        const input = 'Like a high tech Rube Goldberg machine.';
        const output = 'Like a high tech Heath Robinson device.';

        
      });
      
      test.skip('To play hooky means to skip class or work. --> To bunk off means to skip class or work.', () => {
        const input = 'To play hooky means to skip class or work.';
        const output = 'To bunk off means to skip class or work.';

        
      });

      test.skip('No Mr. Bond, I expect you to die. --> No Mr Bond, I expect you to die. ', () => {
        const input = 'No Mr. Bond, I expect you to die.';
        const output = 'No Mr Bond, I expect you to die.';

        
      });

      test.skip('Dr. Grosh will see you now. --> Dr Grosh will see you now. ', () => {
        const input = 'Dr. Grosh will see you now.';
        const output = 'Dr Grosh will see you now.';

        
      });

      test.skip('Lunch is at 12:15 today. --> Lunch is at 12.15 today.', () => {
        const input = 'Lunch is at 12:15 today.';
        const output = 'Lunch is at 12.15 today.';
        
        
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

  });

});
