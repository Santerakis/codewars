// Challenge:
//
//     Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//
//     Example:
//
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//
//     Addendum:
//
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
//
//     http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
//         Arrays
// Sorting
// Fundamentals

function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
}

const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);

function flattenAndSort(array) {
    var newArray = [];
    for(var i =0;i<array.length;i++)
    {
        for(var j=0;j<array[i].length;j++)
        {
            newArray.push(array[i][j]);
        }
    }

    return newArray.sort((a,b) =>  a-b);
}

function flattenAndSort(array) {
    return array
        .reduce((result, current) => [...result, ...current],[])
        .sort((a, b) => a - b)
        ;
}

function flattenAndSort(array) {
    return array.flat().sort((a,b)=>a-b);
}

const flattenAndSort = array => [].concat(...array).sort((a,b)=>a-b)

const flattenAndSort = $ => $.toString().split(',').filter(e => e).map(Number).sort((a,b)=>a-b)

const flattenAndSort = array => array
    .reduce((a, c) => [...a, ...c], [])
    .sort((a, b) => a - b);

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return array.flat().sort((b,c) => b - c);
}


function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return array.flat().sort((a,b) => a - b)
}


const flattenAndSort = (array) => {
    return array.reduce((e, i) => e.concat(i), []).sort((a, b) => a - b)
}


describe("Example test cases", function() {
    it("Should pass example tests", function() {
        assert.deepEqual(flattenAndSort([]), []);
        assert.deepEqual(flattenAndSort([[], []]), []);
        assert.deepEqual(flattenAndSort([[], [1]]), [1]);
        assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
    });
});