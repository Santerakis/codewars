// Create a function that returns the name of the winner in a fight between two fighters.
//
//     Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
//
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
//
//     Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//
//     Your function also receives a third argument, a string, with the name of the fighter that attacks first.
//     Example:
//
// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
//
// Lew attacks Harry; Harry now has 3 health.
//     Harry attacks Lew; Lew now has 6 health.
//     Lew attacks Harry; Harry now has 1 health.
//     Harry attacks Lew; Lew now has 2 health.
//     Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
//
//     function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    if(fac1 < fac2) {
        return fighter2.name;
    } else if(fac2 < fac1) {
        return fighter1.name;
    } else {
        return firstAttacker;
    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health <= 0 && fighter2.health <= 0)
        return firstAttacker;
    else if (fighter1.health <= 0)
        return fighter2.name;
    else
        return fighter1.name;
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
    if (fighter1.health <= 0) return fighter2.name
    if (fighter2.health <= 0) return fighter1.name

    return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
}

function declareWinner(fighter1, fighter2, firstAttacker) {

    var secondAttacker;

    if (firstAttacker === fighter1.name) {

        firstAttacker = fighter1;
        secondAttacker = fighter2;
    }
    else {

        firstAttacker = fighter2;
        secondAttacker = fighter1;
    }

    while (fighter1.health > 0 && fighter2.health > 0) {

        secondAttacker.health -= firstAttacker.damagePerAttack;

        if (secondAttacker.health <= 0 ) {
            return firstAttacker.name;
        }

        firstAttacker.health -= secondAttacker.damagePerAttack;

        if (firstAttacker.health <= 0) {
            return secondAttacker.name;
        }

    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    var res = Math.ceil(fighter1.health / fighter2.damagePerAttack) -
        Math.ceil(fighter2.health / fighter1.damagePerAttack);
    return res > 0 ? fighter1.name : (res < 0? fighter2.name : firstAttacker);
}

function declareWinner(fighter1, fighter2, firstAttacker) {

    const turnsUntilDeath1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    const turnsUntilDeath2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

    if (turnsUntilDeath2 > turnsUntilDeath1) {
        return fighter2.name
    } else if (turnsUntilDeath1 > turnsUntilDeath2) {
        return fighter1.name
    } else {
        return firstAttacker
    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker
}

const declareWinner = (f1, f2, fa) => (f1.health-=(f2.name===fa?f2.damagePerAttack:0)) > 0 && (f2.health-=(f1.name===fa?f1.damagePerAttack:0)) > 0 ? declareWinner(f1,f2,f1.name===fa?f2.name:f1.name) : f1.health <= 0 ? f2.name : f1.name;

describe("Two fighters, one winner.", () => {
    it("Example Test Cases", () => {
        assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
        assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
        assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
        assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
        assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
        assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")
    });
});