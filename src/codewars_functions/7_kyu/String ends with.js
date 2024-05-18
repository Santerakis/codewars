Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

    solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


function solution(str, ending){
    return str.endsWith(ending);
}

const solution = (str, ending) => str.endsWith(ending);

function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
        throw "wrong type";
    if (ending.length>str.length)
        return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
}

function solution(str, ending){
    return str.substr(-ending.length) == ending;
}

// I try endsWith()
const solution = (str, ending) => str.endsWith(ending)

function solution(str, ending){
    return str.slice(0 - ending.length) === ending;
}

const solution = (s, t) => s.endsWith(t);

function solution(str, ending){
    var l = ending.length;
    var str = str.slice(-l);
    return str.match(ending) ? true : false;
}

function solution(str, ending){
    // TODO: complete
    return ending === str.substr(str.length - ending.length, str.length);
}

solution=(s,e)=> s.endsWith(e)

const solution = (s, e) => s.endsWith(e)

function solution(str, ending){
    return str.split('').reverse().join('').search(ending.split('').reverse().join('')) === 0;
}

function solution(str, ending){
    // TODO: complete
    return str.slice(str.length - ending.length) == ending;
}

const solution = (str, ending)=>{
    return str.endsWith(ending);
}

function solution(str, ending){
    return str.slice(str.length-ending.length) === ending;
}

function solution(str, ending){
    var test = str.slice(-(ending.length));
    if (test === ending){
        return true;
    }
    return false;
}

function solution(str, ending){
    return str.indexOf(ending,str.length - ending.length) !== -1;
}

solution('abc', 'd') // returns false


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(solution('abcde', 'cde'), true)
        Test.assertEquals(solution('abcde', 'abc'), false)
    });
});