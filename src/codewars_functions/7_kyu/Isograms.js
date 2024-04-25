// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
//

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str){
    return !/(\w).*\1/i.test(str)
}

function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
        for(j = i + 1; j < str.length; ++j)
            if(str[i] === str[j])
                return false;
    return true;
}

function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}

function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}

function isIsogram(str) {
    str = str.toLowerCase()

    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i), i + 1) >= 0) {
            return false
        }
    }

    return true
}

function isIsogram(str) {
    var map = {};
    var result = true;
    str.split('').forEach(function(char) {
        if (map[char.toUpperCase()] === undefined) {
            map[char.toUpperCase()] = 1;
        } else {
            result = false;
        }
    });
    return result;
}

function isIsogram(str) {
    return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
}

function isIsogram(str){
    //Create array from string and make it uppercased
    var arr = str.split('').map(function(el) {
        return el.toUpperCase();
    });
    //Test each value for duplicates.
    return arr.every(function(el) {
        return arr.indexOf(el) == arr.lastIndexOf(el);
    });
}





describe("Tests", () => {
    it("test", () => {
        assert.strictEqual( isIsogram("Dermatoglyphics"), true );
        assert.strictEqual( isIsogram("isogram"), true );
        assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
        assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
        assert.strictEqual( isIsogram("isIsogram"), false );
        assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
    });
});