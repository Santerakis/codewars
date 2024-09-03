// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
//
//     Example:
//
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
//

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
    return "Hello " + name.capitalize() + "!";
};

var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};

var greet = function(name) {
    return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
};

var greet = function(name) {
    return "Hello " + name.substring(0,1).toUpperCase() + name.slice(1).toLowerCase()+"!";
};

var greet = function(name) {
    return 'Hello ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
};

greet = n => `Hello ${n[0].toUpperCase()}${n.substr(1).toLowerCase()}!`;

var greet = function(name) {
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};

var greet = (name) => `Hello ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!`

const greet = (name) => `Hello ${name[0].toUpperCase()+name.slice(1,).toLowerCase()}!`;

const greet = name => "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";

const greet = name =>
    `Hello ${name.toLowerCase().replace(/^\w/, val => val.toUpperCase())}!`;



describe("Tests", () => {
    it("test", () => {
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message)
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
        Test.assertEquals(greet('riley'), 'Hello Riley!');
    });
});
