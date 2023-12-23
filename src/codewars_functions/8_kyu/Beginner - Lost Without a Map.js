// Given an array of integers, return a new array with each value doubled.
//
//     For example:
//
//     [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(n => n * 2);
}

maps = x => x.map(e => e * 2);

function maps(x){
//return x.map(el => el * 2);
    let arr = [];
    for(let i = 0; i < x.length; i++){
        arr.push(x[i] * 2);
    }
    return arr;
}

const maps = arr => arr.map( x => x * 2 )

function maps(x){
    return x.map (num => num * 2)
}

function maps(x){

    var newArr = [];

    x.map(function(y){
        newArr.push(y*2);
    });

    return newArr;
}

maps=x=>x.map(v=>v*2);

function maps(x){
    return x.map(y => y * 2);
}

function maps(x){
    return x.map(el => el * 2);
}

const maps=x=>x.map(x=>x+x)

const maps = x => x.map(i => i * 2);

function maps(x){return x.map(x=>x*2)};

describe("Basic tests", ()=>{
    it("Fixed tests", () => {
        assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
        assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
        assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
    });
});
