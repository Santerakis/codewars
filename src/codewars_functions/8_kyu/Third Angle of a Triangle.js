// You are given two interior angles (in degrees) of a triangle.
//
//     Write a function to return the 3rd.
//
//     Note: only positive integers will be tested.
//
//     https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    return 180-(a+b);
}

const otherAngle = (a, b) => 180 - a - b

function otherAngle(a, b) {
    if(a<0 || b<0) //ensure no negative angles
        return 0;
    if((a+b)>=180) //ensure 2 angles don't sum up to 180
        return 0;
    return 180 - a - b; //return missing angle
}

function otherAngle(a, b) {
    return 180 - a - b;
}

const otherAngle = (a, b) => 180 - (a + b);

otherAngle=(a,b)=>180-a-b

function otherAngle(a, b) {
    if ((a > 0) && (b>0) && ((a + b) < 180)) {
        return 180 - a - b
    } else {
        throw new Error ('ты ввел хуйню');
    }
}

function otherAngle(a, b) {
    var c = a + b;
    var z = 180 - c;

    return z;
}

otherAngle=(角,度)=>180-角-度

function otherAngle(a, b) {
    return 180 - (a|0) - (b|0);
}

function otherAngle(a, b) {
    var suma = 180 - (a + b);
    return suma;
}

let otherAngle =(a='📐', b='❓')=> ('❗', 180-a-b)

function otherAngle(a, b) {
    let c = 180 - (a + b);
    return c;
}

var otherAngle=(a,b)=>180-a-b

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(otherAngle(30, 60), 90);
        assert.strictEqual(otherAngle(60, 60), 60);
        assert.strictEqual(otherAngle(43, 78), 59);
        assert.strictEqual(otherAngle(10, 20), 150);
    });
});