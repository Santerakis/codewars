// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//     Note: a and b are not ordered!
//     Examples (a, b) --> output (explanation)
//
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//
// Your function should only return a number, not the explanation about how you get that number.

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

function GetSum(a,b)
{
    return (Math.abs(a - b) + 1) * (a+b) / 2;
}

function GetSum( a,b )
{
    if (a == b) return a;
    else if (a < b) return a + GetSum(a+1, b);
    else return a + GetSum(a-1,b);
}

function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
}

function GetSum( a,b )
{
    tmp = 0;

    if(a < b)
        while(a <= b) tmp += a++;
    else
        while(a >= b) tmp += a--;

    return tmp;
}

function GetSum( a,b )
{
//if both a and b are equal return a
    if(a===b){
        return a;
    }
    var result = 0;

    var x = a, y = b;
    // check the larger and smaller numbers and assign them to x and y
    if(a > b) {
        x = b, y = a;
    }
    //in a loop add the numbers from the smaller one until it reaches the larger number
    for(var i = x; i <=y; i++ ) {
        result += i;
    }
    return result;

}

function GetSum(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}

function getSum( a, b ){
    return Array.from({length: b >= a ? b-a+1 : a-b+1}, (_, i)=> b >= a ? i+a : i+b).reduce((a, b)=> a + b, 0)
}

GetSum = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;

function GetSum(a, b) {
    return a > b ? GetSum(b, a) : (b - a + 1) * (b + a) / 2;
}

const GetSum= (a, b, x=Math.min(a,b), y=Math.max(a,b)) => (y-x+1)*(x+y)/2

function GetSum( a,b )
{
    var sum=0;
    while(a!== b){
        sum+= a<b?a++:b++;
    }
    return sum+a;
}

function GetSum( a, b )
{
    if( a < b ){ return loop( a, b ); }
    if( a > b ){ return loop( b, a ); }
    return a;
}

function loop( i, j ){
    var total = 0;
    for( i ; i <= j ; i++ ){
        total += i;
    }
    return total;
}

const range = (start, end) =>
    start === end
        ? [ end ]
        : [ start, ...range(start + 1, end) ]

const sum = (a, b) => a + b

function GetSum( a,b )
{
    return range(Math.min(a, b), Math.max(a, b)).reduce(sum, 0)
}

function GetSum( a,b )
{
    if (a == b) {
        return a;
    }
    else if (a < b) {
        lower = a;
        higher = b;
    } else {
        lower = b;
        higher = a;
    }
    var sum = 0;
    for (var x = lower; x <= higher; x++) {
        sum = sum + x;
    }
    return sum;
}

function GetSum( a,b )
{
    //Good luck!
    return (a+b) * (Math.max(a,b)-Math.min(a,b)+1) /2
}

const GetSum = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;

function GetSum( a,b )
{
    let min = Math.min(a, b), max = Math.max(a, b);
    return (a === b) ? a : ((max - min) + 1 ) * (min + max) / 2;
}

function GetSum(a, b)
{
    if(a === b) return a;
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return min + GetSum(min + 1, max);

}

function GetSum( a,b )
{
    // arithmetic series formula
    return ((Math.max(a,b) - Math.min(a,b) + 1) * (Math.max(a,b) + Math.min(a,b)) / 2);
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(getSum(0,-1), -1);
        assert.strictEqual(getSum(0, 1),  1);
        assert.strictEqual(getSum(2, 2),  2);
    })
});