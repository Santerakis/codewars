// The Story:
//
//     Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
//
//     You have to write a function that accepts three parameters:
//
//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.
//
//     If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
//     Usage Examples:
//
//     cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}

function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
}

function enough(cap, on, wait) {
    if (on + wait < cap){
        return 0;
    } else {
        return (on + wait) - cap;
    }
}

function enough(cap, on, wait) {
    return cap - wait - on < 0 ? on + wait - cap : 0;
}

const enough = (cap, on, wait) => Math.max(0,wait-cap+on);

var enough = (cap, on, wait) => (cap >= on + wait) ? 0 : (on + wait) - cap;

function enough(cap, on, wait) {
    console.log(cap, on, wait)
    return (cap-on) >= wait ? 0 : wait-(cap-on)
}

function enough(cap, on, wait) {
    //cap = is the number ppl the bus can hold
    //on = number of ppl on bus
    //wait = number of ppl waiting to get on bus
    return Math.max(wait + on -cap, 0)
}

const enough = (cap, on, wait) => (on + wait) >= cap ? on + wait - cap : 0;

const enough = (cap, on, wait) => cap >= on + wait ? 0 : (on + wait) - cap;

const enough = (s, a, b) => +(b > s - a && b - s + a)

function enough(cap, on, wait) {
    switch (true) {
        case (on + wait) - cap > 0:
            return (on + wait) - cap;
        default:
            return 0;
    }
}

function enough(cap, on, wait) {
    return Math.abs(Math.min([cap - on - wait], 0))
}

enough = (x, y, z) => (x = y + z - x) > 0 ? x : 0;

function enough(cap, on, wait) {
    if (on + wait <= cap) {
        return 0;
    } else if (on + wait > cap) {
        return (cap - (on + wait)) *(-1);
    }
}

function enough(cap, on, wait) {
    if(cap > on + wait) return 0;
    else if(cap == on) return wait;
    else return wait - (cap - on)
}

function enough(cap, on, wait) {
    let passengers = wait-(cap-on);
    if(passengers <= 0)  return  0
    else return passengers;
}

function enough(cap, on, wait) {
    const PassengerReject = (on + wait) - cap
    return PassengerReject <= 0 ? 0 : PassengerReject
}

describe("Basic Tests", function(){
    it("Testing for fixed tests", () => {
        assert.strictEqual(enough(10, 5, 5), 0);
        assert.strictEqual(enough(100, 60, 50), 10);
        assert.strictEqual(enough(20, 5, 5), 0);
    });
});
