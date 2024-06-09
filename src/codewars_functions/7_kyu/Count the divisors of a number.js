// Count the number of divisors of a positive integer n.
//
//     Random tests go up to n = 500000.
// Examples (input --> output)
//
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
//
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


function getDivisorsCnt(n){
    var num=0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
}

function getDivisorsCnt(n) {
    let counter = 0;

    if (n % Math.sqrt(n) == 0) {
        counter++;
    }

    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            counter += 2;
        }
    }

    return counter;
}

function getDivisorsCnt(n){
    var res=[], sqrt=Math.sqrt(n);
    for(let i=1; i<=sqrt; ++i){
        if(n%i==0){res.push(i); res.push(n/i);}
    }
    res = Array.from(new Set(res));
    return res.length;
}

function getDivisorsCnt(n) {
    let count = 0
    if (n % Math.sqrt(n) == 0) {
        count++
    }
    for (let i = 0; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            count += 2
        }
    }
    return count
}

const getDivisorsCnt = n => {
    let count = 0

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === Math.sqrt(n)) {
                count++
            } else {
                count += 2
            }
        }
    }

    return count
}

function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            count += 2;
            if (i * i === n) {
                count -= 1;
            }
        }
    }
    return count;
}

function getDivisorsCnt(n) {
    const halfCount = Array
        .from({length: Math.sqrt(n)}, (v, k) => k + 1)
        .reduce((a, b) => a + (n % b == 0), 0)
    ;
    return 2 * halfCount - (Math.sqrt(n) % 1 == 0);
}

function getDivisorsCnt(n){
    const end = Math.sqrt(n);
    let count = 0;
    if (n % end === 0) count++;
    for (let i = 1; i < end; i++) {
        if (n % i === 0) count += 2;
    }
    return count;
}

const getDivisorsCnt = n => {
    let count = 0;
    for (let i = 1, lim = n ** .5; i <= lim; i++)
        n % i || (count += 1 + (i < lim));

    return count;
}

function getDivisorsCnt(n){
    let divisorsCount = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) divisorsCount += (i === n / i) ? 1 : 2;
    } return divisorsCount;
}

function getDivisorsCnt(n){
    let count = 0
    if( n % Math.sqrt(n) == 0 ){
        count ++
    }
    for( i = 0; i < Math.sqrt(n); i++ ){
        if( n % i == 0 ){
            count += 2
        }
    }
    return count
}

function getDivisorsCnt(n){
    if (n === 1) return 1;
    var num = 0;

    if (n % Math.sqrt(n) === 0) num++;
    for (let i = 1; i < Math.sqrt(n); i++) {
        if(n % i === 0) {
            num += 2;
        }
    }

    return num;
}


describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(getDivisorsCnt(1),  1);
        assert.strictEqual(getDivisorsCnt(10), 4);
        assert.strictEqual(getDivisorsCnt(11), 2);
        assert.strictEqual(getDivisorsCnt(54), 8);
    });
});
