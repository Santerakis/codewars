// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//     Examples:
//
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
        return element !== array[index - 1];
    });
    return s4.join("");
}

function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split('').sort();

    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);//test
        if (!output.includes(array[i]) ) {
            output.push(array[i]);
        }
    }
    return output.join('');
}
console.log(longest('xyaaAbbbccccdefww', 'xxxxyyyyabklmopq'));

function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join('');
}

function longest(s1, s2) {
    return [...(new Set(s1 + s2))].sort().join('');
}

const longest = (s1, s2) => s1.concat(s2)
    .split('')
    .sort()
    .filter((item, pos, self) => self.indexOf(item) == pos)
    .join('');

function longest(s1, s2) {
    return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

const longest = ($1, $2) => [...new Set([...$1, ...$2])].sort().join('')

const longest = (s1, s2) => Array.from(s1 + s2)
    .sort()
    .filter((x, i, a) => x !== a[i-1])
    .join('');

function longest(s1, s2) {
    return (s1+s2).split('').sort().filter((a,b,c)=>a!==c[b-1]).join('');
}

function longest(s1, s2) {
    var answer = [s1, s2].join("").split("").sort();
    return Array.from( new Set(answer)).join("");
}

describe("longest",function() {
    it("Basic tests",function() {
        Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
        Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
        Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
    })})