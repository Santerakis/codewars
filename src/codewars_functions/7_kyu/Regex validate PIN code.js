// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
//     If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
//
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

function validatePIN (pin) {
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
    if(isCorrectLength && hasOnlyNumbers){
        return true;
    }
    return false;
}

const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);

function validatePIN (pin) {
    //return true or false
    var n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
}

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)

function validatePIN (pin) {
    var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
    return reg.test(pin);
}

function validatePIN (pin) {
    return /^\d{4}(\d{2})?$/.test(pin);
}

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

function validatePIN (pin) {
    pin = pin.split('')
    const findNaN = pin.find(character => !(parseInt(character) >= 0))
    if ((pin.length === 4 || pin.length === 6) && !findNaN) {
        return true
    } else {
        return false
    }
}

function validatePIN (pin) {
    let pinArr = pin.split('').filter((e,i) => ['0','1','2','3','4','5','6','7','8','9'].includes(e))
    return (pinArr.length == 4 && pinArr.length == pin.length) || (pinArr.length == 6 && pinArr.length == pin.length)
}

const validatePIN = pin => !!pin.match(/^(\d{4}|\d{6})$/);

function validatePIN (pin) {
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let count = 0;
    let pinArr = pin.split('');
    for (let i of pinArr) {
        if (num.includes(i)) {
            count += 1;
        } else {
            return false;
        }
    }
    return count == 4 || count == 6;
}


describe("validatePIN", function() {
    it("should return False for pins with length other than 4 or 6", function() {
        Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
        Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
        Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
        Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
        Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
        Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
        Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
        Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
        Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
    });

    it("should return False for pins which contain characters other than digits", function() {
        Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
        Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")
    });

    it("should return True for valid pins", function() {
        Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
        Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
        Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
        Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
        Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
        Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
        Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
        Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");
    });
});
