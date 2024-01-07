// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
//     Array can contain numbers or strings. X can be either.
//
//     Return true if the array contains the value, false if not.

const check = (a,x) => a.includes(x);

function check(a,x){
    return a.includes(x);
}

function check(a,x){
    return a.indexOf(x) > -1 ? true : false;
};

function check(a,x){
    var result = false;
    for(i = 0; i < a.length; i++){
        if(a[i]==x){
            result  = true;
        }

    }
    return result;
};
check([1, "hey", false], 1);

const check = (a, x) =>
    a.some(val => val === x);

const check = (arr, x) => arr.some(item => item == x);





describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(check([66, 101], 66), true);
        assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
        assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
        assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
    })
})