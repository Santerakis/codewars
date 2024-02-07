// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
//     Return the average of the given array rounded down to its nearest integer.
//
//     The array will never be empty.

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

function getAverage(marks){
    // calculates total number of marks
    var total = 0;
    for(var i = 0; i < marks.length; i++){
        total += marks[i];
    }

    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
}

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

function getAverage (marks) {
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

// reduce is good
var getAverage = ( m ) => parseInt(m.reduce((a, b)=> a + b)/ m.length)

function getAverage(marks){
    var sum = 0;
    for (var i in marks)
        sum += marks[i];
    return parseInt(sum / marks.length);
}

function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

function getAverage(marks){
    return Math.floor(marks.reduce(function(a,b){return a+b})/marks.length)
}

const getAverage = marks => ~~(marks.reduce((s, v) => s + v) / marks.length);

const getAverage = marks =>
    ~~(marks.reduce((pre, val) => pre + val, 0) / marks.length);

const getAverage = marks => (marks.reduce((a, b) => a + b) / marks.length) | 0;

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);

function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
} // dupa

getAverage=a=>~~(a.reduce((b,c)=>b+c)/a.length);

const getAverage = (marks) => ~~marks.reduce((cma, x, n) => cma + (x - cma)/(n + 1));

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(getAverage([2,2,2,2]),2);
        Test.assertEquals(getAverage([1,2,3,4,5,]),3);
        Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


    });
});