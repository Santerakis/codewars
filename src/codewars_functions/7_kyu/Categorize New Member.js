// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//
//     To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//     Input
//
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//     Output
//
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
//     Example
//
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

function openOrSenior(data){
    function determineMembership(member){
        return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(determineMembership);
}

function openOrSenior(data){
    var result = [];
    data.forEach(function(member) {
        if(member[0] >= 55 && member[1] > 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    })
    return result;
}

function openOrSenior(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}

function openOrSenior(data){
    return data.map(function(d){
        return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
    });
}

const openOrSenior = data => {
    let getOpenOrSenior = [];
    for(i=0; i<data.length; i++){
        if(data[i][0]>=55 && data[i][1]>7){
            getOpenOrSenior.push("Senior");
        }else{
            getOpenOrSenior.push("Open");
        }
    }
    return getOpenOrSenior;
}

const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')

function openOrSenior(data){
    var rez=[];
    for(var i=0;i<data.length;i++){
        if(data[i][0]>=55&&data[i][1]>7){rez.push("Senior");}else rez.push("Open");
    }
    return rez;
}

openOrSenior = data => data.map(e => (e[0] > 54 && e[1] > 7) ? "Senior" : "Open")

const Category = {
    Open: 'Open',
    Senior: 'Senior',
};

function openOrSenior(data){
    return data.map(([age, handicap]) => {
        if (age >= 55 && handicap > 7) {
            return Category.Senior;
        }

        return Category.Open;
    });
}

function openOrSenior(data){
    var arr = data.map(function(item){
        if(item[0] >= 55 && item[1] > 7){
            return "Senior";
        } else {
            return "Open";
        }
    });
    return arr;
}

function openOrSenior(data){
    // ...
    var arr = [];
    for (var i = 0; i< data.length; i++){
        arr[i] = 'Open';
        if(data[i][0] >= 55 && data[i][1] >7 ){
            arr[i] = 'Senior';
        }
    }
    return arr;
}

const openOrSenior = data => data.map(([age, handicap]) => (
    age >= 55 && handicap > 7 ? 'Senior' : 'Open'
));

function openOrSenior(data){
    return data.map(d=>{return d[0]>54&&d[1]>7?'Senior':'Open'})
}

const openOrSenior = (data) => data.map(([_, $]) => _ >= 55 && $ > 7 ? 'Senior' : 'Open')// not for 7kyu

function openOrSenior(data){
    return data.map(a=>(a[0]>=55&&a[1]>7)?'Senior':'Open');
}

const openOrSenior = data => data.map(el => (el[0] >= 55 && el[1] > 7) ? 'Senior' : 'Open');

function openOrSenior(data){
    let result = [];
    for (let i = 0; i < data.length; i++ ) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    }
    return result;
}

function openOrSenior(data){
    return data.map( ([age, handicap]) =>{
        if( age >=55 && handicap >7){
            return 'Senior';
        } else {
            return 'Open';
        }
    });
}

describe("Basic tests", () => {
    it("Fixed tests", () => {
        assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
        assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
        assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
    });
});
