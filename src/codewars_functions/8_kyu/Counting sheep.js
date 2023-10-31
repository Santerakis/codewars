// Description:
//
//     Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
//     [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]
//
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;

    for(var i = 0; i < arrayOfSheep.length; i++)
        if(arrayOfSheep[i] == true)
            num++;

    return num;
}

function countSheeps(arr) {
    return arr.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
    var count = 0;

    arrayOfSheep.forEach( function (sheep) {
        if (sheep)
            count++;
    });

    return count;
}

let countSheeps = x => x.filter( s => s ).length;

function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
}

const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;

function countSheeps(arrayOfSheep) {
    var num = 0;
    for(i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i]) {
            num += 1;
        }
    }
    return num;
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce(function(result, current) {
        if (current) result++;
        return result;
    }, 0);
}

function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => sheep ? count++ : count)
    return count
}

function countSheeps(arrayOfSheep) {
    var count = 0;
    arrayOfSheep.map(function(current){
        if(current){
            count += 1;
        }
    });
    return count;
}

describe('Sample Tests', function() {
    const tests = [
        [[], 0],
        [[undefined], 0],
        [[null], 0],
        [[false], 0],
        [[true], 1],
        [[undefined,null,false,true], 1],
        [[undefined,null,false,true,true,false,null,undefined], 2],
        [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17],
    ];

    for (let [sheep, expected] of tests) {
        it(`${stringify(sheep)}`, function() {
            assert.strictEqual(countSheeps(sheep), expected);
        });
    }

    function stringify(sheep) {
        return `[${sheep.map(String).join(',')}]`;
    }
});
