// Note: This kata is inspired by Convert a Number to a String!. Try that one too.
//     Description
//
// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
//     Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
//
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

var stringToNumber = function(str){
    return parseInt(str);
}

var stringToNumber = function(str){
    // put your code here
    return Number(str);
}

var stringToNumber = function(str){
    return +str;
}

const stringToNumber = str => Number(str)

var stringToNumber = function(str){
    return parseInt(str, 10);
}

var stringToNumber = function(str){
    return str*1;
}


describe( "stringToNumber", function(){
    it( "should work for the examples" , function(){
        Test.assertEquals(stringToNumber("1234"),1234)
        Test.assertEquals(stringToNumber("605"), 605)
        Test.assertEquals(stringToNumber("1405"),1405)
        Test.assertEquals(stringToNumber("-7"),  -7)
    });
});