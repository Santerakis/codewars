// Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = [];
    for (let i=n; i>0; i--) {
        arr.push(i);
    } return arr;
};

const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};

const reverseSeq = length => Array.from({length}, () => length--)

const reverseSeq = n => {
    let arr = [];

    while(n > 0) {
        arr.push(n);
        n--;
    }
    return arr;
};

const reverseSeq = num => {
    return new Array(num)
        .fill()
        .map((d, i) => i + 1)
        .reverse()
};

const reverseSeq = n => {
    return Array.from({length:n},(_,i)=>n-i);
};

const reverseSeq = n => {
    if (n<2) return [n]
    return [n].concat(reverseSeq(n-1));
};

function hero(bullets, dragons){
    return dragons * 2 <= bullets;
}

describe("reverseSeq", function() {
    it("Sample Test", function() {
        assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
    });
});