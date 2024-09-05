// This program tests the life of an evaporator containing a gas.
//
//     We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
//     The program reports the nth day (as an integer) on which the evaporator will be out of use.
//     Example:
//
// evaporator(10, 10, 5) -> 29
//
// Note:
//
//     Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

function evaporator(content, evap_per_day, threshold){
    var days = 0;
    var gas = 100;
    while(gas >= threshold){
        gas -= gas * evap_per_day / 100;
        days++;
    }
    return days;
}

function evaporator(content, evap_per_day, threshold){
    threshold = threshold / 100
    evap_per_day = evap_per_day / 100
    return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
}

function evaporator(content, evap_per_day, threshold){
    var current = 100;
    var day = 0;
    while (current >= threshold)
    {
        current -= current * evap_per_day / 100;
        day++;
    }
    return day;
}

function evaporator(content, evap_per_day, threshold){
    var byvol = content*(threshold/100);
    var result = content;
    var i = 0;
    while (result > byvol){
        result = result - (result*(evap_per_day/100));
        i++;
    }
    return i;
}

function evaporator( content, evap_per_day, threshold ){
    let [ out, part ] = [ 0, 100 ];
    while ( part > threshold ) {
        part = part - part * ( evap_per_day / 100 );
        out += 1;
    }
    return out;
}

function evaporator(content, evap_per_day, threshold) {
    function recurse(pctLeft = 100, counter = 0) {
        if(pctLeft <= threshold) { return counter; }
        else { return recurse(pctLeft * (1 - evap_per_day / 100), ++counter); }
    };

    return recurse();
}

function evaporator(content, evap_per_day, threshold){
    let result = 0
    content = 100
    while (content >= threshold) {
        content -= content * evap_per_day / 100
        result++
    }
    return result
}

function evaporator(content, evap_per_day, threshold){
    let result = 0;
    let percent = 100;
    while (percent > threshold) {
        percent = percent - percent * (evap_per_day/100);
        result++;
    }
    return result;
}

with (Math) evaporator = (唐,ev,t) => ceil( log(t/100) / log(1-ev/100) )

const evaporator = (content, evap_per_day, threshold) => Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));

evaporator=(c,e,t)=>Math.ceil(1/(Math.log(1-e*1e-2)/Math.log(t*1e-2)))


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(evaporator(10,10,10),22);
    });
});