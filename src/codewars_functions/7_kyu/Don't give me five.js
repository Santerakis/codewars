// Don't give me five!
//
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
//
//     Examples:
//
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
//
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
//
//     I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!


function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
        if (!/5/.test(i)) {
            count++
        }
    }
    return count
}

function dontGiveMeFive(start, end){
    let res = [];
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
}

function dontGiveMeFive(start, end) {
    let count = 0;

    for (let i = start; i <= end; ++i)
        if (!i.toString().includes("5"))
            count++;

    return count;
}

dontGiveMeFive = (s,e) => {
    for (var cnt = 0;s <= e;++s)
        (s+'').includes('5') || cnt++
    return cnt
}

function dontGiveMeFive(start, end)
{
    return Array.from(Array(end-start+1),(e,i)=>i+start)
        .filter((e)=>(''+e).indexOf('5')===-1)
        .length;
}

function dontGiveMeFive(start, end){
    var arr = [];
    for(var i=start; i<=end; i++){
        arr.push(i);
    }
    var arr1 = [];
    for(var i=0; i<arr.length; i++){
        arr1.push(arr[i].toString());
    }
    var count = 0;
    for(var i=0; i<arr1.length; i++){
        if((arr1[i].match(/5/g) || []).length === 0 )
            count++;
    }
    return count;
}

const dontGiveMeFive=(s,e)=>[...Array(e-s+1)].reduce((r,_,n)=>r+!/5/.test(n+s),0)

const dontGiveMeFive = (start, end) =>
    [...Array(++end - start)].reduce((pre, _, idx) => pre + !/5/.test(idx + start), 0);

function dontGiveMeFive(start, end)
{
    var i,
        count=0;
    for(i=start;i<=end;i++) {
        if((''+i).indexOf('5')<0)
            count++;
    }
    return count;
}

function dontGiveMeFive(start, end)
{
    let result = 0
    for (let i = start; i <= end; i++){
        if (!/5/.test(i)) {
            result++
        }
    }
    return result;
}

function dontGiveMeFive(start, end)
{
    let count = 0;
    for(let i = start; i <= end; i++){
        if(i.toString().includes('5') === false){
            count++;
        }
    }
    return count;
}

function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) {
            count++;
        }
    }
    return count;
}

describe("KataTests", function(){
    it("exampleTests", function(){
        Test.assertEquals(dontGiveMeFive(1,9), 8);
        Test.assertEquals(dontGiveMeFive(4,17), 12);
    });
});