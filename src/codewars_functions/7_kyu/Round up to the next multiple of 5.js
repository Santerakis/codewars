// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
//
//     Examples:
//
//     input:    output:
//     0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
//
//     Input may be any positive or negative integer (including 0).
//
// You can assume that all inputs are valid integers.


function roundToNext5(n){
    return Math.ceil(n/5)*5;
}

function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
}

const roundToNext5 = n => Math.ceil(n / 5) * 5;

function roundToNext5(n){
    while(n%5) n++;
    return n;
}

function roundToNext5(n){
    if (n % 5 === 0) {
        return n;
    }
    return roundToNext5(n + 1);
}

function roundToNext5(n){
    if(n % 5 == 0) return n
    n++
    return roundToNext5(n)
}

roundToNext5=a=>Math.ceil(a/5)*5

function roundToNext5(n){
    return n % 5 === 0 ? n : (n < 0 ? n - (n % 5) : n - (n % 5) + 5);
}

roundToNext5=n=>n%5!==0?roundToNext5(n+1):n

const roundToNext5 = R = n => n % 5 ? R(++n) : n;

function roundToNext5(n){
    while ( n % 5 != 0 ) {
        n++
    }
    return n
}

// loop while
function roundToNext5(n){
    while (true){
        if (n % 5 == 0) return n;
        n += 1
    }
}



describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        [[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]].forEach(
            ([x,exp])=> assert.strictEqual(roundToNext5(x), exp, `Input: ${x}`)
        );
    })
});
