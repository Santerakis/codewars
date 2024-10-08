// Story
//
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
//     Task
//
// Your mission:
//     Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//
//     A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
//     Examples:
//
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode &&
        Date.parse(currentDate) <= Date.parse(expirationDate);
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var cd = new Date(currentDate);
    var ed = new Date(expirationDate);
    return (enteredCode === correctCode) && (ed >= cd);
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) {
        return false;
    }

    var cur = Date.parse(currentDate);
    var exp = Date.parse(expirationDate);
    if (cur > exp) {
        return false;
    }
    return true;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) {
        return false;
    }
    return new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
}

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate)=>
    enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)


describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
        assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
    });
});
