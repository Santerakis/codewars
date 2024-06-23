// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//     Examples
//
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//

function removeUrlAnchor(url){
    return url.split('#')[0];
}

function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
}

const removeUrlAnchor = url => url.replace(/#.+$/,'');

function removeUrlAnchor(url){
    let string = ""
    for(let i = 0; i < url.length; i++){
        if(url[i] === "#") { break }
        string += url[i]
    }
    return string
}

function removeUrlAnchor(url) {
    return url.replace(/#.+/ig, "");
}

function removeUrlAnchor(url){
    return url.replace(/(#.*)/, '');
}

function removeUrlAnchor(url) {
    var index = url.indexOf("#");
    return index == -1 ? url : url.substring(0, url.indexOf("#"));
}

const removeUrlAnchor = url => url.includes('#') ? url.slice(0, url.indexOf("#")) : url;

function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#\w+/, '');
}

function removeUrlAnchor(u){
    return u.split('#')[0].toString();
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
        assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
        assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
    })
})