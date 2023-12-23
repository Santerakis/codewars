// Implement a function which convert the given boolean value into its string representation.
//
//     Note: Only valid inputs will be given.

function booleanToString(b){
    return b.toString();
}

function booleanToString(b){
    return b ? 'true' : 'false';
}

function booleanToString(b){
    return String(b);
}

function booleanToString(b){
    return `${b}`
}

const booleanToString = b => b ? 'true' : 'false';

function booleanToString(b){
    return b+'';
}

function booleanToString(b){
    if (typeof b == 'boolean') {
        return String(b);
    }
}

const booleanToString = input => input + "";

const booleanToString=b=>b.toString();

const booleanToString = b => b + "";

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
        Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
    });
});

