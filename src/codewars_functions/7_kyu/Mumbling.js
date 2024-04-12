// This time no story, no theory. The examples below show you how to write function accum:
//     Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
//
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

function accum(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
        result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
}

function accum (s) {
    return [...s].map((element, index) => {
        return element.toUpperCase() + element.toLowerCase().repeat(index);
    }).join('-');
}

function accum(str) {
    var res = [];
    for(var i = 0; i < str.length; i++) {
        var row = '';
        for(var j = 0; j < i + 1; j++) {
            row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();
        }
        res.push(row);
    }
    return res.join('-');
}

function accum(s) {
    return s.split('')
        .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
        .join('-');
}

function accum(s) {
    return s
        .split('')
        .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
        .join('-')
}

function accum(s) {
    var array = [];
    for (i = 0; i < (s.length); i++) {
        array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
    };
    return array.join("-");
}

function accum(s) {
    return (s.split('').map((c,i)=>{
        var res = c.toUpperCase();
        for(var j = 1 ; j <= i ; j++) {
            res += c.toLowerCase();
        }
        return res;
    }).join('-'));
}

function accum(s) {
    return s.toUpperCase().split("").reduce((a,v,i) => a+"-"+v+v.toLowerCase().repeat(i))
}

const repeat = (s, n) => Array.from({length: n}, () => s).join("")
const accum = (s) => s.split("").map((c, i) => c.toUpperCase() + repeat(c.toLowerCase(), i)).join("-")

const accum = s => s.split("").map((c,i)=> c.toUpperCase()+c.toLowerCase().repeat(i)).join("-");

function accum(s) {
    // your code
    return s.split('').map(function (c, i) {
        return c.toUpperCase() + Array(i + 1).join(c.toLowerCase());
    }).join('-');
}

const accum = s => {
    return [...s]
        .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
        .join('-');
};

// Crappy ES6 Shim
String.prototype.repeat = function(i) {
    return Array.from(Array(i), () => this).join('');
};

const accum = s =>
    [...s].map((val, idx) => val.toUpperCase() + val.toLowerCase().repeat(idx)).join(`-`);

const accum = (s) => {

    let ss = s.split('')
    let newArr = []
    console.log(ss)

    for(let i=0; i < ss.length; i++) {
        newArr.push(ss[i].repeat(i+1))
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase()
    }

    return newArr.join('-')
}

const reps = (x,i)=>x.toUpperCase() + x.repeat(i)
const accum = s => [...s.toLowerCase()].map(reps).join('-')

function accum(s) {
    return s.split('').map(function(l,index){
        return l.toUpperCase() + l.toLowerCase().repeat(index)
    }).join('-');
}

describe("accum",function() {
    it("Basic tests",function() {
        Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
        Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
        Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
        Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
        Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
    })})