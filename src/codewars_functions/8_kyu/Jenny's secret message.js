// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//
// Can you help her?

function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

function greet(name){
    if(name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

function greet(name){
    if(name === "Johnny")
        return "Hello, my love!";
    else
        return "Hello, " + name + "!";
}

let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;

function greet(name){
    return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}

const greet = name => `Hello, ${name === 'Johnny' ? 'my love' : name}!`;

function greet(name) {
    return "Hello, " + (name === "Johnny" ? "my love": name) + "!";
}

describe("Jenny's greeting function", function(){
    it("should greet some people normally",function(){
        Test.assertEquals(greet("Jim"), "Hello, Jim!");
        Test.assertEquals(greet("Jane"), "Hello, Jane!");
        Test.assertEquals(greet("Simon"), "Hello, Simon!");
    });
    it("should greet Johnny a little bit more special",function(){
        Test.assertEquals(greet("Johnny"), "Hello, my love!");
    });
});