// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//
//     For example, if this array were passed as an argument:
//
//     ["Telescopes", "Glasses", "Eyes", "Monocles"]
//
// Your function would return the following array:
//
//     ["Eyes", "Glasses", "Monocles", "Telescopes"]
//
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
};

let sortByLength = arr => arr.sort((a,b) => a.length - b.length);

const sortByLength=array=>array.sort((a,b)=>a.length-b.length)

function sortByLength(array) {
    return array.slice().sort((a, b) => a.length - b.length);
}

function sortByLength (array) {
    return array.sort((x, y) => x.length - y.length);
};

function sortByLength (array) {
    let sort = array.sort(function(a, b) {
        return a.length - b.length;
    });
    return array;
};

function sortByLength(array) {
    let sorted = [];

    for (let i = 0; true; i++) {
        for (let j = 0; j < array.length; j++) {
            let string = array[j];

            if (string.length === i) {
                sorted.push(string);
            }

            if (sorted.length === array.length) {
                return sorted;
            }
        }
    }
}

function sortByLength (array) {
    return array.sort((a,b) => {
        return a.length - b.length     })
};

function sortByLength (arr) {
    return arr.sort(function(a, b){
        return a.length - b.length
    })
}

function sortByLength(array) {
    let shortestWord = array.sort(function(a,z) {
        return a.length - z.length;
    });
    return shortestWord;
};

function sortByLength (array) {
    return array.sort(function(a,b){
        return a.length - b.length;
    });
};

const sortByLength = arr => arr.sort((a, b)=>a.length-b.length);


describe("Example tests",function(){
    it("Test 1",function(){
        Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
    });
    it("Test 2",function(){
        Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
    });
    it("Test 3",function(){
        Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
    });
});