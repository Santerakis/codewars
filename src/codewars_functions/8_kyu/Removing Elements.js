// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//     Example:
//
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
        return index % 2 === 0;
    });
}

function removeEveryOther(arr){
    var newArr=[];
    for (var i = 0; i < arr.length; i+=2){
        newArr.push(arr[i]);
    }
    return newArr;
}

const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));

function removeEveryOther(arr){
    //your code here
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
}

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);

function removeEveryOther(arr){
    return arr.filter((_, i) => i % 2 === 0 )
}

function removeEveryOther(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr.splice(i, 1);
    }
    return arr
}

function removeEveryOther(arr){
    return arr.filter((_,i)=>i%2==0)
}

function removeEveryOther(arr){
    return arr.filter((a, i) => !(i % 2));
}

function removeEveryOther(arr){
    return arr.filter(function(x,y){
        return y%2==0;
    });
}

const removeEveryOther = arr =>
    arr.filter((_, idx) => !(idx & 1));

function removeEveryOther(arr){
    return arr.filter((v, i) => !(i & 1));
}

const removeEveryOther = arr => arr.filter((_, idx) => idx % 2 == 0)

function removeEveryOther(arr){
    arr.forEach((item, index) => {
        arr.splice(index + 1, 1)
    })
    return arr
}

removeEveryOther = a =>
{
    return a.filter((e,i)=> !(i%2))
}

function removeEveryOther(arr){
    return arr.filter((item,index) => index % 2 === 0)
}

const removeEveryOther = (arr) => arr.filter((_,i) => i % 2 === 0);

function removeEveryOther(arr){
    let result = [];
    for(let i=0; i<arr.length;i+=2) {
        result.push(arr[i]);
    };

    return result;
}

function removeEveryOther(arr){
    let res = [];
    for (let i in arr) {
        if (i % 2 == 0) {
            res.push(arr[i]);
        }
    }
    return res;
}

const removeEveryOther = (arr) => arr.filter((item, index) => index % 2 === 0);

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
        assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
        assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
        assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
    })
});