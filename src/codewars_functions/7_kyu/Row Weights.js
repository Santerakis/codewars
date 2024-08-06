Scenario

Several people are standing in a row divided into two teams.
    The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
    Task

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes

Array size is at least 1.
All numbers will be positive.
    Input >> Output Examples

rowWeights([13, 27, 49])  ==>  return (62, 27)

Explanation:

    The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

Explanation:

    The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)

Explanation:

    The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);

    return [t1, t2]
}

function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
        i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}

rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])

function rowWeights(array){
    var team1 = 0;
    var team2 = 0;
    array.forEach(function(element,index) {
        if(index % 2 == 0){
            team1 += element;
        }else{
            team2 += element;
        }
    });
    return [team1, team2];
}

const rowWeights = arr => arr.reduce((a, w, i) => (a[i%2]+=w, a), [0, 0]);

function rowWeights(array) {
    return array.reduce((t, x, i) => {
        t[i % 2] += x;
        return t;
    }, [0, 0]);
}

function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            sum1 += array[i];
        } else {
            sum2 += array[i];
        }
    }

    return [sum1, sum2];
}

function rowWeights(people){
    /*
      Better have maintainable code
      with an efficient loop
      than ugly one-liner
    */
    var firstTeam = 0,
        secondTeam = 0,
        isFirst = true;
    for(var i = 0, max = people.length; i < max; i++){
        if(isFirst){
            firstTeam += people[i];
        }else{
            secondTeam += people[i];
        }
        isFirst = !isFirst;
    }
    return [firstTeam, secondTeam];
}

function rowWeights(array){
    let team1 = array.reduce((sum,x,i)=>i%2==0? sum=sum+x:sum,0);
    let team2 = array.reduce((sum,x,i)=>i%2!=0? sum=sum+x:sum,0);

    return [team1, team2];
}

function rowWeights(array) {
    return array.reduce((a, b, i) => (a[i%2] += b, a), [0, 0]);
}

const rowWeights = array =>
    array.reduce((pre, val, idx) => (pre[idx&1] += val, pre), [0, 0]);

function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;
    for(let i in array) {
        if (i % 2 == 0) {
            sum1 += array[i]
        } else if (i % 2 != 0) {
            sum2 += array[i]
        }
    }
    return [sum1, sum2]
}

function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            sum1 += array[i]
        } else if (i % 2 != 0) {
            sum2 += array[i]
        }
    }
    return [sum1, sum2]
}

// thanks, cool task
const rowWeights = ( arr ) => [arr.filter((el, i)=> i % 2 === 0 ).reduce((a, b)=> a + b,0),
    arr.filter((el, i)=> i % 2 ).reduce((a, b)=> a + b, 0)]

// thanks, cool task
const rowWeights = ( arr ) => [arr.filter((el, i)=> i % 2 === 0 ).reduce((a, b)=> a + b,0),
    arr.filter((el, i)=> i % 2 ).reduce((a, b)=> a + b, 0)]

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(rowWeights([80]), [80,0]);
        assert.deepEqual(rowWeights([100,50]), [100,50]);
        assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
        assert.deepEqual(rowWeights([13,27,49]), [62,27]);
        assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
        assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);
        assert.deepEqual(rowWeights([0]), [0,0]);
        assert.deepEqual(rowWeights([100,51,50,100]), [150,151]);
        assert.deepEqual(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
        assert.deepEqual(rowWeights([0,1,0]), [0,1]);
    })
})
