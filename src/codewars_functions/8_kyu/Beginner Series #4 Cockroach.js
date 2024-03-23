// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
//
//     For example:
//
//     1.08 --> 30
//
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

const cockroachSpeed = s => Math.floor(s / 0.036);

function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;

    return Math.floor((s*centimetersInKilometers)/secsInHour);
}

function cockroachSpeed(s) {
    return Math.floor(s*100000/3600);
}

function cockroachSpeed(s) {
    //multiply km/m by 27.7777777778
    return Math.floor(s*27.7777777778);
}

function cockroachSpeed(s) {
    const KILOMETER_IN_CENTIMETERS = 1 * 1000 * 100;
    const HOUR_IN_SECONDS = 1 * 60 * 60;

    return Math.floor(s * KILOMETER_IN_CENTIMETERS / HOUR_IN_SECONDS);
}

const cockroachSpeed = s =>
    s / 3.6e-2 ^ 0;

function cockroachSpeed(s) {
    var speed = s * 27.7777778
    return Math.floor(speed)
}

const cockroachSpeed = s => s/.036|0

function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 60 / 60);
}

const cockroachSpeed = s => Math.floor(s * 27.778);

const cockroachSpeed = V => Math.floor(V * 27.778);

function cockroachSpeed(s) {
    return Math.floor(s*1000/36);
}

cockroachSpeed = s => Math.floor(100000 * s / 3600)

const cockroachSpeed=s=>Math.floor(s*27.7778)

function cockroachSpeed(s) {
    const cmPerKm = 100000; // 1 kilometer = 100,000 centimeters
    const secondsPerHour = 3600; // 1 hour = 3,600 seconds
    const cmPerSecond = Math.floor((s * cmPerKm) / secondsPerHour);
    return cmPerSecond;
}

describe("Basic Tests", function() {
    it("Testing for fixed tests", () => {
        assert.strictEqual(cockroachSpeed(1.08), 30);
        assert.strictEqual(cockroachSpeed(1.09), 30);
        assert.strictEqual(cockroachSpeed(0), 0);
    });
});
