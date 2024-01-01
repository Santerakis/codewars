// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
//
// You can assume that all values are integers. Do not mutate the input array/list.

const invert = array => array.map(num => -num);

function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}

function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        newArr.push(-array[i]);
    }
    return newArr;
}

function invert(array) {
    return array.map(i => 0 - i);
}

function invert(array) {
    return array.map(e=> e*-1);
}

function invert(array) {
    return array.map(el => -el);
}

function invert(array) {
    for(let i=0; i<array.length; i++){
        array[i] *= -1;
    }
    return array;
}

function invert(array) {
    return array.map(x => -x);
}

function invert(array) {
    return array.map(n => n && -n)
}

invert = a => a.map(n => 0-n)

function invert(array) {
    let newAry = [];
    for (let i = 0; i < array.length; i++) {
        if ( array[i] === 0) {
            newAry.push(array[i]);
        } else {
            newAry.push(array[i] * -1)
        }
    }
    return newAry;
}

function invert(array) {
    return array.map(x => x * (-1));
}

const invert = a => a.map(x=>x!==0?-x:x)

function invert(array) {
    return array.map(v => ~v+1);
}

invert=a=>a.map(n=>~~-n)

function invert(array) {
    return  array.map(item => item*(-1))
}

function invert(array) {
    return array.map(a=> a*-1);
}

invert = array => array.map(x => -x);

function invert(array) {
    return array.map(i=>-i);
}

function invert(array) {
    return array.map(item => -item);
}

function invert(array) {
    return array.map(num => num * -1);
}

function invert(array) {
    return array.map(function(item) {
        return ~item + 1;
    });
}

function invert(array) {
    return array.map(n => -n) ;
}

function invert(array) {
    return array.map(
        function(arr) {
            if (arr==0) { return arr; }
            else { return arr*(-1); }
        }
    ) ;

}

const invert = a => a.map(v => -v)

const invert = (array) => array.map( (el) => -el );

function invert(array) {
    return array.map(a => -a);
}

function invert(array) {
    return array.map(e => -e);
}

describe("Invert array values",() => {
    const norm = arr => arr.map(n => n === -0 ? 0 : n);
    it("Basic Tests", () => {
        assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
        assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
        assert.deepEqual(norm(invert([])), []);
        assert.deepEqual(norm(invert([0])), [0]);
    });
});