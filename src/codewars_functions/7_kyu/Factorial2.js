// Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial

const factorial = n => n ? factorial(n - 1) * n : 1;

function factorial(n){
    let answer = 1;

    while (n > 0) {
        answer *= n;
        n--;
    }
    return answer;
}

function factorial(n){
    return n ? n * factorial(n-1) : 1;
}

function factorial(n){
    let sum = 1;
    for (let i = 1; i <= n; i++){
        sum = sum * i;
    }
    return sum;
}

const factorial=n=>n?n*factorial(n-1):1;

function factorial(n){
    if ( n === 0 ) return 1
    return Array.from({length: n}, (_, i)=> i+1).reduce((a, b)=> a * b, 1)
}

const factorial = n => n > 1 ? n * factorial(n - 1) : 1

function factorial(n){
    return n > 1 ? n * factorial(n-1) : 1;
}

function factorial(n){
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function factorial(n) {
    for (var acc = 1; n > 0; acc *= n, n--);
    return acc
}

function factorial(n){
    var r = 1
    while (n > 1) r *= n--
    return r
}

const factorial = n => n < 2 ? 1 : n * factorial(n-1)



describe("Basic tests",() =>{
    Test.assertEquals(factorial(0), 1);
    Test.assertEquals(factorial(1), 1);
    Test.assertEquals(factorial(4), 24);
    Test.assertEquals(factorial(7), 5040);
    Test.assertEquals(factorial(17), 355687428096000);
})