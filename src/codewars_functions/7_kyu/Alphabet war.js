// Introduction
//
// There is a war and nobody knows - the alphabet war!
//     There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
//     Task
//
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
//
// The left side letters and their power:
//
//     w - 4
// p - 3
// b - 2
// s - 1
//
// The right side letters and their power:
//
//     m - 4
// q - 3
// d - 2
// z - 1
//
// The other letters don't have power and are only victims.
// Example
//
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
//
// Alphabet war Collection

function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

function alphabetWar(fight) {
    let score = 0;
    for (const letter of fight) {
        switch (letter) {
            case 'w': score -= 4; break;
            case 'p': score -= 3; break;
            case 'b': score -= 2; break;
            case 's': score -= 1; break;
            case 'm': score += 4; break;
            case 'q': score += 3; break;
            case 'd': score += 2; break;
            case 'z': score += 1; break;
        }
    }

    return score < 0 ? "Left side wins!" : score > 0 ? "Right side wins!" : "Let's fight again!";
}

function alphabetWar(fight)
{
    thisIsWar = {'w': 4, 'p': 3, 'b': 2, 's': 1, 'm': -4, 'q': -3, 'd': -2, 'z': -1};
    result = 0;
    fight.split("").map(function(l) { result += thisIsWar[l] !== undefined ? thisIsWar[l] : 0});
    return result < 0 ? "Right side wins!" : result > 0 ? "Left side wins!" : "Let's fight again!"
}

function alphabetWar(fight){
    const dic = {'w':4, 'p':3, 'b':2, 's':1,'m':-4, 'q':-3, 'd':-2, 'z':-1};
    const out = [...fight].map(el => dic[el] ? dic[el] : 0).reduce((a, b) => a + b, 0)
    return out > 0 ? 'Left side wins!' : out < 0 ? 'Right side wins!' : 'Let\'s fight again!';
}

alphabetWar = (fight) => ["Right side wins!","Let's fight again!","Left side wins!"][ Math.sign([...fight].reduce((r, cv) => r + 'sbpw'.indexOf(cv) - 'zdqm'.indexOf(cv),0)) + 1 ]

const alphabetWar = fight =>
    [`Right side wins!`, `Let's fight again!`, `Left side wins!`][Math.sign([...fight].reduce((pre, val) => pre + ((`mqdz sbpw`.indexOf(val) - 4) % 5), 0)) + 1];

function alphabetWar(s){
    var l=[...s].reduce((a,c)=>a+"sbpw".indexOf(c)+1,0),
        r=[...s].reduce((a,c)=>a+"zdqm".indexOf(c)+1,0)
    return l-r?`${l>r?"Left":"Right"} side wins!`:`Let's fight again!`
}

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals( alphabetWar("z") , "Right side wins!" );
        Test.assertEquals( alphabetWar("zdqmwpbs") , "Let's fight again!" );
        Test.assertEquals( alphabetWar("zzzzs"), "Right side wins!" );
        Test.assertEquals( alphabetWar("wwwwww"), "Left side wins!" );
    });
});
