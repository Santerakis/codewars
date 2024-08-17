// If　a = 1, b = 2, c = 3 ... z = 26
//
// Then l + o + v + e = 54
//
// and f + r + i + e + n + d + s + h + i + p = 108
//
// So friendship is twice as strong as love :-)
//
// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
//
//     The input will always be made of only lowercase letters and will never be empty.
//     Fundamentals

const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

function wordsToMarks(str)
{
    var sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i) - 96;
    return sum;
}

function wordsToMarks(string) {
    return string.split('').reduce((acc, char) => {
        return acc + char.charCodeAt() - 96;
    }, 0);
}

function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let marks = 0;
    string.split('').forEach((char) => {
        marks += alphabet.indexOf(char) + 1;
    });
    return marks;
}

function wordsToMarks(string){
    return [...string].map(e => e.charCodeAt(0)-96).reduce((a,b) => a+b);
}

const wordsToMarks = string =>
    [...string].reduce((pre, val) => pre + val.charCodeAt() - 96, 0);

const wordsToMarks = s => [...s].map((a,i) => s.charCodeAt(i)-96).reduce((a,b) => a+b);

const wordsToMarks = (abc) =>  [0,...abc].reduce(($, b) => $ + ' abcdefghijklmnopqrstuvwxyz'.indexOf(b))

function wordsToMarks(string){
    let num = 0;
    for (let i = 0; i < string.length; i++) {
        num += string.charCodeAt(i) - 96;
    }
    return num;
}

function wordsToMarks(str){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return [...str].reduce((sum,letter)=> (sum += (alphabet.indexOf(letter) + 1),sum),0)
}

function wordsToMarks(string){
    var base = "a".charCodeAt(0)-1;
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
        sum += (string[i].charCodeAt(0)-base)
    }
    return sum;
}

const mark = char => char.charCodeAt() - 'a'.charCodeAt() + 1;
const wordsToMarks = str => [...str].map(mark).reduce((S, x) => S + x, 0);

const alphaNumber = t => "abcdefghijklmnopqrstuvwxyz".match(t).index + 1
const wordsToMarks = s => s.split('').reduce((sum,l)=>sum+=alphaNumber(l),0)

function wordsToMarks(string){
    return string.split('').reduce((sum, l) => sum + (l.charCodeAt() - 'a'.charCodeAt() + 1), 0);
}


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(wordsToMarks("attitude"), 100);
        assert.strictEqual(wordsToMarks("friends"), 75);
        assert.strictEqual(wordsToMarks("family"), 66);
        assert.strictEqual(wordsToMarks("selfness"), 99);
        assert.strictEqual(wordsToMarks("knowledge"), 96);
    });
})