// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
//
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
//
//     For example (Input --> Output):
//
// [1, 2, 10, 8] --> [8, 10]
//     [1, 5, 87, 45, 8, 8] --> [45, 87]
//     [1, 3, 10, 0]) --> [3, 10]
//

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
}

// return the two oldest/oldest ages within the array of ages passed in.
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    var x = ages.sort(function(i,j) { return j-i;});
    return [x[1],x[0]];
}

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.slice(0).sort((a, b) => a - b).slice(-2);
}

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort((a,b)=>a-b).slice(-2);
}

function twoOldestAges(ages) {
    return ages.sort((a, b) => a - b).slice(-2);
}

function twoOldestAges(ages){
    let s = ages.sort((a,b) => b-a);
    return [s[1],s[0]];
}

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(array){
    return array.sort(function(a,b) {return a-b}).slice(array.length-2);
}

// I don't understood this is task for 8kyu
const twoOldestAges = (ages, sort = ages.sort((a, b)=> a-b)) => ages.slice(-2)

// return the two oldest/oldest ages within the array of ages passed in.
const twoOldestAges = (ages) => [...new Set(ages)].sort((a, b) => a - b).slice(-2)

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    var max = 0;
    var secMax = 0;

    for (i = 0; i<ages.length ; i++){
        if(ages[i] > max){
            max = ages[i];
        }else if(ages[i] > secMax){
            secMax = ages[i];
        }
    }
    return [secMax, max];
}

function twoOldestAges(ages){
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    ages.sort(compareNumeric);
    age = [ages[ages.length - 2], ages[ages.length - 1]];
    return age;
}
twoOldestAges([ 2, 1, 10, 8, 456, 50 ]);


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {

        let results1 = twoOldestAges([1,5,87,45,8,8]);
        let results2 = twoOldestAges([6,5,83,5,3,18]);

        assert.strictEqual(results1[0], 45, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
        assert.strictEqual(results1[1],87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');

        assert.strictEqual(results2[0], 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
        assert.strictEqual(results2[1], 83, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
    })
})
