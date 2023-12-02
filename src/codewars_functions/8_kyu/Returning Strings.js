// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

const greet = name => `Hello, ${name} how are you doing today?`;

// Return a greeting string
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
}

function greet(name) {
    return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`
}

function greet(name){
    return "Hello, " + name + " how are you doing today?"
}

function greet(name){
    return "Hello, <name> how are you doing today?".replace("<name>", name);
}

const greet=n=>`Hello, ${n} how are you doing today?`;

function greet(name){
    let a= name.split("");
    let j=[];
    a[0]="Hello,"
    a[1]=name
    a[2]="how are you doing today?"
    j.push(a[0],a[1],a[2])
    return j.join(" ")
}

greet=_=>`Hello, ${_} how are you doing today?`

function greet(Nemo){return `Hello, ${Nemo} how are you doing today?`}

function greet(eman){
    return `Hello, ${eman} how are you doing today?`
}

const greet = function(name){
    const arr = ['Hello,', name,'how', 'are', 'you', 'doing', 'today?']
    return arr.join(' ')
}

function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
}

function greet(name){
    //your code here
    // String + name
    return "Hello, "+name+" how are you doing today?"
}

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
        assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
    })
})
