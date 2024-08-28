// Return an array containing the numbers from 1 to N, where N is the parametered value.
//
//     Replace certain values however if any of the following conditions are met:
//
//     If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
//
// N will never be less than 1.
//
// Method calling example:
//
//     fizzbuzz(3) -->  [1, 2, "Fizz"]

var fizzify = fizzbuzz = function(n)
{
    return Array.apply(null, new Array(n)).map(function(e, i){
        return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
    });
}

fizzify = fizzbuzz;
function fizzbuzz(n) {
    return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
}

function fizzbuzz(n) {
    var out = [];
    for(var i = 1; i <= n; i++) {
        var res = '';
        if(i % 3 == 0) res += 'Fizz';
        if(i % 5 == 0) res += 'Buzz';
        out.push(res.length == 0 ? i : res);
    }
    return out;
}
var fizzify = fizzbuzz;

const fizzbuzz = (n)=>
    Array.from({length: n}, (_,i)=> i+1)
        .map( el=> el % 3 === 0  && el % 5 === 0 ? 'FizzBuzz' :
            el % 3 === 0 ? 'Fizz' : el % 5 === 0 ? 'Buzz' : el )

function fizzbuzz(n){
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz")
        }else if(i % 3 === 0) {
            arr.push("Fizz")
        }
        else if(i % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(i)
        }
    } return arr
}

function fizzbuzz(n){
    var arr = [],Fizz,Buzz,i;
    for(i=1;i<=n;i++){
        Fizz = i%3 == 0 ? 'Fizz' : '';
        Buzz = i%5 == 0 ? 'Buzz' : '';
        arr.push(Fizz || Buzz ? Fizz+Buzz : i);
    }
    return arr;
}
var fizzify = fizzbuzz;

const fizzbuzz = n => Array(n).fill(1).map((x,y)=>x+y).map(n=>(n%3?'':'Fizz')+(n%5?'':'Buzz')||n);

function fizzbuzz(n)
{
    let arr = [];
    for (let i = n; i > 0; i--) {
        i%3 === 0 && i%5 === 0 ? arr.unshift('FizzBuzz') :
            i%3 === 0 ? arr.unshift('Fizz') :
                i%5 === 0 ? arr.unshift('Buzz') : arr.unshift(i);
    }
    return arr;
}

function fizzbuzz(n) {
    return [...Array(n)].map(function(_, i) {
        i++;
        if (i % 15 === 0) return "FizzBuzz";
        if (i % 3 === 0) return "Fizz";
        if (i % 5 === 0) return "Buzz";
        return i;
    });
}


describe('Fizzbuzz', function() {
    it('Should fizzify 10 numbers correctly', function() {
        var expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
        Test.assertEquals(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected) , 'Fails with 10 numbers!');
    });
});