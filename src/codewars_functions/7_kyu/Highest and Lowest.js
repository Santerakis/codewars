// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//     Examples
//
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
//
// Notes
//
// All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);
    return Math.max(...arr) + ' ' + Math.min(...arr);
}

function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
}

function highAndLow(numbers) {
    var arr = numbers.split(" ");
    return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}

function highAndLow(numbers){

    var numArray = numbers.split(" ");
    var max      = Number(numArray[0]);
    var min      = Number(numArray[0]);
    var num;

    for(var i = 1; i< numArray.length; i++){

        num = Number(numArray[i]);

        if(num > max) max = num;
        if(num < min) min = num;
    }

    return max + " " + min;

}

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number)

    var min = Math.min.apply(null, numbers)
    var max = Math.max.apply(null, numbers)

    return max + ' ' + min
}

// tast for 55 sec
function highAndLow(numbers){
    numbers = numbers.split(' ').sort((a, b)=> Number(a)-Number(b))
    return [numbers[numbers.length-1], numbers[0]].join(' ')
}

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
}

function highAndLow(numbers){
    numbers = numbers.split(' ');

    return Math.max(...numbers) + ' ' + Math.min(...numbers);
}

function highAndLow(numbers) {
    var low, high, data = numbers.split(" ");
    for (var i = 0, length = data.length; i < length; i++) {
        var num = +data[i];
        if (low === undefined || num < low) low = num;
        if (high === undefined || num > high) high = num;
    }
    return high + " " + low;
}


describe("Example tests", () => {
    it("Test 1", () => {
        assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    });
    it("Test 2", () => {
        assert.strictEqual(highAndLow("1 2 3"), "3 1");
    });
});
