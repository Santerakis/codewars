// Write a small function that returns the values of an array that are not odd.
//
//     All values in the array will be integers. Return the good values in the order they are given.

var noOdds = values => values.filter(x => x % 2 === 0);

function noOdds( values ){
    function isEven(number){
        return number%2 == 0;
    }
    return values.filter(isEven);
}

var noOdds = values => values.filter(x => !(x % 2));

function noOdds( values ){
    // Return all non-odd values
    var goodies = [];
    for(var i=0; i<values.length;i++){
        if(values[i]%2 == 0){
            goodies.push(values[i]);
        }
    }
    return goodies;
}

function noOdds( values ){
    // Return all non-odd values
    return values.filter(function(data){
        return data % 2 === 0
    });
}

function noOdds( values ){
    return values.filter(x => !(x % 2));
}

function noOdds( values ){
    return values.filter(x=>x%2==0)
}

const noOdds = values =>
    values.filter(val => !(val&1));

function noOdds(values) {
    return values.filter(num => num % 2 === 0);
}

const noOdds = function ( values ){ return values.filter(el => el % 2 ===0) }

function noOdds( values ){
    return values.filter(function(n){
        return (n & 1) == 0;
    });
}

const noOdds = values => values.filter(x=>x%2===0)

function noOdds(values) {
    return values.filter(value => value % 2 === 0);
}

function noOdds( values ){
    return values.filter(function(v) { return v % 2 == 0 });
}

const noOdds=vs=>vs.filter(v=>~-(v&1));

function noOdds(values){
    return values.filter(num => Math.abs(num % 2) !== 1);
}


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual( noOdds( [0,1] ), [0] )
        assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
    })
})