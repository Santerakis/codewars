// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
//
//     In honor of my grandfather's memory we will write a function using his formula!
//
// Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.
//
//     Example
//
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
//
// Note: the result should be rounded down to the nearest integer.
//
//     Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}

const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let sum = [...arguments]
        .map(x=>x**2)
        .reduce((sum,v)=>sum+v,0)
    return Math.floor( Math.sqrt(sum)/2 )
}

function predictAge(...n){
    return (Math.hypot(...n)/2)>>0
}

function predictAge(...a){
    return ~~(a.reduce((a,x)=>a+x*x,0)**0.5/2)
}

const predictAge = (...args) =>
    Math.hypot(...args) >> 1;

let predictAge =(...a)=> Math.hypot(...a)>>1

const predictAge = (...a) => Math.floor(Math.sqrt(a.reduce((s, n) => s + n * n, 0)) / 2);

function predictAge(...age){
    var sum = 0
    for(var i = 0;i<age.length;i++){
        sum = (age[i] * age[i]) + sum
    }
    return Math.floor( Math.sqrt(sum) / 2)
}

const predictAge=(...a)=>Math.hypot(...a)/2>>0

const predictAge = (...gpAges) => {
    // Don't forget to account for incest
    if (gpAges.length > 8) throw new Error("That's too many great grandparents!");
    if (gpAges.length < 2) throw new Error("That's too few great grandparents!");
    return Math.trunc(Math.sqrt(gpAges.map(age => age ** 2).reduce((a, b) => a + b)) / 2)
}

function predictAge(...ages){
    let sum = 0;
    for (let i in ages){
        sum += ages[i] ** 2
    }
    return Math.sqrt(sum) / 2 | 0;
}


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(predictAge(65,60,75,55,60,63,64,45), 86);
    });
})
