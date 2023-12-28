// There was a test in your class and you passed it. Congratulations!
//     But you're an ambitious person. You want to know if you're better than the average student in your class.
//
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
//
// Return True if you're better, else False!
// Note:
//
//     Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var classAvg = 0;
    for (var i = 0; i < classPoints.length; i++){
        classAvg += classPoints[i];
    }
    classAvg = classAvg/classPoints.length;
    return yourPoints > classAvg;
}

function betterThanAverage(classPoints, yourPoints) {
    const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
    const classAverage = classPointsSum / classPoints.length;
    const isBetter = yourPoints > classAverage;
    return isBetter;
}

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce(function(sum, x){return sum + x},yourPoints)/(classPoints.length+1)
}

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
}

const betterThanAverage = (classPoints, yourPoints) =>
    yourPoints > classPoints.reduce((pre, val) => pre + val, yourPoints) / (classPoints.length + 1);

function betterThanAverage(classPoints, yourPoints) {
    const allPoints = [yourPoints, ...classPoints];
    const average = allPoints.reduce((acc,val) => acc + val) / allPoints.length;

    return yourPoints > average;
}

function betterThanAverage(classPoints, yourPoints) {
    var sum = 0;
    for (var i = 0; i < classPoints.length; i++){
        sum += classPoints[i];
    }
    sum = sum/classPoints.length
    if(sum > yourPoints) {
        return false
    } else {
        return true
    }
}

const betterThanAverage = (classPoints, yourPoints) => yourPoints > average(classPoints);
const average = array => sum(array) / array.length;
const sum = array => array.reduce((a, b) => a + b);

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((sum, x) => sum + x) < yourPoints * classPoints.length;
}

function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((a,b)=> a+b) / classPoints.length) < yourPoints
}

const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((sum, current) => sum + current, 0) / classPoints.length < yourPoints;

function betterThanAverage(classPoints, yourPoints) {
    var average = 0;
    var points = classPoints.map(function(x) { average += x; });
    var average = average/classPoints.length;
    return (yourPoints < average)?false:true;
}

describe("Example Tests", function() {
    it("betterThanAverage([2, 3], 5) should return True", function() {
        assert.strictEqual(betterThanAverage([2, 3], 5), true);
    });

    it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
        assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
    });

    it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
        assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
    });

    it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
        assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
    });

    it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
        assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
    });
});