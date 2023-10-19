// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
    return bool ? 'Yes':'No';
}

function boolToWord( bool ){
    if (bool) {
        return 'Yes';
    } else {
        return 'No';
    }
}

let boolToWord = bool => bool ? 'Yes' : 'No';

const boolToWord = bool => bool ? 'Yes' : 'No';

function boolToWord(bool) {
    if(bool === true){
        return "Yes"
    }
    else{
        return "No"
    }
}

function boolToWord( bool ){
    if( bool ){
        return "Yes";
    }
    return "No";
}

describe("Basic tests", () => {
    it("Testing for basic tests", () => {
        assert.strictEqual(boolToWord(true), 'Yes')
        assert.strictEqual(boolToWord(false), 'No')
    });
});