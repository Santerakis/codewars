// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}

function feast(beast, dish) {
    return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}

function feast(beast, dish) {
    return beast.at(0) == dish.at(0) && beast.at(-1) == dish.at(-1)
}

feast=(beast, dish)=>beast.slice(0,1)==dish.slice(0,1)&&beast.slice(-1)==dish.slice(-1)

function feast(beast, dish) {
    if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
        return true;
    }
    else {return false;}
}

const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);

const feast = (b, d) => d.startsWith(b[0]) && d.endsWith(b[b.length-1])

function feast(beast, dish) {
    return beast[0] === dish[0] &&
        beast.substr(-1) === dish.substr(-1);
}

feast=(a,b,f=s=>s[0]+s[s.length-1])=>f(a)==f(b)

const feast = (beast, dish) => (beast[0]===dish[0] && beast[beast.length-1]===dish[dish.length-1]);

const feast = (beast, dish) => beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length-1])

const feast = (beast, dish) =>  beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]

function feast(beast, dish) {
    return (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) ? true : false ;
}

let feast = (a, b) => a[0] + [...a].pop() == b[0] + [...b].pop()

const feast = (b, d) => `${b[0]}${b[b.length - 1]}` === `${d[0]}${d[d.length - 1]}`

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(feast("great blue heron", "garlic naan"), true)
        Test.assertEquals(feast("chickadee", "chocolate cake"), true)
        Test.assertEquals(feast("brown bear", "bear claw"), false)
    });
});