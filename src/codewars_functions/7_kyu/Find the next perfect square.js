// You might know some pretty large perfect squares. But what about the NEXT one?
//
//     Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
//     If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
//
//     Examples:(Input --> Output)
//
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
        return Math.pow(++number, 2)
    }
    return -1;
}

function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
        return Math.pow(root + 1, 2);
    } else {
        return -1;
    }
}

function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
}

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

const findNextSquare = sq => ( sq = Math.sqrt(sq) ) % 1 ? -1 : Math.pow(++sq, 2)

function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root - Math.floor(root) === 0 ? Math.pow(root+1, 2) : -1 ;
}

function findNextSquare(sq) {
    var n = Math.sqrt(sq);
    return Number.isInteger(n)?(n+1)*(n+1):-1
}

function findNextSquare(sq) {
    return !(Math.sqrt(sq) % 1) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) :-1;
}

function findNextSquare(sq) {
    return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
}


describe("findNextSquare", function() {
    it("should return the next square for perfect squares", function() {
        Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
        Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
        Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
        Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
    });

    it("should return -1 for numbers which aren't perfect squares", function() {
        Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
        Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
    });
});
