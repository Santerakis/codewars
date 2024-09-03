// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
//
//     Assume that the input n will always be a positive integer.
//
//     Examples: (Input --> output)
//
// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
//

function sumCubes(n){
    if (n == 1) {
        return n**3;
    } else {
        return n**3 + sumCubes(n - 1);
    }
}

function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
}

const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);

function sumCubes(n){
    let sum = 0;
    for (let i = 0; i <= n; ++i)
    {
        sum += Math.pow(i, 3);
    }
    return sum;
}

const sumCubes = n =>
    (n * ++n / 2) ** 2;

sumCubes=n=>n<2?1:n**3+sumCubes(n-1)

const sumCubes = (n, total = 0, i = 1) => i > n ? total : sumCubes(n, total += Math.pow(i, 3), ++i)

const sumCubes = ( n ) => Array.from({length: n}, (_,i)=> i+1).map(el => el**3).reduce((a, b)=> a+b, 0)

function sumCubes(n){
    let sum = 0;
    while(n > 0) {
        sum += n**3;
        n--;
    }
    return sum;
}

function sumCubes(n){
    var sum=0;
    for (var i=1; i<=n; ++i)
        sum+=i*i*i;
    return sum;
}

function sumCubes(n){
    let cubes = 0;
    for ( let i = 1; i <= n; i++) {
        cubes += i ** 3;
    }
    return cubes;
}

describe("Sum of Cubes", () => {
    it("Fixed tests", () => {
        _.shuffle( [
            [1, 1], [2, 9], [3, 36], [4, 100],
            [10, 3025], [123, 58155876]
        ] ).forEach(([n,exp]) => assert.strictEqual(sumCubes(n), exp))
    });
});
