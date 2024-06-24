// Instructions
//
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)
//
// "CodEWaRs" --> [0,3,4,6]
//

var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};

var capitals = function (word) {
    return word.split('').reduce(function(memo, v, i) {
        return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
};

var capitals = function (word) {
    return word.split('')
        .map(function(l, i) { if (l.toUpperCase() === l) return i; })
        .filter(function(i) { return i != null })
};

const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }

var capitals = function (word) {
    return word.split('').reduce(function(n, l, i){
        return /[A-Z]/.test(l) && n.push(i), n;
    }, []);
};

var capitals = function (word) {
    return word.split('').reduce(function(result, c, i) {
        if (c.toUpperCase() === c) result.push(i);
        return result;
    }, []);
};

const capitals = word =>
    [...word].reduce((pre, val, idx) => /[A-Z]/.test(val)? [...pre, idx] : pre, []);

var capitals = function (word) {
    // Write your code here
    var arr = []
    for(i = 0; i < word.length; i++){
        if (word[i] === word[i].toUpperCase()){
            arr.push(i)
        }

    }
    return arr
};

var capitals = word =>
    [...word].map((el, i) => el === el.toUpperCase() ? i : -1).filter((e)=> e >= 0)

var capitals = function (word) {
    var ret = [];
    word.replace(/[A-Z]/g, function(_, i){ ret.push(i) });
    return ret;
};

const capitals = WORD => WORD.match(/[A-Z]/g).map(el => WORD.indexOf(el))

var capitals = word => [...word].reduce((arr, v, i) => /[A-Z]/.test(v)? [...arr, i] : arr, []);

var capitals = function (word) {
    return word.split('').reduce(function (capitals, character, index) {
        if (character == character.toUpperCase() && character != character.toLowerCase())
            capitals.push(index);
        return capitals;
    }, []);
};

capitals=w=>[...w].map((c,i)=>c===c.toUpperCase()?i:-1).filter(v=>v>=0)

var capitals = function (word) {
    return word.split("").reduce(function(p, v, i){
        if (v == v.toUpperCase()) p.push(i);
        return p;
    }, []);
};

var capitals = function (word) {
    let x = []
    for (let i=0; i<word.length; i++){
        if (word[i]===word[i].toUpperCase()){
            x.push(i)
        }
    }
    return x
};

var capitals = function (word) {
    var result=[];
    for (var i=0,n=word.length;i<n;i++)
        if (word[i]>='A' && word[i]<='Z') result.push(i);
    return result;
};

var capitals = function (word) {
    let arr = [];
    for(let i = 0; i < word.length; i++){
        if(word[i] == word[i].toUpperCase())
            arr.push(i);
    }
    return arr;
};



describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
    });
});