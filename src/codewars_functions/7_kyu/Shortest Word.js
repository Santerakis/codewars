// Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.
//     Fundamentals

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length < smallest.length){
            smallest = arr[i];
        }
    }
    return smallest.length;
}

const findShort = (s) => s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop()
    .length;

function findShort(s) {
    return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}

function findShort(s){
    var arr = s.split(' ');
    var min = arr[0].length;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length < min) {
            min = arr[i].length;
        }
    }
    return min
}

function findShort(s){
    return s
        .split(' ')
        .map(a => a.length)
        .reduce((a, b) => Math.min(a, b))
}

function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
}


function findShort(s){
    return Math.min(...s.split(/\s/).map((w) => w.length));
}

function findShort(string) {
    var array = string.split(' ');
    var shortest = null;

    for (var i=0, l=array.length; i<l; ++i)
    {
        if (shortest == null || array[i].length < shortest)
            shortest = array[i].length;
    }

    return shortest;
}

const findShort = s => Math.min(...s.split(' ').map(x => x.length));

function findShort(s){
    return Math.min(...s.split(' ').map(x => x.length));
}

const findShort = s => s.split(" ").sort((a,b) => a.length-b.length)[0].length;


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
        assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
        assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
    })
})
