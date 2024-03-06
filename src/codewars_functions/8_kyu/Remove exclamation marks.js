// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}

const removeExclamationMarks = s => s.replace(/!/g,"") ;

function removeExclamationMarks(s) {
    var arr =s.split("");
    arr = arr.filter(function(e){
        return e !== "!";
    })
    return arr.join("");
}

let removeExclamationMarks = (s) => s.replace(/!/g,'');

const removeExclamationMarks = (s) => {
    return s.split('').filter((letter) => letter !== '!').join('')
}

removeExclamationMarks = s => s.replace(/\!/g, '');

const removeExclamationMarks = s => s.replaceAll('!', '');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
    });
});
