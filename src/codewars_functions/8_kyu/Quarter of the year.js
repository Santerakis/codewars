// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
//     For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
//
//     Constraint:
//
// 1 <= month <= 12

const quarterOf = m => Math.ceil(m/3);

const quarterOf = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else if (month <= 12) {
        return 4
    }

}

const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month / 3);
}

const quarterOf = month => Math.ceil(month / 3);

const quarterOf = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
}

const quarterOf = (month, quarter = 4) => {
    switch (month) {
        case 1:
        case 2:
        case 3:
            quarter = 1;
            break;
        case 4:
        case 5:
        case 6:
            quarter = 2;
            break;
        case 7:
        case 8:
        case 9:
            quarter = 3;
            break;
    }
    return quarter;
};

const quarterOf = (month) => {
    if (month <= 3) {
        quarter = 1; }
    else if (month <=6) {
        quarter = 2; }
    else if (month <=9) {
        quarter = 3; }
    else if (month <=12) {
        quarter = 4; }
    else {
        console.log('month is not valid')
    }

    return quarter
}

quarterOf=(m)=>Math.ceil(m/3)

const quarterOf = month => {
    //Your code here
    if (month <= 3) {
        return 1;
    } else if (month > 3 && month <= 6) {
        return 2;
    } else if (month > 6 && month <= 9) {
        return 3;
    } else if (month > 9 && month <= 12) {
        return 4;
    } else {
        return 'Error';
    }
};

const quarterOf = function (month) {
    return Math.ceil(month/3)
}

const quarterOf = (month) => {
    return Math.ceil(month / 3);
}

const monthToQuarterMap = {
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 2,
    '5': 2,
    '6': 2,
    '7': 3,
    '8': 3,
    '9': 3,
    '10': 4,
    '11': 4,
    '12': 4,
};

function quarterOf(month) {
    return monthToQuarterMap[month];
}

const quarterOf=month=>[1,1,1,1,2,2,2,3,3,3,4,4,4][month]

const quarterOf = (month) => {
    return parseInt((month - 1) / 3) + 1
}

const quarterOf = (m) => m<=3&&1 || m<=6 && 2 || m<=9 && 3 || m<=12 && 4

const quarterOf = (month) => {
    if(month==8){
        return 3
    }else if(month==3){
        return 1
    }else if(month==11){
        return 4
    }
    return Math.ceil(month/3)
}

quarterOf=Q=>0|(2+Q)/3



describe("Basic Tests", () =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(quarterOf(3), 1)
        assert.strictEqual(quarterOf(8), 3)
        assert.strictEqual(quarterOf(11), 4)
    });
});
