// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
//     If you want to know more: http://en.wikipedia.org/wiki/DNA
//
//     In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
//     More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//
//     Example: (input --> output)
//
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

var pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
}

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}

function DNAStrand(dna){
    var table = {
        C : 'G',
        G : 'C',
        A : 'T',
        T : 'A'
    };

    return dna.split('').map(function(cv) {
        return table[cv];
    }).join('');
}

function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}

const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);

function DNAStrand(dna){
    return dna.replace(/[ACGT]/g, function(l){ return pairs[l] });
}

var pairs = {
    A:'T',
    T:'A',
    G:'C',
    C:'G'
};

function DNAStrand(dna){
    return dna.split('').map(str => {
        switch (str) {
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            case 'T':
                return 'A';
            case 'A':
                return 'T';
            default:
                throw new Error('Not a valid DNA sequence');
        }
    }).join('');
}

const DNAStrand = dna =>
    dna.replace(/[ATCG]/g, val => ({A : `T`, T : `A`, C : `G`, G : `C`})[val]);

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
        assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
        assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")
    })
})
