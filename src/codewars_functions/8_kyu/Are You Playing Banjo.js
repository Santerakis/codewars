// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
//     The function takes a name as its only argument, and returns one of the following strings:
//
//     name + " plays banjo"
// name + " does not play banjo"
//
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
        return name + ' plays banjo';
    } else {
        return name + ' does not play banjo';
    }
}

function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0] == 'R' || name[0] == 'r')
        return name + " plays banjo";
    else
        return name + " does not play banjo";
}

function areYouPlayingBanjo(name) {
    return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
}

const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? " plays banjo" : " does not play banjo");

const areYouPlayingBanjo = name => {
    const plays = name.toLowerCase().startsWith('r')
        ? 'plays'
        : 'does not play';
    return `${name} ${plays} banjo`;
}

function areYouPlayingBanjo(name) {
    return (name[0].toLowerCase() === 'r') ? name + ' plays banjo' : name + ' does not play banjo';
}

function areYouPlayingBanjo(name) {
    if (name.startsWith("R") || name.startsWith("r")) {
        return name + " plays banjo";
    } else return name + " does not play banjo";
}

function areYouPlayingBanjo(name) {
    return name.match(/^r.+/i) ? `${name} plays banjo` : `${name} does not play banjo`;
}

function areYouPlayingBanjo(name) {
    return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
}

function areYouPlayingBanjo(name) {
    // Web Programming UNPAS
    return name.split("").shift() == "R" || name.split("").shift() == "r" ? name + " plays banjo" : name + " does not play banjo"
}

function areYouPlayingBanjo(name) {
    if(name[0]==="R" || name[0]==='r'){
        return name+" plays banjo";
    }
    else{
        return name+" does not play banjo";
    }
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
        assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
        assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
        assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
        assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
})

