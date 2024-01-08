// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
//     Note: input will never be an empty string

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
        if(Number(str[i])>=5){
            newStr += "1"
        }
        else{
            newStr += "0";
        }
    }
    return newStr;
}

function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}

function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
        x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
}

fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');

function fakeBin(x){
    return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}

fakeBin=x=>[...x].map(a=>+a<5?0:1).join('')

function fakeBin(x){
    return x.split('').map(a => a < '5' ? "0" : "1").join("");
}

const fakeBin=x=>[...x].reduce((a,b)=>a+(~~(+b/5)),"")

function fakeBin(x) {
    return x.replace(/\d/g, n => "0000011111"[n])
}

function fakeBin(x){
    result = '';
    for (let i of x){
        (i < 5)? result += '0' : result +='1';
    }
    return result;
}

function fakeBin(x){
    return x.split('').map( x => x < 5 ? 0 : 1).join('');
}

function fakeBin(x) {
    return x.split('').map(y => y < 5 ? 0 : 1).join('');
}

function fakeBin(x){
    var s='';
    for (var i=0; i<x.length; ++i)
        if (x[i]<'5')
            s+="0";
        else
            s+="1";
    return s;
}

function fakeBin(x) {
    return x.replace(/./g, d => +(d >= 5));
}

const fakeBin = x =>
    [...x].reduce((pre, val) => pre + +(val >= 5), ``);

function fakeBin(x){
    return x.replace(/[1-4]/g,'0').replace(/[5-9]/g,'1');
}

const fakeBin = str => str.replace(/\d/g, num => num < 5 ? 0 : 1);

const fakeBin = (num) => num.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");



describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
        assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
        assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
    })
});