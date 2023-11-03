Your task is to create a function that does four basic mathematical operations.

    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

function basicOp(o, a, b) {
    return eval(a+o+b);
}

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}

function basicOp(operation, value1, value2)
{
    var cases = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2
    };
    return cases[operation]
}

function basicOp(operation, value1, value2)
{
    return eval(value1 + operation + value2);
}

function basicOp(operation, value1, value2)
{
    // Code
    if( operation == "+") {
        return value1 + value2
    }
    if( operation == "-") {
        return value1 - value2
    }
    if( operation == "*") {
        return value1 * value2
    }
    if( operation == "/") {
        return value1 / value2
    }
}

const basicOperations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
}

const basicOp = (op, x, y) => basicOperations[op](x, y)

function basicOp(operation, value1, value2)
{
    switch(operation){
        case '+': return value1 + value2;
        case '*': return value1 * value2;
        case '-': return value1 - value2;
        case '/': return value1 / value2;
    }
}

function basicOp(operation, value1, value2) {
    return  operation == '+' ? value1 + value2 :
        operation == '-' ? value1 - value2 :
            operation == '*' ? value1 * value2 :
                operation == '/' ? value1 / value2 : 'Wrong Operation';
}

basicOp = (operation, value1, value2) => eval( `${value1} ${operation} ${value2}` )

function basicOp(o, v1, v2)
{
    if (o === '+') return v1 + v2;
    if (o === '-') return v1 - v2;
    if (o === '/') return v1 / v2;
    if (o === '*') return v1 * v2;
}


describe("Tests", () => {
    it("test", () => {
        console.log("Basic tests\n");
        Test.assertSimilar(basicOp('+', 4, 7), 11);
        Test.assertSimilar(basicOp('-', 15, 18), -3);
        Test.assertSimilar(basicOp('*', 5, 5), 25);
        Test.assertSimilar(basicOp('/', 49, 7), 7);
    });
});
