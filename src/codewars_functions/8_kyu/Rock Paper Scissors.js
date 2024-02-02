// Rock Paper Scissors
//
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples(Input1, Input2 --> Output):
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};

const rps = (p1, p2) => {
    if (p1 == p2)
        return 'Draw!';
    if (p1 == 'rock' && p2 == 'scissors')
        return 'Player 1 won!'
    else if (p1 == 'scissors' && p2 == 'paper')
        return 'Player 1 won!'
    else if (p1 == 'paper' && p2 == 'rock')
        return 'Player 1 won!'
    else
        return 'Player 2 won!';
};

const rps = (p1, p2) => {
    if(p1 === p2) {
        return 'Draw!'
    };
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

const rps = (p1, p2) => {
    var map = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };
    if (p1 == p2) {
        return 'Draw!';
    } else {
        return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
    }
};

const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
    if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
    if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
    return 'Player 2 won!';
};

const winsOver = {
    "rock" : "scissors",
    "scissors" : "paper",
    "paper" : "rock"
};
const rps = (p1, p2) => {
    if (p1 === p2)
        return "Draw!";
    else if (winsOver[p1] === p2)
        return "Player 1 won!";
    else
        return "Player 2 won!";
};


rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;

const rps = (p1, p2) => {
    const rules = {
        'scissors': 'paper',
        'rock': 'scissors',
        'paper': 'rock'
    };
    return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
};

const rps = (p1, p2) => {
    if (p1===p2) return 'Draw!'
    else if (p1==='scissors'&&p2=='paper'||p1==='paper'&&p2=='rock'||p1==='rock'&&p2=='scissors') return 'Player 1 won!'
    else return 'Player 2 won!'
};

function rps(p1, p2) {
    var choices = ['rock', 'paper', 'scissors'];
    var x = choices.indexOf(p1);
    var y = choices.indexOf(p2);
    if (x === y) return 'Draw!';
    if (x === 0 && y === 2) return 'Player 1 won!';
    if (x === 2 && y === 0) return 'Player 2 won!';
    if (x > y) return 'Player 1 won!'
    else return 'Player 2 won!';
}

const rps = (p1, p2) =>
    p1 === p2 ? `Draw!` : `Player ${/ps|rp|sr/.test(p1[0] + p2[0]) + 1} won!`;

const RPS_LOOKUP = {
    rr: 0, rs: 1, rp: 2,
    sr: 2, ss: 0, sp: 1,
    pr: 1, ps: 2, pp: 0,
}
const rps = (p1, p2) => {
    const n = RPS_LOOKUP[p1[0] + p2[0]]
    return n ? `Player ${n} won!` : "Draw!"
}

const rps = (p1, p2) => {
    switch (p1 + p2) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            return "Player 1 won!";
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            return "Player 2 won!";
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            return "Draw!";
    }
};



describe('rock paper scissors', function() {
    const getMsg = (n) => `Player ${n} won!`;

    it('player 1 win', function() {
        Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
        Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
        Test.assertEquals(rps('paper', 'rock'), getMsg(1));
    });

    it('player 2 win', function() {
        Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
        Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
        Test.assertEquals(rps('rock', 'paper'), getMsg(2));
    });

    it('draw', function() {
        Test.assertEquals(rps('rock', 'rock'), 'Draw!');
        Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
        Test.assertEquals(rps('paper', 'paper'), 'Draw!');
    });
});