// In the following 6 digit number:
//
//     283910
//
// 91 is the greatest sequence of 2 consecutive digits.
//
//     In the following 10 digit number:
//
//     1234567890
//
// 67890 is the greatest sequence of 5 consecutive digits.
//
//     Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
//
//     Adapted from ProjectEuler.net

function solution(digits){
    let answer = 0;

    for (let i=0; i<digits.length; i++){
        let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
        if(Number(number) > answer){       //convert to number and compare against answer
            answer = Number(number);
        }
    }
    return answer;
}

function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}

const solution = digits =>
    [...digits].reduce((pre, _, idx) => Math.max(pre, digits.slice(idx, idx + 5)));

function solution(digits){
    let max = '';
    for (let i = 0; i < digits.length - 4; i++) {
        max = Math.max(digits.slice(i, i + 5), max)
    }
    return max
}

function solution(digits){
    return +digits.split('').map((v,i,arr)=>arr.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
}

function solution(digits){
    let arr = []
    for(let i=0; i < digits.length; i++){
        arr.push(+digits.slice(i, i+5))
    }
    return Math.max(...arr)
}

function solution(digits){
    return digits.length === 5 ? +digits :
        Math.max(+digits.slice(0,5), solution(digits.slice(1)))
}

const solution = d => ~~d.split('').reduce((r, _, i) => (+d.substring(i, i + 5) > r ? +d.substring(i, i + 5) : r), 0);

solution=s=d=>d.length==5?+d:Math.max(+d.slice(0,5),s(d.slice(1)))

function solution(digits){
    const foo = String(digits)
    let max= 0
    for (let i = 0; i <= foo.length - 5;i++) {
        max = Math.max(max, foo.slice(i, i + 5))
    }
    return max
}

function solution(digits) {
    let numbers = digits.match(new RegExp(/9\d{4}/, "g"))
    return Math.max.apply(0, numbers)
}

function solution(digits){
    return Math.max(...digits.split('').map((_, i) => +digits.slice(i, i + 5)));
}

function solution(digits){
    return Math.max(...[...digits].slice(0,-4).map((e,i) => +digits.slice(i,i+5)));
}

const solution = d =>  Math.max( ...d.split('').map( (x,i,a)=> +(a.slice(i, i+5).join('')) ) )

function solution(ds) {
    const L = 5;
    return Math.max.apply(Math, [...ds.substring(0, ds.length - L + 1)].map((n, i) => {
        return + ds.substr(i, L);
    }));
}

function solution(digits){
    return Math.max(...Array.from(digits).map((el,i) => digits.substring(i, 5+i)))
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        let number = "7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450"
        assert.strictEqual(solution(number), 99890, 'solution did not return correct value')
        assert.strictEqual(solution('1234567898765'), 98765, 'Failed when max 5 digits is at end of number')
        assert.strictEqual(solution("731674765"), 74765, 'Failed in overlapping test')
    });
});