// Sentence Smash
//
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
//
//     ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

smash = function (words) {
    return words.join(" ");
};

// Smash Words
const smash = words => words.join(' ');

// Smash Words
function smash (words) {
    "use strict";
    return words.join(' ');
};

let smash = words => words.join(" ");

// Smash Words
function smash (words) {
    "use strict";
    var smashed = '';
    for(var i = 0; i<words.length; i++) {
        smashed += words[i];
        if(i!=words.length-1) {
            smashed += ' ';
        }
    }
    return smashed;
};

function smash (words) {
    return words.join(" ");
};

// Smash Words
function smash (words) {
    "use strict";
    return words.join(" ").trim();
};

const smash = (words) => words.join(' ');

const smash = w => w.join(' ');

function smash (words) {
    return words.join(' ').trim();
};

const smash = arr => arr.join(" ");

function smash (words) {
    let res = '';
    for (let i of words) {
        res += i.concat(' ')
    }
    return res.trim();
};



describe("smash", () =>  {

    it ("Should return empty string for empty array.", () => {
        assert.strictEqual(smash([]), "");
    });

    it ("One word example should return the word.", () => {
        assert.strictEqual(smash(["hello"]), "hello");
    });

    it ("Multiple words should be separated by spaces.", () =>  {
        assert.strictEqual(smash(["hello", "world"]), "hello world");
        assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
        assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
    });
});
