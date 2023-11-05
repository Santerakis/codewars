// Nathan loves cycling.
//
//     Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//
//     You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//
//     For example:
//
//     time = 3 ----> litres = 1
//
// time = 6.7---> litres = 3
//
// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time * 0.5);
}

function litres(time) {
    return Math.floor(time/2);
}

const litres = time => Math.floor(time * 0.5);

litres = t => ~~(t / 2);

function litres(time) {
    return parseInt(time/2);
}

function litres(time) {
    var lit = time * 0.5;
    return Math.floor(lit);
}

const litres = time => Math.floor(time / 2);

function litres(time) {
    return (time / 2) | 0;
}

var litres = (a) => Math.floor(a * 0.5)


describe('Fixed tests', () => {
    it('Tests', () => {
        assert.strictEqual(litres(2), 1, 'should return 1 litre');
        assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
        assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
        assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
        assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
        assert.strictEqual(litres(1787), 893, 'should return 893 litres');
        assert.strictEqual(litres(0), 0, 'should return 0 litres');
    });
});
