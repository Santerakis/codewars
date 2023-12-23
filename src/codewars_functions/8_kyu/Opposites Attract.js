// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//
//     Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
}

const
    lovefunc
        =( Ͼ , Ͽ )=>
        ! !
            ( ( Ͼ & 1) ^ (1 & Ͽ ) )

function lovefunc(flower1,flower2){
    if (flower1%2==0&&flower2%2!==0) {
        return true;
    }else if(flower1%2!==0&&flower2%2==0){
        return true;
    }else return false;
}

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 == 1;
}

function lovefunc(flower1, flower2){
    return ((flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)) ? true : false;
}

function lovefunc(flower1, flower2){
    return (flower1+flower2)%2!=0; // moment of truth
}

let lovefunc = (f1, f2) => !!((f1+f2)%2)

const lovefunc = (flower1, flower2) =>
    !!((flower1 ^ flower2) % 2);

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 !==0;
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(lovefunc(1,4), true)
        assert.strictEqual(lovefunc(2,2), false)
        assert.strictEqual(lovefunc(0,1), true)
        assert.strictEqual(lovefunc(0,0), false)
    });
});
