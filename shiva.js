// Shiva-sutrah
// http://www.youtube.com/watch?v=HAbmM7gfpP8
//

var map;
var each;
var type;

try {
    map = require('map-component');
    each = require('each-component');
    type = require('type-component');
} catch (err) {
    map = require('map');
    each = require('each');
    type = require('type');
}

module.exports = shiva; //

var Shivasutra = 'अ आ इ ई उ ऊ ण् ऋ ॠ ऌ क् ए ऐ ओ औ ङ् ऐ औ च् ह य व र ट् ल ण् ञ म ङ ण न म् झ भ ञ् घ ढ ध ष् ज ब ग ड द श् ख फ छ ठ थ च ट त व् क प य् श ष स र् ह ल्';
//Shivasutra = 'अ आ इ ई उ ऊ ण् ऋ ॠ ऌ क् ए ऐ ओ औ ङ् ऐ औ च् ह य व र ट् लँ ण् ञ म ङ ण न म् झ भ ञ् घ ढ ध ष् ज ब ग ड द श् ख फ छ ठ थ च ट त व् क प य् श ष स र् ह ल्';
var Anubandha = 'ण् क् ङ् च् ट् ण् म् ञ् ष् श् व् य् र् ल्';
// FIXME: почему L с муном?

var Yoga = {'अ': '',  'आ':'ा',   'इ': 'ि', 'ई':'ी', 'उ': 'ु',   'ऊ':'ू',   'ऋ': 'ृ',  'ॠ': 'ॄ',  'ऌ': 'ॢ',  'ए': 'े',    'ऐ': 'ै',    'ओ': 'ो',    'औ': 'ौ' };
//var Dirgha = {'अ': 'आ',    'इ': 'ई',    'उ': 'ऊ',    'ऋ': 'ॠ'}; //   'ए': 'ऐ',    'ऐ': '',    'ओ': '',    'औ': '' };
// Guna, Vrddhi?

function shiva(key, liga) {
    if (!(this instanceof shiva)) return new shiva(key, liga);
    var sh = (type(key) == 'array') ? key : shivasutra(key);
    if (!liga) sh = yoga(sh);
    this.result = sh;
    return this;
}

shiva.prototype.mult =
    shiva.prototype.shiva = function(key, liga) {
    var result = [];
    var sh = (type(key) == 'array') ? key : shivasutra(key);
    if (!liga) sh = yoga(sh);
    each(this.result, function(a) {
        each(sh, function(b) {
            result.push(a+b);
        });
    });
    this.result = result;
    return this;
}

shiva.prototype.del = function(key, liga) {
    var sh = (type(key) == 'array') ? key : shivasutra(key);
    if (!liga) sh = yoga(sh);
    var result = this.result.diff(sh);
    this.result = result;
    return this;
}

shiva.prototype.add = function(key, liga) {
    var sh = (type(key) == 'array') ? key : shivasutra(key);
    if (!liga) sh = yoga(sh);
    var result = this.result.concat(sh);
    this.result = result;
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
    each(its, function(it) {
        while (result.indexOf(it) !== -1) {
            result.splice(result.indexOf(it), 1);
        }
    });
    return result;
}

function yoga(arr) {
    // заменяет гласные на лиги
    var result = map(arr, function(sym) {
        if (Yoga[sym] == '') return '';
        //if (Yoga[sym]) return(Yoga[sym] || sym);
        return Yoga[sym] ? Yoga[sym] : sym;
    });
    return result;
}


shiva.prototype.yoga = function() {
    this.result = yoga(this.result);
    return this;
}

// FIXME: или убрать все короткие, или преобразовать короткие в длинные ?
shiva.prototype.dirgha = function(str) {
    //log('DIRGHA', str);
    return this;
}

http://stackoverflow.com/questions/1187518/javascript-array-difference
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};


function log() { console.log.apply(console, arguments) }

/*
1. a i u ṇ - 1 अ इ उ ण् ।
2. ṛ ḷ k - 2 ऋ ऌ क् ।
3. e o ṅ - 3 ए ओ ङ् ।
4. ai au c - 4 ऐ औ च् ।
5. ha ya va ra ṭ - 5 ह य व र ट् ।
6. la ṇ - 6 लँ ण् ।
7. ña ma ṅa ṇa na m - 7 ञ म ङ ण न म् ।
8. jha bha ñ - 8 झ भ ञ् ।
9. gha ḍha dha ṣ - 9 घ ढ ध ष् ।
10. ja ba ga ḍa da ś - 10 ज ब ग ड द श् ।
11. kha pha cha ṭha tha ca ṭa ta v - 11 ख फ छ ठ थ च ट त व् ।
12. ka pa y - 12 क प य् ।
13. śa ṣa sa r - 13 श ष स र् ।
14. ha l - 14 ह ल् ।

http://en.wikipedia.org/wiki/Shiva_Sutras
http://www.youtube.com/watch?v=HAbmM7gfpP8

to refer to the palatals c ch j jh he uses cU



var shivObj = {
'ण्': 'अ इ उ',
'क्': 'ऋ ऌ',
'ङ्': 'ए ओ',
'च्': 'ऐ औ',
'ट्': 'ह य व र',
'ण्': 'लँ',
'म्': 'ञ म ङ ण न',
'ञ्': 'झ भ',
'ष्': 'घ ढ ध',
'श्': 'ज ब ग ड द',
'व्': 'ख फ छ ठ थ च ट त',
'य्': 'क प',
'र्': 'श ष स',
'ल्': 'ह'
}





*/
