// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
//
//     For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
//
//     If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

var breakChocolate = function(n, m) {
    return (n*m === 0) ? 0 : n * m - 1;
};

var breakChocolate = function(n, m) {
    if(n === 0 || m === 0) return 0
    return n*m - 1;
};

var breakChocolate = function(n, m) {
    return Math.max(0, m*n - 1);
};

var breakChocolate = function(n, m) {
    return Math.max(n*m-1,0);
};

var breakChocolate=function(n,m){return n&&m?n*m-1:0};

var breakChocolate = function(n, m) {
    var slices = (n * m) - 1;
    if(slices < 0) slices = 0;
    return slices;
};

var breakChocolate = ($, ﬂ) => $ < 1 || ﬂ < 1 ? 0 : $ * ﬂ - 1

const breakChocolate = (n,m) => n + m === 0 ? 0 : (n*m)-1;

var breakChocolate = function(n, m) {
    return n * m ? (n * m) - 1 : 0;
};

var breakChocolate = function(n, m) {
    return n>0&&m>0?n*m-1:0;
};

var breakChocolate = function(n, m) {
    return (n||1) * (m||1) - 1;
};

function breakChocolate(n, m) {
    const res = n * m
    return res ? res - 1 : 0
}

function breakChocolate(q,q2) {
    let a = (!q2||!q)?0:((q*q2)-1);
    return a;
}

function breakChocolate(n,m) {
    return (n * m) > 1 ? n * m - 1 : 0
}


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(breakChocolate(5, 5) , 24)
        Test.assertEquals(breakChocolate(1, 1) , 0)
    });
});
