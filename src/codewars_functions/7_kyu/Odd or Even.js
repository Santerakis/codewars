// Task:
//
//     Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
// Examples:
//
//     Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"
//
// Have fun!

function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
    {result+=array[i];}
    if (result%2 == 0)
    {return "even";}
    else{return "odd";}
}

const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";

const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';

// reduce()
const oddOrEven = (arr) => arr.reduce((a,i) => a + i, 0) % 2 ? 'odd' : 'even'

function oddOrEven(array) {
    if(array.length == 0){
        return 'even'
    }
    var sum = array.reduce(add, 0)
    function add(x, y){
        return x + y
    }

    if(sum % 2 == 0){return 'even'}
    else{return 'odd'}
}

const oddOrEven=arr=>["even","odd"][Math.abs(arr.reduce((a,b)=>a+b,0))%2];

const oddOrEven = (a) => a.reduce((x, n) => x += n, 0) % 2 === 0 ? 'even' : 'odd';

function oddOrEven(array){
    return array.reduce((a,b) => a+b,0) % 2 ? 'odd' : 'even';
}

const sum  = (a, b) => a + b;
const oddOrEven = arr => ['even', 'odd'][arr.reduce(sum, 0) & 1];

const oddOrEven = array=>
    array.filter(val=> val&1).length&1 ? `odd` : `even`;




describe('Fixed tests', () => {
    it('Edge tests', () => {
        assert.strictEqual(oddOrEven([0]), 'even')
        assert.strictEqual(oddOrEven([1]), 'odd')
        assert.strictEqual(oddOrEven([]), 'even')
    });

    it('Even tests', () => {
        assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
        assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
        assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
    });

    it('Negative Even tests', () => {
        assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
        assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
        assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
    });

    it('Odd tests', () => {
        assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
        assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
        assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
    });

    it('Negative Odd tests', () => {
        assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
        assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
        assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
    });
});