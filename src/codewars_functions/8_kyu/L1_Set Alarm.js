// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//
//     The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
//
// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

const setAlarm = (employed, vacation) => employed && !vacation;

function setAlarm(employed, vacation){
    return employed && !vacation;
}

function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
}

function setAlarm(employed, vacation){
    return employed > vacation
}

function setAlarm(employed, vacation){
    if (employed==true && vacation== true ) { return false }
    if (employed==false && vacation== true ) { return false }
    if (employed==false && vacation== false) { return false }
    if (employed==true && vacation== false ) { return true }
}

function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
}

function setAlarm(employed, vacation){
// employed is a boolean (true/false)
// vacation is a boolean (true/false)
// if you are employed and not on vacation
    if(employed && !vacation){
//   The function should return true if you are employed and not on vacation :  need to set an alarm
        return true;
    } else {
        //   It should return false otherwise
        return false;
    }
}

const setAlarm = (e, v) => e && !v;

function setAlarm(employed, vacation){
    if (employed == true && vacation == true){
        return false
    }
    else if (employed == false && vacation == true){
        return false
    }
    else if (employed == true && vacation == false){
        return true
    }
    else if (employed == false && vacation == false){
        return false
    }
    else {
        return false
    }
}

// alarm is good
const setAlarm = (D, C) => D === true && C === false;

function setAlarm(employed, vacation){
    return employed === true && vacation === false;
}

function setAlarm(em, va){
    return em === true && va === false ? true : false
}

let
    setAlarm
        =(setA , larm)=>
        ! !
            (setA  &~ larm)


function setAlarm(employed, vacation){
    return employed ? !vacation : false;

}

describe("Test Suite",()=>{
    it("Fixed tests",()=>{
        assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
        assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
        assert.strictEqual(setAlarm(true, false), true,"Should be true.");
    });
});
