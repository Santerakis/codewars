// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)
// Examples
//
//     [1, 1, 2] ==> 2
//     [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers){
    for (var i in numbers){
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}

const stray = nums => nums.reduce((a, b) => a ^ b);

function stray(numbers) {
    var a = numbers.sort();

    if(a[0] != a[1]) {
        return a[0]
    }
    return a[a.length-1]
}

const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

function stray(nums){
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return nums.filter(x => x == max).length == 1 ? max : min
}

function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
}

function stray(numbers) {
    var sort = numbers.sort();
    if (sort[0] === sort[1]) {
        return sort[sort.length-1]
    }  else {
        return sort[0]
    }
}

function stray(numbers) {
    return numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number));
}

const stray = nums => nums.reduce((x, y) => x ^ y);

const stray = arr => ~~arr.filter(x=>arr.indexOf(x)===arr.lastIndexOf(x)).join('')

function stray(numbers) {
    var num = numbers.sort(function(a,b){return a-b;});
    return (num[0] === num[1]) ? num[num.length-1] : num[0];
}



describe("Sample Tests", () => {
    it("Should pass Sample Tests", () => {
        assert.strictEqual(stray([1, 1, 2]), 2);
        assert.strictEqual(stray([1, 2, 1]), 2);
        assert.strictEqual(stray([2, 1, 1]), 2);
    });
});
