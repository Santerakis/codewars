// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
//
//     Return true if yes, false otherwise :)

function hero(bullets, dragons){
    return bullets >= dragons * 2
}

function hero(bullets, dragons){
//Get Coding!
    return (bullets / 2 >= dragons) ? true : false;
}

const hero = (bullets, dragons) => dragons * 2 <= bullets;

hero = (bullets, dragons) =>{
    if (bullets/2 >= dragons) {
        return true;
    }
    else {
        return false;
    }
}

const hero = (очень, сложно) => очень / сложно >= 2

function hero(bullets, dragons){
    return bullets/dragons >= 2
}

const BULLETS_PER_DRAGON = 2;
function hero(bullets, dragons) {
    const survive = bullets >= dragons * BULLETS_PER_DRAGON;
    return survive;
}

function hero(bullets, dragons){
    return (bullets/2>=dragons)
}

function hero(bullets, dragons){
    var shots = bullets / dragons;
    if(shots < 2) {
        return false;
    } else {
        return true;
    }
}

const hero = (bullets, dragons) => bullets >= dragons * 2;

function hero(bullets, dragons){
    return (bullets >= dragons * 2 ? true : false);
}

hero = (b, d) => d * 2 <= b;

function hero(bullets, dragons){
    if(bullets >= dragons*2)
        return true;
    else
        return false;
}

function hero(bullets, dragons){
    let neededBullets = dragons * 2;
    return (bullets >= neededBullets ? true : false);
}

const hero = (пулі, дракошки) => пулі - дракошки * 2 >= 0;

hero=(b,d)=>b>=d*2

describe('Fixed tests', function() {
    it("Testing for fixed tests", () => {
        assert.strictEqual(hero(10, 5), true);
        assert.strictEqual(hero(7, 4), false);
        assert.strictEqual(hero(4, 5), false);
        assert.strictEqual(hero(100, 40), true);
        assert.strictEqual(hero(1500, 751), false);
        assert.strictEqual(hero(0, 1), false);
    });
});