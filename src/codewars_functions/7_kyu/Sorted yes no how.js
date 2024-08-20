// Complete the method which accepts an array of integers, and returns one of the following:
//
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
//
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
        arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}

const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
        s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
}

function isSortedAndHow(array) {
    let asc = true;
    let des = true;
    for(let i = 1; i < array.length; i++) {
        if(array[i] > array[i-1]) des = false;
        if(array[i] < array[i-1]) asc = false;
    }
    return asc ? 'yes, ascending' : des ? 'yes, descending' : 'no'
}

function isSortedAndHow(array) {
    switch (JSON.stringify(array)) {
        case JSON.stringify(array.sort((a, b) => a - b)): return 'yes, ascending';
        case JSON.stringify(array.sort((a, b) => b - a)): return 'yes, descending';
        default: return 'no';
    }
}

function isSortedAndHow(array) {
    if([...array].sort((a,b)=>a-b).join`` === array.join``) return "yes, ascending";
    if([...array].sort((a,b)=>b-a).join`` === array.join``) return "yes, descending";
    return "no";
}

let isSortedAndHow =a=> a.slice``.sort((a,b)=> a-b)+'' == a+'' ? 'yes, ascending' :
    a.slice``.sort((a,b)=> b-a)+'' == a+'' ? 'yes, descending' : 'no'

const isSortedAndHow = array =>
    array.slice(1).every((val, idx) => val >= array[idx])? `yes, ascending` :
        array.slice(1).every((val, idx) => val <= array[idx])? `yes, descending`: `no`;

function isSortedAndHow(array) {
    if (array.every((num, i, arr) => !i || num >= arr[i - 1])) {
        return 'yes, ascending';
    }
    if (array.every((num, i, arr) => !i || num <= arr[i - 1])) {
        return 'yes, descending';
    }
    return 'no';
}

const isSortedAndHow = array => {
    const obj = {
        ascending: (x, i, arr) => !i || arr[i - 1] <= x,
        descending: (x, i, arr) => !i || arr[i - 1] >= x,
    }
    const direction = array[0] < array[array.length - 1] ? 'ascending' : 'descending'

    return array.every(obj[direction]) ? `yes, ${direction}` : 'no'
}

function isSortedAndHow(array) {
    let ascending = true;
    let descending = true;

    for(let i=1; i<array.length; i++){
        if(array[i]>array[i-1]){
            descending = false
        }else if(array[i]<array[i-1]){
            ascending = false;
        }
    }
    return ascending ? 'yes, ascending': descending ? 'yes, descending' : 'no'
}

function isSortedAndHow(array) {
    const base = array.slice(1);
    if (base.every((n, i) => n >= array[i])) return 'yes, ascending';
    if (base.every((n, i) => n <= array[i])) return 'yes, descending';
    return "no";
}

describe("isSortedAndHow", function() {

    it("[1, 2]", function() {
        Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
    });

    it("[15, 7, 3, -8]", function() {
        Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
    });

    it("[4, 2, 30]", function() {
        Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
    });

});