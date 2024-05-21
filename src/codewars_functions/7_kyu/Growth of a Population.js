// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
//
//     At the end of the first year there will be:
//     1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//
// At the end of the 2nd year there will be:
//     1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
//
// At the end of the 3rd year there will be:
//     1141 + 1141 * 0.02 + 50 => 1213
//
// It will need 3 entire years.
//
//     More generally given parameters:
//
//     p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
//
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//
//     aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
//
// Examples:
//     nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
//
// Note:
//
//     Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
//
// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.
//


function nbYear(p0, percent, aug, p) {
    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}

function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
        p0 = Math.floor((1 + percent / 100) * p0 + aug);
        count++
    }
    return count;
}

function nbYear(p0, percent, aug, p, years = 0) {
    if (p0 < p) {
        return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
    }
    return years;
}

function nbYear(p0, percent, aug, p) {
    var i = 1;
    var mult = 1 + percent / 100.0;
    var prev = p0;
    while (prev < p) {
        var ne = Math.floor(prev * mult + aug)
        prev = ne
        i++;
    }
    return (i - 1);
}

const nbYear = (p0, percent, aug, p) => {
    let result = 0;
    percent /= 100;
    while (p0 < p) {
        p0 += Math.floor(p0 * percent + aug);
        result++;
    }
    return result;
};

//Recursive function: exit condition p0 >= p
function nbYear(p0, percent, aug, p) {
    p0 =  Math.floor(p0*(1+percent/100)+aug)
    if (p0>=p)
        return 1
    return nbYear(p0,percent,aug,p)+1
}

const nbYear = (p0, percent, aug, p) =>
    p0 < p ? true + nbYear(p0 + p0 * percent / 100 + aug | 0, percent, aug, p) : false

function nbYear(p0, percent, aug, p) {
    for (var count = 0; p0 < p; count++) {
        p0 += p0 * percent / 100 + aug | 0
    }
    return count
}

function nbYear(p0, percent, aug, p) {
    let i = 0;
    while (p0 <= p) {
        p0 += Math.floor(p0 * percent / 100) + aug;
        i++;
    }
    return i === 51 ? i-1: i
}

function nbYear(p0, percent, aug, p) {
    let n
    for (n = 1; p0 < p; n++) {
        p0 += parseInt(p0 * (percent / 100))
        p0 += aug
    }
    return n-1
}

function nbYear(p0, percent, aug, p) {
    let years = 0;
    for (years; p0 < p; years++) {
        p0 += p0 * (percent / 100) + aug | 0;
    }
    return years;
}

nbYear=f=(a,b,c,d,r=0)=>d/a>1?f(a+~~(a*b/1e2)+c,b,c,d,++r):r

function nbYear(p0, percent, aug, p, i = 1) {
    const per = percent / 100;
    const pp = parseInt(p0 + p0 * per + aug);
    if (pp >= p)
        return i;
    return nbYear(pp, percent, aug, p, i+1);
}

function nbYear(p0, percent, aug, p) {
    let year = [];
    for (let i = 1; p0 < p; i++) {
        p0 = Math.floor(p0 + (p0 * (percent / 100) + aug));
        year.push(i);
    }
    return year.length;
}

const nbYear=(p0, percent, aug, p,years = 0)=> p0>=p?years:nbYear(Math.floor(p0+=p0*(percent/100)+aug),percent,aug,p,years+=1)



describe("nbYear",function() {
    it("Basic tests",function() {
        Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
        Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
        Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
    })})