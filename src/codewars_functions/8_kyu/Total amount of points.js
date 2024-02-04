// Our football team has finished the championship.
//
//     Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
//     For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
//
//     if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
//
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
//
//     Notes:
//
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let total = 0;
    games.map(game => {
        if (game[0] === game[2]) {
            total += 1;
        } else if (game[0] > game[2]) {
            total += 3;
        }
    });
    return total;
}

function points(games) {
    var sum=0;
    for (var i=0; i<games.length; ++i)
    {
        if (games[i][0]>games[i][2])
            sum+=3;
        if (games[i][0]==games[i][2])
            sum+=1;
    }
    return sum;
}

const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)

const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

function points(games) {
    return games.reduce((current, element) => {
        let arraySplit = element.split(':');
        return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
    }, 0);
}

const points = a => a.reduce((r, e) => {
    const x = e[0];
    const y = e[2];
    return r + (x > y ? 3 : x < y ? 0 : 1);
}, 0);

const points = games => games
    .map(str => str.split(':').map(Number))      // parse
    .map(([x, y]) => x > y ? 3 : x < y ? 0 : 1)  // determine points
    .reduce((sum, points) => sum + points, 0);   // sum points

function points(games) {
    let sum = 0;
    for(let i = 0; i < games.length; i++) {
        let a = games[i].split(':');
        if(a[0] > a[1]) {
            sum += 3;
        } else if(a[0] == a[1]) {
            sum += 1;
        } else { sum = sum }
    }
    return sum;
}

points=g=>g.reduce((a,c)=>a+(c[0]>c[2]?3:c[0]<c[2]?0:1),0)

describe("Total amount of points", function(){
    it("Sample Tests", function(){
        assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
        assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
        assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
        assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
        assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
    });
});