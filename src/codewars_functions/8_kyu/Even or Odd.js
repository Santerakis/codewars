// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 == 0){
        return "Even"
    }else{
        return "Odd"
    }
}

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd"
    }
}

function evenOrOdd(number) {
    return number%2==0 ? 'Even' : 'Odd'
}

const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even';

function evenOrOdd(number) {

    if (number%2 == 0)
    {
        return "Even";
    } else {
        return "Odd";
    }
}

const evenOrOdd = (number) => number % 2 === 0 ? 'Even' : 'Odd';

function even_or_odd(number) {
    return !(number % 2) ? 'Even' : 'Odd';
}

const evenOrOdd = (number) => {
    return number % 2 === 0 ? "Even" : 'Odd'
}



describe("Sample tests", () => {

    it("2 is even", () => {
        assert.strictEqual(evenOrOdd(2), "Even");
    });
    it("7 is odd", () => {
        assert.strictEqual(evenOrOdd(7), "Odd");
    });
    it("-42 is even", () => {
        assert.strictEqual(evenOrOdd(-42), "Even");
    });
    it("-7 is odd", () => {
        assert.strictEqual(evenOrOdd(-7), "Odd");
    });
    it("0 is even", () => {
        assert.strictEqual(evenOrOdd(0), "Even");
    });
});
