// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
//
// Years divisible by 4 are leap years,
//     but years divisible by 100 are not leap years,
//     but years divisible by 400 are leap years.
//
//     Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

function isLeapYear(year) {
    if(0 == year%400) return true;
    if(0 == year%100) return false;
    if(0 == year%4) return true;
    return false;
}

const moment = require('moment');

function isLeapYear(year) {
    return moment([year]).isLeapYear()
}

const isLeapYear = year => new Date(year, 1, 29).getDate() == 29;

function isLeapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}


function isLeapYear(y) {
    if (y % 400 == 0) return true
    if (y % 100 == 0) return false
    if (y % 4 == 0) return true
    return false
}

const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0

isLeapYear = y => y % 4 ? false : y % 100 ? true : y % 400 ? false : true

const isLeapYear = year =>
    (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0

describe("Example tests", () => {

    it("Year 2020 is a leap year", () => {
        assert.strictEqual(isLeapYear(2020), true, "Incorrect answer for year = 2020");
    });

    it("Year 2000 is a leap year", () => {
        assert.strictEqual(isLeapYear(2000), true, "Incorrect answer for year = 2000");
    });

    it("Year 2015 is not a leap year", () => {
        assert.strictEqual(isLeapYear(2015), false, "Incorrect answer for year = 2015");
    });

    it("Year 2100 is not a leap year", () => {
        assert.strictEqual(isLeapYear(2100), false, "Incorrect answer for year = 2100");
    });
});