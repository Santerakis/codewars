// Very simple, given an integer or a floating-point number, find its opposite.
//
//     Examples:
//
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    return(-number);
}

const opposite = number => -number;

function opposite(number) {
    return number * (-1);
}

const opposite = n => -n;

function opposite(number) {
    if (number === 0) {
        return 0;
    } else if (number.toString().includes('.') && number > 0) {
        return parseFloat("-" + number, 10);
    } else if (number > 0) {
        return parseInt("-" + number, 10);
    } else if (number < 0 && number.toString().includes('.')) {
        var didget = number.toString().split('-').pop();
        return parseFloat(didget);
    } else {
        var didgets = number.toString().split('-').pop();
        return parseInt(didgets);
    }
}

const opposite = n => n * -1

function opposite(number) {
    return number > 0 ? -number : Math.abs(number);
}

function opposite(n) {return -n}

function opposite(n) {
    return n-n*2;
}

opposite = x => -x

const opposite = number => number*-1;

const opposite = num => -num

function opposite(number) {
    return number/-1;
}

describe('Fixed tests', () => {
    it('Is it a function?', () => {
        assert.strictEqual(typeof opposite, 'function', 'opposite should be a function');
    });
    it('should return -1', () => {
        assert.strictEqual(opposite(1), -1);
    });
    it('should return 0', () => {
        assert.strictEqual(opposite(0), 0);
    });
    it('should return -4.25', () => {
        assert.strictEqual(opposite(4.25), -4.25);
    });
    it('should return -3.3333333', () => {
        assert.strictEqual(opposite(3.3333333), -3.3333333);
    });
    it('should return 12525220.3325', () => {
        assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
    });
    it('should return 5', () => {
        assert.strictEqual(opposite(-5), 5);
    });
});