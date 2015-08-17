// Shiva-sutras
// http://www.youtube.com/watch?v=HAbmM7gfpP8
//

module.exports = shiva; //

var Shivasutra = 'अ इ उ ण् ऋ ऌ क् ए ओ ङ् ऐ औ च् ह य व र ट् ल ण् ञ म ङ ण न म् झ भ ञ् घ ढ ध ष् ज ब ग ड द श् ख फ छ ठ थ च ट त व् क प य् श ष स र् ह ल्';
var Anubandha = 'ण् क् ङ् च् ट् ण् म् ञ् ष् श् व् य् र् ल्';

var Vowel = {'अ': '',  'आ':'ा',   'इ': 'ि', 'ई':'ी', 'उ': 'ु',  'ऊ': 'ू', 'ऋ': 'ृ',  'ॠ': 'ॄ',  'ऌ': 'ॢ',  'ए': 'े',    'ऐ': 'ै',    'ओ': 'ो',    'औ': 'ौ' };

//
var Dirgha = {'अ': 'आ', 'इ': 'ई', 'उ': 'ऊ', 'ऋ': 'ॠ'}; // ? L=>R ? make test g=6.101.+_15_, missed in ligaDirgha, // , 'ऌ': 'ॠ'
var ligaDirgha = {'ा': 'आ', 'ि': 'ई', 'ी': 'ई', 'ु': 'ऊ', 'ू': 'ऊ', 'ृ': 'ॠ', 'ॄ': 'ॠ', 'ॢ': 'ॠ'}; // l-dirgha=F
var Hrasva = {'आ': 'अ', 'ई': 'इ', 'ऊ': 'उ', 'ॠ': 'ऋ'};
var ligaHrasva = {'ा': 'अ', 'ि': 'इ', 'ी': 'इ', 'ु': 'उ', 'ू': 'उ', 'ृ': 'ऋ', 'ॄ': 'ऋ'};
// TODO: constable

function shiva(key) {
    if (!(this instanceof shiva)) return new shiva(key);
    var sh = (typeof(key) == 'string') ? shivasutra(key) : key;
    this.result = sh;
    return this;
}

shiva.prototype.end = function() {
    return this.result;
}

shiva.prototype.toString = function() {
    return this.result.toString();
}

/*
  TODO: constable
*/
shiva.prototype.dirgha = function() {
    var dirgha = [];
    this.result.forEach(function(sym) {
        if (!Vowel[sym] && sym != 'अ') return;
        if (Dirgha[sym]) dirgha.push(Dirgha[sym]);
        else if (Hrasva[sym]) dirgha.push(sym);
        else if (Vowel[sym]) dirgha.push(sym);
        // else if (ligaDirgha[sym]) dirgha.push(ligaDirgha[sym]);
    });
    // this.result = uniq(dirgha);
    this.result = dirgha;
    return this;
}

shiva.prototype.hrasva = function() {
    var hrasva = [];
    this.result.forEach(function(sym) {
        if (Hrasva[sym]) hrasva.push(Hrasva[sym]);
        else if (Dirgha[sym]) hrasva.push(sym);
        else if (ligaHrasva[sym]) hrasva.push(ligaHrasva[sym]);
    });
    this.result = hrasva;
    return this;
}


shiva.prototype.liga = function() {
    this.result = liga(this.result);
    return this;
}

shiva.prototype.mult =
    shiva.prototype.shiva = function(key) {
    var result = [];
    var sh = (type(key) == 'array') ? key : shivasutra(key);
        this.result.forEach(function(a) {
            sh.forEach(function(b) {
                result.push(a+b);
            });
        });
        this.result = result;
        return this;
    }

//
shiva.prototype.del = function(key) {
    var sh = (typeof(key) == 'string') ? shivasutra(key) : key;
    this.result = diff(this.result, sh);
    return this;
}

//
shiva.prototype.add = function(key) {
    var sh = (typeof(key) == 'string') ? shivasutra(key) : key;
    var sum = this.result.concat(sh.result);
    this.result = uniq(sum);
    return this;
}

function shivasutra(key) {
    var karr = key.split('');
    var pratyahara = karr.shift();
    var it = karr.join('');
    var sharr = Shivasutra.split(' ');
    var result = sharr.slice(sharr.indexOf(pratyahara));
    var result = result.slice(0, result.indexOf(it));
    if (result.length < 1) return false;
    var its = Anubandha.split(' ');
    its.forEach(function(it) {
        while (result.indexOf(it) !== -1) {
            result.splice(result.indexOf(it), 1);
        }
    });
    return result;
}

function liga(arr) {
    var result = arr.map(function(sym) {
        if (Vowel[sym] == '') return '';
        return Vowel[sym] ? Vowel[sym] : sym;
    });
    return result;
}



//http://stackoverflow.com/questions/1187518/javascript-array-difference
function diff(result, a) {
    return result.filter(function(i) {return a.indexOf(i) < 0 });
};

function uniq(arr) {
    return arr.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    });
};
