// Input >> Output Examples
//
// minSum({5,4,2,3}) ==> return (22)
//
// Explanation:
//
//     The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
//
// minSum({12,6,10,26,3,24}) ==> return (342)
//
// Explanation:
//
//     The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
//
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
//
// Explanation:
//
//     The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74


function minSum(arr) {
    return arr.sort( (a,b) => a-b )
        .slice(0, arr.length/2)
        .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}

const minSum = arr =>
    arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

function minSum(arr) {
    arr.sort((x,y)=>x-y)
    s=0
    while(arr.length)s+=arr.pop()*arr.shift()
    return s
}

function minSum(arr) {
    var res=0;
    arr = arr.sort((a,b)=>a-b);

    while(arr.length){
        res += arr.pop()*arr.shift();
    }

    return res
}

function minSum(arr) {
    arr = arr.sort(function (a, b) {return a - b});
    let i = 0;
    let j = arr.length - 1;
    let sum = 0;
    while (i < j ) {
        sum += arr[i] * arr[j];
        i++;
        j--;
    }
    return sum;
}

function minSum(arr) {
    let sum = 0;
    let array = [...arr].sort((a, b) => a - b);
    while (array.length) sum += array.pop() * array.shift();
    return sum;
}

function minSum(arr) {
    const l = arr.length;
    const sorted = arr.sort((a, b) => b - a);
    const max = sorted.slice(0, l/2);
    const min = sorted.slice(l/2, l).reverse();

    return max.reduce((sum, el, i) => sum + el * min[i], 0);
}

minSum=a=>(a=a.slice().sort((a,b)=>a-b)).reduce((x,y,i)=>x+(y*a[a.length-1-i]),0)/2



const Test = require('@codewars/test-compat');
describe("Basic Tests", function(){
    it("should return the minimum sum", function(){
        Test.assertEquals(minSum([5,4,2,3]), 22);
        Test.assertEquals(minSum([12,6,10,26,3,24]), 342);
        Test.assertEquals(minSum([9,2,8,7,5,4,0,6]), 74);
    });
});