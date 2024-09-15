// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
//
//     a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
//
//     You may assume the input is always valid.
//     Examples
//
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
//
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
}

function isPowerOfTwo(n){
    if(n == 1)
        return true
    if(n < 1)
        return false
    return isPowerOfTwo(n / 2)
}

function isPowerOfTwo(n) {
    return n === 0 ? false : (n & (n - 1)) == 0
}

const isPowerOfTwo = n => Number.isInteger(Math.log2(n)) ;

function isPowerOfTwo(n){
    return Math.log2(n) % 1 === 0;
}

function isPowerOfTwo(n){
    let i = 0;
    while(2**i < n){i++}
    return (2**i == n) ? true : false;
}

function isPowerOfTwo(n){
    if(n<2) return false;
    if(n==2) return true;
    if(n>2) return isPowerOfTwo(n/2);
}

const isPowerOfTwo = (n) => [...Array(100).keys()].map(el=> 2**el).includes(n)

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(isPowerOfTwo(2), true)
        Test.assertEquals(isPowerOfTwo(4096), true)
        Test.assertEquals(isPowerOfTwo(5), false)
    });
});
