// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
//     Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//     Example:
//
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
//
// Bash note:
//
//     input : 2 strings with substrings separated by ,
//     output: number as a string

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

function mxdiflg(a1, a2) {
    const minmax = (minmax, x) => [Math.min(minmax[0], x.length), Math.max(minmax[1], x.length)];
    if (a1.length == 0 || a2.length == 0) return -1;
    let minmax1 = a1.reduce(minmax, [Infinity, -1]);
    let minmax2 = a2.reduce(minmax, [Infinity, -1]);
    return Math.max(minmax1[1] - minmax2[0], minmax2[1] - minmax1[0]);
}

function mxdiflg(a1, a2) {
    if(!a1.length||!a2.length)return -1;
    a1.sort((a,b)=>a.length-b.length);
    a2.sort((a,b)=>a.length-b.length)
    return Math.max(Math.abs(a1[0].length-a2[a2.length-1].length),Math.abs(a2[0].length-a1[a1.length-1].length));
}

function mxdiflg(a1, a2) {
    const maxx = (x) => x.map(el => el.length)
    return a1.length === 0 || a2.length === 0 ? -1 : Math.max( Math.max(...maxx(a1)) - Math.min(...maxx(a2)), Math.max(...maxx(a2)) - Math.min(...maxx(a1)) )
}

function mxdiflg(a1, a2) {
    return (a1 && a1.length && a2 && a2.length)
        ? Math.max(Math.abs(max(a1) - min(a2)), Math.abs(max(a2) - min(a1)))
        : -1;

    function max(a) {
        return a.reduce((b, c) => { return  (b > c.length) ? b : c.length; }, 0);
    }

    function min(a) {
        return a.reduce((b, c) => { return  (b < c.length) ? b : c.length; }, a[0].length);
    }
}

const byLen = arr => arr.map(v => v.length).sort((a, b) => a - b);
const mxdiflg = (a1, a2) => {
    a1 = byLen(a1), a2 = byLen(a2);
    let max = Math.max(
        Math.max(...a2) - Math.min(...a1),
        Math.max(...a1) - Math.min(...a2)
    );
    return Number.isFinite(max) ? max : -1;
};

const mxdiflg = (a1, a2) =>
    a1.reduce((pre, val) => Math.max(pre, a2.reduce((p, v) => Math.max(p, Math.abs(val.length - v.length)), -1)), -1);

const mxdiflg = (a1, a2, c) => a1.reduce((res, x) => (a2.forEach(y => (c = Math.abs(x.length - y.length)) > res ? res = c : 0), res), -1)

function mxdiflg(a1, a2) {
    return !a1.length || !a2.length ? -1 : Math.max(...a1.map(x => Math.max(...a2.map(y => Math.abs(y.length - x.length)))))
}

function mxdiflg(a1, a2) {
    var map = (arr)=>arr.map(c => c.length), mx = (arr)=>Math.max(...arr), mn = (arr)=>Math.min(...arr)
    return a1.length && a2.length ? Math.max(mx(map(a1))-mn(map(a2)), mx(map(a2))-mn(map(a1))) : -1
}

describe("mxdiflg",function() {
    it("Basic tests",function() {
        var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
        var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
        assert.strictEqual(mxdiflg(s1, s2), 13);
    })})