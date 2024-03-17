// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//
//     Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//
//     For example, when the input is green, output should be yellow.
//     Fundamentals

function updateLight(current) {

    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current]

function updateLight(current) {

    switch (current) {
        case 'green':
            return 'yellow';
            break;
        case 'yellow':
            return 'red';
            break;
        case 'red':
            return 'green';
            break;
        default:
            throw 'Error: wrong input';
            break;
    }

}

function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        default:
            return 'green';
    }
}

function updateLight(current) {

    if (current === 'green'){
        current = 'yellow'
    } else if (current === 'yellow') {
        current = 'red'
    } else if (current === 'red') {
        current = 'green'
    } else {}

    return current


}

const updateLight = current => {
    return {
        red: 'green',
        yellow: 'red',
        green: 'yellow'
    }[current];
}

const lights = ['green', 'yellow', 'red']

function updateLight(current) {
    if (typeof current !== 'string') {
        throw new TypeError(`${current} is not of type string`)
    }

    if (!lights.includes(current)) {
        throw new RangeError(`${current} can only be set to "red", "yellow" or "green"`)
    }

    const indexOfLight = lights.indexOf(current)

    return lights[(indexOfLight + 1) % (lights.length)]
}

function updateLight(current) {
    const states = ['green', 'yellow', 'red'];
    let nextStateIndex = (states.indexOf(current) + 1) % states.length;
    return states[nextStateIndex];
}

function updateLight(current) {
    return ({
        green: 'yellow',
        yellow: 'red',
        red: 'green'
    })[current]
}

const updateLight = C => C == 'green' ? 'yellow' : C == 'yellow' ? 'red' : C == 'red' ? 'green' : 'error';

const updateLight = current =>
    ({green: `yellow`, yellow: `red`, red: `green`})[current];

function updateLight(current) {
    const lights = ['green', 'yellow', 'red'];
    return lights[(lights.indexOf(current) + 1) % lights.length];
}

const updateLight = current => current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';

function updateLight(current) {
    const lights = ["green", "yellow", "red"];
    const newLightIndex = lights.indexOf(current) + 1;
    return newLightIndex < 3 ? lights[newLightIndex] : lights[0];
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(updateLight("green"), "yellow");
        assert.strictEqual(updateLight("yellow"), "red");
        assert.strictEqual(updateLight("red"), "green");
    });
});