// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//
//     Example:
//
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//

String.prototype.toJadenCase = function () {
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

String.prototype.toJadenCase = function () {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return this.split(' ').map(capitalizeFirstLetter).join(' ');
};

String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

String.prototype.toJadenCase = function() {
    return this
        .split(" ")
        .map(i => i.replace(i[0], i[0].toUpperCase()))
        .join(" ");
};

String.prototype.toJadenCase = function () {
    var words = this.split(' ');

    for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
};

String.prototype.toJadenCase = function () {
    var x = '';
    x += this[0].toUpperCase();
    for (var i = 1; i < this.length; i++) {
        if (this.charAt(i) == " ") {
            x += (this[i] + this[i + 1].toUpperCase());
            i++; // Increment i to stop the function concatenating the first letter of a new word twice
        } else {
            x += this[i];
        }
    }
    return x;
};

String.prototype.toJadenCase = function () {
    return this.split(' ').
    map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
};

String.prototype.toJadenCase = function () {
    return this.replace(/(?:^|\s)\S/g, function(c) { return c.toUpperCase(); });
};

String.prototype.toJadenCase = function() {
    return this.replace(/(^|\s)[a-z]/g, function(s){ return s.toUpperCase() });
};

String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, val => val.toUpperCase());
};

String.prototype.toJadenCase = function () {
    return this.replace(/(^| )(\w)/g, function (s) { return s.toUpperCase(); });
};

describe("Tests", () => {
    it("test", () => {
        var str = "How can mirrors be real if our eyes aren't real";
        Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

    });
});
