// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
//     Use conditionals to return the proper message:
//     case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
}

function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
}

function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss';
    }
    return 'Hello guest';
}

const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';

function greet (name, owner) {
    return "Hello " + (name == owner ? "boss" : "guest");
}

// Add code here:
const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";

const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss'
    }
    else
        return 'Hello guest'
}

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

let
    greet
        = ( Ⰾ , Ⰺ ) =>
        `Hello ${(
            ⰎⰀⰊ
                = (Ⰾ , Ⰺ) =>
                ''),(  Ⰾ === Ⰺ ?`boss`
            :     'guest'     )
        }`;  `Ⰿ´  ;´{`

/*  DECRYPT ME!  */
/*  Ⰰ ⰎⰏⰊ Ⰰ  */

const greet = (name, owner) =>
    `Hello ${name === owner ? `boss` : `guest`}`;

let greet=(n,o)=>`Hello ${n===o?'boss':'guest'}`;

function greet (name, owner) {
    if (name==owner){
        return "Hello boss"
    }
    else{
        return "Hello guest"
    }
}

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
        Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
    });
});
