// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
//
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
//
//     Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg*fuelLeft >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    return (distanceToPump > mpg * fuelLeft) ? false : true;
}

zeroFuel = (_,__,___) => ___*__>=_

const zeroFuel = (deth, now, fuck) => deth/now <= fuck;

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= mpg * fuelLeft){
        return true;
    } else {
        return false;
    }
};

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    var capacity = fuelLeft * mpg;

    return capacity >= distanceToPump;
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (fuelLeft*mpg>=distanceToPump);
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg *fuelLeft
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft ? true : false

const zeroFuel = (distanceToPump, mpg, fuelLeft) => (fuelLeft * mpg) >= distanceToPump;

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

describe("zeroFill", function() {
    it("Sample Tests", function() {
        assert.equal(zeroFuel(50, 25, 2), true);
        assert.equal(zeroFuel(100, 50, 1), false);
    });
});