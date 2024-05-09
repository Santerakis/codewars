// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
//     Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples (input --> output):
//
// "4556364607935616" --> "############5616"
// "64607935616" -->      "#######5616"
// "1" -->                "1"
// "" -->                 ""
//
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
}

function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
}

function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}

// return masked string
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
        cc[i] = "#";
    }

    cc = cc.join("");
    return cc
}

maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);

// return masked string
function maskify(cc) {
    var maskedString = "";
    for(var i = 0; i < cc.length; i++) {
        if(i < cc.length - 4) {
            maskedString = maskedString + "#";
        } else {
            maskedString = maskedString + cc.charAt(i);
        };
    }
    return maskedString;
}

// return masked string
function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}

const maskify = cc => cc.slice(-4).padStart(cc.length, '#')

// return masked string
function maskify(cc) {
    return cc.replace(/(?=.{5})./g, '#')
}


describe("maskify", function(){
    it("should work for some examples", function(){
        Test.assertEquals(maskify('4556364607935616'), '############5616');
        Test.assertEquals(maskify('1'), '1');
        Test.assertEquals(maskify('11111'), '#1111');
    });
});