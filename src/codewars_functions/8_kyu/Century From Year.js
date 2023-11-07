// Introduction
//
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//     Task
//
// Given a year, return the century it is in.
// Examples
//
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
//
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

const century = year => Math.ceil(year/100)

function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}

function century(year) {
    return (year + 99) / 100 | 0;
}

function century(year) {
    // Finish this :)
    return Math.ceil(year/100);
}

function century(year) {
    return Math.ceil(year / 100);
}

const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;

const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;

function century(year) {
    if (year <= 100){
        return 1;
    }

    let cen = parseInt(year / 100);
    let rem = year % 100;

    return rem === 0 ? cen : cen + 1;
}

function century(year) {
    return Math.ceil(year/100)
} //dupa

function century(year) {
    return Math.floor((year-1)/100)+1;
}

function century(year) {
    return Math.ceil(year/100.0);
}


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(century(1705), 18, 'Testing for year 1705');
        Test.assertEquals(century(1900), 19, 'Testing for year 1900');
        Test.assertEquals(century(1601), 17, 'Testing for year 1601');
        Test.assertEquals(century(2000), 20, 'Testing for year 2000');
        Test.assertEquals(century(89), 1, 'Testing for year 89');
    });
});
