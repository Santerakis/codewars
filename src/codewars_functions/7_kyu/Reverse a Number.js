// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
//
// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
//     Examples
//
// 123 ->  321
// -456 -> -654
// 1000 ->    1
//



describe("Reverse a Number", () =>{
    it("Fixed Tests", () => {
        assert.strictEqual(reverseNumber(123), 321)
        assert.strictEqual(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
        assert.strictEqual(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
        assert.strictEqual(reverseNumber(4321234), 4321234)
        assert.strictEqual(reverseNumber(5), 5)
        assert.strictEqual(reverseNumber(0), 0)
        assert.strictEqual(reverseNumber(98989898), 89898989)
    });
});


function reverseNumber(n) {
    let isNegative = n < 0;
    let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
    let result = Number(reverseAsString);

    return isNegative ? -result : result;
}

reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')

function reverseNumber(n) {
    return Math.sign(n) * Math.abs(n)
        .toString()
        .split``
        .reverse()
        .join``;
}

function reverseNumber(n) {
    let x = Math.abs(n)
    let y = 0
    while (x > 0) {
        y = y * 10 + (x % 10)
        x = Math.floor(x / 10)
    }
    return Math.sign(n) * y
}

const reverseNumber = ( $ ) => (parseInt( `${$}`.match(/\w/g).reverse().join('') ) )*( $ < 0 ? -1 : 1)

function reverseNumber(n) {
    return +[...(""+Math.abs(n))].reverse().join("")*(n<0 ? -1:1);
}