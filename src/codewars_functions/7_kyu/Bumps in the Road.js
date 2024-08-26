// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
//
//     Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';

const bump = $ => ($.match(/n/g) || []).length <= 15 ? 'Woohoo!' : 'Car Dead'

function bump(str)
{
    return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}

const bump = (road, bumps = 0, limit = 15) => {
    for(let i = 0; i < road.length; i++) {
        if(road[i] === 'n') {
            bumps++;
            if(bumps > limit) return 'Car Dead';
        }
    }
    return 'Woohoo!';
}

function bump(x){
    x=x.match(/n/ig);
    return x?(x.length>15?"Car Dead":"Woohoo!"):"Woohoo!";
}

const bump = x =>
    --x.split(`n`).length > 15 ? `Car Dead` : `Woohoo!`;

function bump(x){
    return x.replace(/_/g,'').length>15 ? 'Car Dead' : 'Woohoo!'
}

function bump(x){
    return x.split`n`.length<17?'Woohoo!':'Car Dead'
}

function bump(x){
    return x.split('').filter( road => road == 'n' ).length <= 15 ? 'Woohoo!' : 'Car Dead'
}

describe("Bumps in the Road", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(bump("n"), "Woohoo!");
        assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
        assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
        assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
        assert.strictEqual(bump("______n___n_"), "Woohoo!");
    });
});