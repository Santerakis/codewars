// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
//     P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}

function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a,b) => a+b,0)
}

function arrayPlusArray(arr1, arr2) {
    var suma=0;
    for(var i=0;i<arr1.length;i++)
        suma+=arr1[i];
    for(var i=0;i<arr2.length;i++)
        suma+=arr2[i];
    return suma;
}

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
}

function arrayPlusArray() {
    var res = 0;

    for (var i = 0 ; i < arguments.length; i+=1) {

        for (var j = 0; j < arguments[i].length ; j +=1) {

            res+=arguments[i][j];
        }
    }
    return res;
}

var arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b)=> a + b)

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
        assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
        assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
        assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
    })
})