// Task
//
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
//     Mind the input validation.
//     Example
//
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
//
// Input validation
//
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// Fundamentals

function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function(a,b) {return a - b;});
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

function sumArray(array) {
    return Array.isArray(array) && array.length > 1
        ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
        : 0
}

const sumArray = (numbers) => (
    numbers && numbers.length > 1
        ? numbers
            .sort((a, b) => a - b)
            .slice(1, -1)
            .reduce((sum, number) => sum + number, 0)
        : 0
);

function sumArray(array) {
    array = array || [];
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0);
}

function sumArray(arr) {
    if(!arr || arr.length <= 2) return 0;

    var min, max, result;
    result = 0;
    min = max = arr[0];

    arr.forEach(function(el){
        result += el;
        min > el ? min = el : max < el ? max = el : el;
    });

    return result - max - min;
}

function sumArray(array) {
    return !array || array.length < 4 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((a, b) => a + b);
}

const sumArray = $ => !$ ? 0 : $.sort((a, b)=> a - b).slice(1,-1).reduce((acc, el)=> acc + el, 0)

it("example tests", ()=>{
    assert.strictEqual( sumArray(null)                     , 0 );
    assert.strictEqual( sumArray([ ])                      , 0 );
    assert.strictEqual( sumArray([ 3 ])                    , 0 );
    assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
    assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
    assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
    assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
    assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
});