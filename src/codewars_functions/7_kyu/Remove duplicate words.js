// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
//     Example:
//
// Input:
//
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
//     'alpha beta gamma delta'

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

const removeDuplicateWords = s => {
    const set = new Set(s.split(' '));
    return Array.from(set).join(' ');
}

function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ');
}

const removeDuplicateWords = s => {
    let arr = s.split(" ");
    let sFiltered = [];
    for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)
    return sFiltered.join(" ")
}

function removeDuplicateWords (s) {
    return s.split(' ').filter((n, i, s) => {
        return s.indexOf(n) === i;
    }).join(' ');
}

const removeDuplicateWords = s => s.split(' ').filter((w,i,arr)=>arr.indexOf(w)==i).join(' ');

const removeDuplicateWords = s => {
    let cleanArr = [];
    s.split(' ').forEach(current => {
        if(!cleanArr.includes(current)){
            cleanArr.push(current);
        }
    });
    return cleanArr.join(' ');
};

function removeDuplicateWords (s) {
    let unique = new Set(s.split(' '));
    return [...unique].join(' ');
}

const removeDuplicateWords = s => [...s.split` `.reduce((s, w) => s.add(w), new Set())].join` `;

const removeDuplicateWords = (alphabeta) => {
    return alphabeta.split(' ').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    }).join(' ');
}

function removeDuplicateWords (s) {
    let arr = s.split(' ');
    return [...new Set(arr)].join(' ')
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
    });
});