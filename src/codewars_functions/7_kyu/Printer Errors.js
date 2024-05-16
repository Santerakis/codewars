// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
//     The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
//     You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
//     Examples:
//
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return count+"/"+s.length;
}

const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

const printerError = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')

var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

function printerError(s) {
    return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}

function printerError(s) {
    return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}

function printerError(s) {
    var m = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
            m++;
        }
    }
    return m + '/' + s.length;
}

function printerError(s) {
    var allowed = 'abcdefghijklm';
    var error = 0;

    s.split('').forEach( function( item ) {
        return ( allowed.indexOf( item ) === -1 ) ? error++ : '';
    });

    return error + '/' + s.length;
}

const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;

function printerError(s) {
    let b = Array.from(s).filter(letter => letter > "m");
    return b.length+"/"+s.length;
}

const printerError = s => `${s.replace(/[a-m]/g,'').length}/${s.length}`

function printerError(s) {
    return `${(s.match(/[^a-m]/g) || []).length}/${s.length}`;
}

function printerError(s) {
    return (s.match(/[n-z]/ig) === null ? 0 : s.match(/[n-z]/ig).length) + '/' + s.length ;
}

function printerError(s) {
    return `${s.replace(/[abcdefghijklm]/g, '').length}/${s.length}`
}

function printerError(s) {
    var count=0;
    for(var i=0,len=s.length;i<len;i++){
        if(s.charCodeAt(i)>109||s.charCodeAt(i)<97){
            count++
        }
    }
    return count+'/'+s.length
}

var printerError = s => s.replace(/[a-m]/ig, '').length + "/" + s.length;

describe("printerError",function() {
    it("Basic tests",function() {
        var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        Test.assertEquals(printerError(s), "3/56")
    })})