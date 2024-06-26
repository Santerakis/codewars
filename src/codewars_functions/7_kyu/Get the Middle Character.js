// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
//     #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"
//
// #Input
//
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
//
//     #Output
//
// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2)
        ? s.charAt(Math.floor(middle))
        : s.slice(middle - 1, middle + 1);
}

function getMiddle(s)
{
    return s.slice((s.length-1)/2, s.length/2+1);
}

function getMiddle(s)
{
    let middle = Math.floor(s.length/2);

    return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);

}

function getMiddle(string) {
    var middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
        return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return string.charAt(middleIndex);
    }
}

function getMiddle(s)
{
    return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
}

const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

function getMiddle(s){
    var a = s.length;
    if (a == 1){console.log(a); return s}
    if ( a & 1 ) {
        a =  Math.floor(a/2);
        return s[a];
    } else {
        a = (a/2);
        return s[a-1]+s[a];
    }
}

function getMiddle(s)
{
    return s.length % 2 == 0 ? s.charAt((s.length-1) / 2) + s.charAt((s.length+1) / 2) : s.charAt(s.length / 2);
}

function getMiddle(s)
{
    return s.length % 2 ? s.charAt(Math.floor(s.length/2)) : s.substr(s.length/2-1, 2);
}

const getMiddle = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1 );



describe("GetMiddle", function() {
    it("Tests", function() {
        Test.assertEquals(getMiddle("test"),"es");
        Test.assertEquals(getMiddle("testing"),"t");
        Test.assertEquals(getMiddle("middle"),"dd");
        Test.assertEquals(getMiddle("A"),"A");
    });
});