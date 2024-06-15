// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
//
//     Square all numbers k (0 <= k <= n) between 0 and n.
//
//     Count the numbers of digits d used in the writing of all the k**2.
//
// Implement the function taking n and d as parameters and returning this count.
//     Examples:
//
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
//
// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
//     1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
//
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
    var res=0;
    for (var g=0;g<=n;g++){
        var square=(g*g+"").split("");
        square.forEach((s)=>s==d?res++:null)
    }return res;
}

function nbDig(n, d) {
    var o = '';
    for(var i = 0; i <= n; i++){
        o += Math.pow(i, 2);
    }
    return o.split(d).length-1
}

nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;

// crazy condition
function nbDig(n, d) {
    let count = '';
    const re = RegExp(d, 'g');
    for (let i = 0; i <= n; i++){
        count += i**2;
    }
    return count.match(re).length;
}

const nbDig = (n, d) => {
    let re = new RegExp(d, 'g');
    return Array(...Array(n + 1))
        .reduce((s, v, i) => s + ((i * i + '').match(re) || []).length, 0);
}

function nbDig(n, d) {
    let totalOfDigit = 0;

    for(let i = 0; i <= n; i++) {
        totalOfDigit += (i*i).toString().split('').filter(n => n == d).length;
    }

    return totalOfDigit;
}

function nbDig(n, d) {
    var squares = '', reg = new RegExp(d, 'g');
    for (var i = 0; i <= n; i++) { squares += (i * i); }
    return squares.match(reg).length;
}

function nbDig(n, d) {
    return [...Array(n+1).keys()].map((i) => {
        return i * i;
    })
        .join('')
        .split('')
        .filter((i) => {
            return i == d;
        }).length;
}



describe("nbDig", () => {
    it("Basic tests", () => {
        assert.strictEqual(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
        assert.strictEqual(nbDig(11011, 2),  9481, "n = 11011, d = 2");
        assert.strictEqual(nbDig(12224, 8),  7733, "n = 12224, d = 8");
        assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");
    });
});