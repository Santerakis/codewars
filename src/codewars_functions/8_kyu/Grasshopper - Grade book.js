// Grade book
//
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//     Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'
//
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

function getGrade(...scores) {
    let average = scores.reduce((a, b) => a + b) / scores.length

    if (average >= 90) return 'A'
    else if (average >= 80) return 'B'
    else if (average >= 70) return 'C'
    else if (average >= 60) return 'D'
    else return 'F'
}

function getGrade (s1, s2, s3) {
    var avg = (s1 + s2 + s3)/3;
    switch(true) {
        case (avg >= 90):
            return 'A';
        case ( avg >= 80):
            return 'B';
        case ( avg >= 70):
            return 'C';
        case ( avg >= 60):
            return 'D';
        default:
            return 'F';
    }
}

function getGrade (s1, s2, s3) {
    let meanScore = (s1 + s2 + s3)/3;
    if( meanScore >= 90 && meanScore <= 100){
        return 'A';
    } else if( meanScore >= 80 && meanScore < 90) {
        return 'B'
    } else if( meanScore >= 70 && meanScore < 80) {
        return 'C'
    } else if( meanScore >= 60 && meanScore < 70) {
        return 'D'
    } else {
        return 'F'
    }
}

var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);

function getGrade (s1, s2, s3) {
    avg = (s1 + s2 + s3) / 3;
    if(avg <60) return 'F';
    if(avg <70) return 'D';
    if(avg < 80) return 'C';
    if(avg <90) return 'B';
    return 'A';
}

function getGrade (s1, s2, s3) {
    // Code here
    var avg = (s1 + s2 + s3) / 3
    if (avg >= 90)
        return 'A'
    if (avg >= 80)
        return 'B'
    if (avg >= 70)
        return 'C'
    if (avg >= 60)
        return 'D'
    return 'F'
}

function getGrade (s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3
    if (average < 60) return 'F'
    if (average < 70) return 'D'
    if (average < 80) return 'C'
    if (average < 90) return 'B'
    return 'A'
}

function getGrade (s1, s2, s3) {
    const avg = (s1+s2+s3)/3;
    return [
        [90, 'A'],
        [80, 'B'],
        [70, 'C'],
        [60, 'D'],
        [00, 'F']
    ].find(grades => {
        return grades[0] <= avg
    })[1]
}

function getGrade (s1, s2, s3) {
    return {10:'A',9:'A',8:'B',7:'C',6:'D'}[Math.floor((s1+s2+s3)/30)]||'F'
}

const getGrade = (s1, s2, s3) =>
    (val => val < 60 ? `F` : val < 70 ? `D` : val < 80 ? `C` : val < 90 ? `B` : `A`)
    ((s1 + s2 + s3) / 3);

function getGrade (s1, s2, s3) {
    const GRADE = ['F','F','F','F','F','F','D','C','B','A','A'];
    return GRADE[(s1 + s2 + s3) / 3 / 10 >> 0];
}

describe('grade book', function () {
    it('should return an A', function () {
        Test.assertEquals(getGrade(95,90,93), 'A')
        Test.assertEquals(getGrade(100,85,96), 'A')
        Test.assertEquals(getGrade(92,93,94), 'A')
    })
    it('should return a B', function () {
        Test.assertEquals(getGrade(70,70,100), 'B')
        Test.assertEquals(getGrade(82,85,87), 'B')
        Test.assertEquals(getGrade(84,79,85), 'B')
        Test.assertEquals(getGrade(89,89,90), 'B')
    })
    it('should return a C', function () {
        Test.assertEquals(getGrade(70,70,70), 'C')
        Test.assertEquals(getGrade(75,70,79), 'C')
        Test.assertEquals(getGrade(60,82,76), 'C')
    })
    it('should return a D', function () {
        Test.assertEquals(getGrade(65,70,59), 'D')
        Test.assertEquals(getGrade(66,62,68), 'D')
        Test.assertEquals(getGrade(58,62,70), 'D')
    })
    it('should return an F', function () {
        Test.assertEquals(getGrade(44,55,52), 'F')
        Test.assertEquals(getGrade(48,55,52), 'F')
        Test.assertEquals(getGrade(58,59,60), 'F')
    })
})