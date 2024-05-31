// Task
//
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
// Series:1+14+17+110+113+116+…\mathrm{Series:}\quad 1 + \frac14 + \frac17 + \frac1{10} + \frac1{13} + \frac1{16} + \dotsSeries:1+41​+71​+101​+131​+161​+…
//
// You will need to figure out the rule of the series to complete this.
//     Rules
//
// You need to round the answer to 2 decimal places and return it as String.
//
//     If the given value is 0 then it should return "0.00".
//
//     You will only be given Natural Numbers as arguments.
//
// Examples (Input --> Output)
//
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }
    return s.toFixed(2)
}

function SeriesSum(n) {
    var sum = 0;
    for(var i = 0; i < n; i++) {
        sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
}

function SeriesSum(n)
{
    for(a=0,i=1;i<=n*3;i+=3) a+=1/i;
    return a.toFixed(2);
}

function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}

function SeriesSum(n) {
    return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
}

SeriesSum = n => Array.from(Array(n), (e, i) => 1 / (i * 3 + 1)).reduce((s, e) => s + e, 0).toFixed(2);

const SeriesSum = (n, acc = 0) => {
    if (n === 0) return acc.toFixed(2);
    else return SeriesSum(n - 1, acc + 1/(3*n - 2));
};

function SeriesSum(n)
{
    var dn = 1 + (n-1)*3;
    var sum=0;
    var term;
    for( var i=1; i<=dn; i+=3)
    {
        term = 1/i;
        sum+=term;
    }
    return sum.toFixed(2);
}

function SeriesSum(n)
{
    let sum = 0;
    for(i = 0; i < n; i++) {
        sum += 1 / ( 1 + i * 3);
    }

    return sum.toFixed(2);
}


describe("Sample tests", () => {
    it("n = 1", () => {
        let actual = SeriesSum(1);
        checkReturnValue(actual);
        assert.strictEqual(actual,  "1.00", "n = 1")
    });
    it("n = 2", () => assert.strictEqual(SeriesSum(2),  "1.25", "n = 2"));
    it("n = 3", () => assert.strictEqual(SeriesSum(3),  "1.39", "n = 3"));
    it("n = 4", () => assert.strictEqual(SeriesSum(4),  "1.49", "n = 4"));
});

function checkReturnValue(actual) {
    assert.isDefined(actual, "Your function did not return a value. Did you log it to console instead?");
}
