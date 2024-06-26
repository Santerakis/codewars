// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(smallEnough([66, 101], 200), true);
//         assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
//         assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
//         assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
//     })
// })



function smallEnough(a, limit){
    return Math.max(...a) <= limit
}

smallEnough = (a, l) => a.every(e => e <= l)

function smallEnough(a, limit){
    return a.every(x => x <= limit);
}

function smallEnough(a, limit){
    for(var i of a){
        if(i > limit)
            return false;
    }
    return true;
}

function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++){
        if (a[i] > limit) {
            return false
        }
    }
    return true

}

function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}

const smallEnough = ($, limit) => $.every(el => el <= limit)

function smallEnough(a, limit) {
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] <= limit) {
            counter++;
        };
    };
    if (counter === a.length) {
        return true;
    } else {
        return false;
    };
};

const smallEnough=(a,l)=>a.every(b=>b<=l);

const smallEnough = (a, limit) => Math.max(...a) <= limit;

const smallEnough = (a, limit) =>
    a.every(val => val <= limit);

const smallEnough = (array, limit) => !array.some(n => n > limit);

function smallEnough(a, limit) {
    return a.every(number => number <= limit);
}

const smallEnough = (a, limit) => a.every(e => e <= limit)