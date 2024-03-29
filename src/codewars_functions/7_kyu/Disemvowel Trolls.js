// Trolls are attacking your comment section!
//
//     A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//     For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//     Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

disemvowel = str => str.replace(/[aeiou]/gi,'');

function disemvowel(str) {
    return (str || "").replace(/[aeiou]/gi, "");
}

const vowels = 'aeiou';
function disemvowel(str) {
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}

const disemvowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
        let char = str.charAt(i);
        if (vowels.indexOf(char) == -1) {
            newStr += char;
        }
    }
    return newStr;
};

function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(function(el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
}

// without arrow function
function disemvowel(str) { return str.replace(/[aeiou]/gi, '') }

function disemvowel(str) {
    var diemvoweledStr = str.replace(/[aeiou]/gi,"");
    return diemvoweledStr;
}

function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'');
}

function disemvowel(str) {
    return str.replace(/[aeiouAEUIOU]/g, '');
}

const disemvowel = str => str.replace(/[aeiou]/gi, '');

const disemvowel = str => str.replace(/[aeiou]/ig, '');

function disemvowel(string){
    return string.replace(/[aeiouAEIOU]/g, '');
}

function disemvowel(str) {
    return str.replace(/[aeiou]+/gi, '');
}

function disemvowel(str) {
    var str2="";
    for (var i=0; i<str.length; i++){
        if ("aeiou".indexOf(str[i].toLowerCase())<0) {
            str2+=str[i];
        }
    }
    str=str2
    return str;
}

function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
        assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
        assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
})