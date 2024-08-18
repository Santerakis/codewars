// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

const angle = n => (n - 2) * 180;

function angle(n) {
    return 180*(n-2);
}

function angle(n) {
    return (n - 2) * 180;
}

const angle = n => 180 * (n - 2)

let angle = n => n * 180 - 360;

const angle = angles => angles * 180 - 2 * 180 //this task is for 8kyu :(

function angle(n) {
    return n > 3 ? 180*(n-2) : 60*3;
}

function angle(n) {
    //code here
    return (n - 2) * 180;
}

angle=n=>(n-2)*180

angle = n => 180 * (n - 2);

function angle(n) {
    var total = 0;
    for(var i = 3; i <= n; i++) {
        total += 180;
    }
    return total;
}

//Mohira5810
function angle(n) {
    return 180*(n-2)
}

function angle(n) {
    console.log('dato inicial', (n - 2) * 180);
    return (n - 2) * 180;
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(angle(3), 180);
        assert.strictEqual(angle(4), 360);
    });
})
