// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//
// So given a string "super", we should return a list of [2, 4].
//
//     Some examples:
//     Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
//
// NOTES
//
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)
//

function vowelIndices(word) {
    var arr = [];
    for(var i = 0; i < word.length; i++) {
        if(/[aeioyu]/i.test(word[i])) {
            arr.push(i+1);
        }
    }
    return arr;
}

function vowelIndices(word){
    const str = 'aeiouy';
    const arr = word.toLowerCase().split('');
    let answer = [];
    arr.forEach((name, i) => {
        if (str.indexOf(name) !== -1) {
            answer.push(i + 1);
        }
    });
    return answer;
}

function vowelIndices(word,a=[]){
    return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
}

function vowelIndices(word){
    vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    result = []
    for (var i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) != -1) {
            result.push(i + 1);
        }
    }
    return result;
}

const vowelIndices = (word) => [...word].map((el, i) => el.match(/[aeiouy]/ig) ? i+1 : '').filter(el => el)

const vowelIndices = word =>
    [...word].reduce((pre, val, idx) => /[aeiouy]/i.test(val) ? [...pre, ++idx] : pre, []);

function vowelIndices(word){
    return [...word].map((v,i)=>~'aeiouyAEIOUY'.indexOf(v)&&++i).filter(Boolean);
}

function vowelIndices(word){
    return [...word].map((el,ind) => el.match(/[aeiouy]/ig) ? ind+1 : '').filter(e => e)
}

describe("Basic tests", function(){
    it("Test", () => {
        assert.deepEqual(vowelIndices("mmm"), []);
        assert.deepEqual(vowelIndices("apple"), [1,5]);
        assert.deepEqual(vowelIndices("super"), [2,4]);
        assert.deepEqual(vowelIndices("orange"), [1,3,6]);
        assert.deepEqual(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
    })
});