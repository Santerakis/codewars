// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
//     You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
//     Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
//     Write a code that gives out the total amount for different days(d).

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}

function rentalCarCost(d) {
    if(d<3) return d * 40;
    if(7>d && d>=3) return (d*40 -20);
    if(d>=7) return (d*40 -50);
}

function baseCost(days, rate) {
    return days * rate;
}

function discountRate(days) {
    if ( days >= 7 ) {
        return 50;
    }
    else if ( days >= 3 ) {
        return 20;
    }
    else {
        return 0;
    }
}

function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
}

function rentalCarCost(d) {
    if(d<3) return d * 40;
    if(7>d && d>=3) return (d*40 -20);
    if(d>=7) return (d*40 -50);
}

function rentalCarCost(days) {
    var dayCost = 40;

    var discount = 0;
    if(days >= 3) discount += 20;
    if(days >= 7) discount += 30;

    return dayCost * days - discount;
}

function rentalCarCost(d) {
    let total = d * 40;
    if (d >= 7) return total - 50
    if (d >= 3) return total - 20
    return total
}

function rentalCarCost(d) {
    var amount,
        dailyCharge = 40;
    if(d >= 7) {
        amount = (dailyCharge * d) - 50;
    } else if (d >= 3) {
        amount = (dailyCharge * d) - 20;
    } else {
        amount = dailyCharge * d;
    }
    return amount;
}

const rentalCarCost = d => 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0)

function rentalCarCost(d) {
    if(d >= 7){
        return (d * 40) - 50;
    }
    else if(d >= 3){
        return (d * 40) - 20;
    }
    else{
        return d * 40;
    }
}

const rentalCarCost = d =>
    d * 40 - ((d > 6) * 50 || (d > 2) * 20);

function rentalCarCost(d) {
    // Your solution here
    var total=40*d,discount=0;
    if(d>=7){
        total-=50;
    }else if(d>=3){
        total-=20;
    }
    return total;
}

const rentalCarCost = d => d*40 - (d>2)*20 - (d>6)*30;

function rentalCarCost(d) {
    return d < 3 ? d * 40 : d < 7 ? d * 40 - 20 : d * 40 - 50;
}

function rentalCarCost(d) {
    var amount,
        dayRent = 40;
    return d >= 7 ?  d * dayRent - 50 : d >= 3 ? d * dayRent - 20 : d * dayRent;
}

function rentalCarCost(d) {
    switch(true){
        case d>=7:return d*40-50;
        case d>=3:return d*40-20;
        default:return d*40;
    }
}

describe("Regular Tests:", function() {
    describe("Regular Tests:", function() {
        it("Should work for under 3 days:", function() {
            assert.strictEqual(rentalCarCost(1), 40);
            assert.strictEqual(rentalCarCost(2), 80);
        });

        it("Should work for under 7 days:", function() {
            assert.strictEqual(rentalCarCost(3), 100);
            assert.strictEqual(rentalCarCost(4), 140);
            assert.strictEqual(rentalCarCost(5), 180);
            assert.strictEqual(rentalCarCost(6), 220);
        });

        it("Should work for 7 or more days:", function() {
            assert.strictEqual(rentalCarCost(7), 230);
            assert.strictEqual(rentalCarCost(8), 270);
            assert.strictEqual(rentalCarCost(9), 310);
            assert.strictEqual(rentalCarCost(10), 350);
        });
    });