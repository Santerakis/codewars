// Are the numbers in order?
//
//     In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
//
//     For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.
//
//     Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
//
//     For example:
//
//     inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
//
// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.


function inAscOrder(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

function inAscOrder(arr) {
    return arr.every((_,i)=>i==0||arr[i]>arr[i-1]);
}

const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');

function inAscOrder(arr) {
    return arr.slice(1).every((x, i) => x >= arr[i]);
}

const inAscOrder = a => a
    .slice()
    .sort((x, y) => x - y)
    .every((e, i) => e === a[i]);

const inAscOrder = (arr) => arr.length === 1 ||
    arr.slice(1).map((el,i) => el > arr[i]).every(e=> e === true) || false

function inAscOrder(arr) {
    for (let i=1; i<arr.length; ++i)
        if (arr[i] < arr[i-1]) return false;

    return true;
}

var inAscOrder=a=>a.every((n,i)=>!i||n>a[i-1])

function inAscOrder(arr) {
    const sortedArr = [...arr].sort(function(a, b){return a-b});
    return JSON.stringify(arr) === JSON.stringify(sortedArr);
}

function inAscOrder(arr) {
    return arr.length > 1
        ? arr[0] < arr[1] && inAscOrder(arr.slice(1))
        : true;
}

const inAscOrder = arr =>
    arr.every((val, idx) => !idx || val > arr[--idx]);

const inAscOrder = arr => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {return false;}
    }
    return true;
};

function inAscOrder(arr) {
    // Code your algorithm here :)
    return arr.toString() ==  [...arr].sort((a,b) => a - b).toString()

}


describe("Description Examples", () => {
    it("Should pass description examples", () => {
        assert.strictEqual(inAscOrder([1, 2, 4, 7, 19]), true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
        assert.strictEqual(inAscOrder([1, 2, 3, 4, 5]), true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
        assert.strictEqual(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
        assert.strictEqual(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');
    });
});