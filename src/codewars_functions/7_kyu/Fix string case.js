// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//
//     For example:
//
//     solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
//
//     More examples in test cases. Good luck!


function solve(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase()
}

const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

function solve(s){
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) c++;
    }
    return (c > s.length/2) ? s.toUpperCase() : s.toLowerCase()
}

function solve(s){
    return s.replace(/[a-z]/g,'').length>s.length/2 ? s.toUpperCase() : s.toLowerCase()
}

function solve(s){
    return s.split('').reduce((a,v)=>v===v.toUpperCase()?a+1:a-1,0)>0?s.toUpperCase():s.toLowerCase()
}

function solve(s){
    return [...s].reduce((t,c)=>t+/[a-z]/.test(c)*2,0)<s.length?s.toUpperCase():s.toLowerCase();
}

const solve = (s) => (s.match(/[A-Z]/g) || []).length > (s.match(/[a-z]/g) || []).length ? s.toUpperCase() : s.toLowerCase()

const solve = s =>
    [String.prototype.toLowerCase, String.prototype.toUpperCase]
        [Math.min(Math.max(0, [].reduce.call(s, (a, c) =>
        a + 1 - 2/(1 + (93.5/c.charCodeAt())**1e10), 0)), 1)].call(s);

const solve = s =>
    s.replace(/[a-z]/g, ``).length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();

function solve(s){
    return (s.replace(/[^A-Z ]/g, "").length > s.replace(/[^a-z ]/g, "").length ? s.toUpperCase() : s.toLowerCase() ) ;
}

const solve = s => {
    const arrCharCode = s.split('').map(w=>w.charCodeAt(0))
    const countL = arrCharCode.filter(n=>n>96).length;
    const countU = arrCharCode.filter(n=>n<91).length;
    return countL < countU ? s.toUpperCase() : s.toLowerCase();
}

const solve = s => (s.match(/[A-Z]/g)||[]).length > (s.match(/[a-z]/g)||[]).length ? s.toUpperCase() : s.toLowerCase();


describe("Basic tests", function(){
    Test.assertEquals(solve("code"),"code");
    Test.assertEquals(solve("CODe"),"CODE");
    Test.assertEquals(solve("COde"),"code");
    Test.assertEquals(solve("Code"),"code");
});
