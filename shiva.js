// Shiva-sutras
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

var Shivasutra = 'अ इ उ ण् ऋ ऌ क् ए ओ ङ् ऐ औ च् ह य व र ट् ल ण् ञ म ङ ण न म् झ भ ञ् घ ढ ध ष् ज ब ग ड द श् ख फ छ ठ थ च ट त व् क प य् श ष स र् ह ल्';
var Anubandha = 'ण् क् ङ् च् ट् ण् म् ञ् ष् श् व् य् र् ल्';

var Yoga = {'अ': '',  'आ':'ा',   'इ': 'ि', 'ई':'ी', 'उ': 'ु',   'ऊ':'ू',   'ऋ': 'ृ',  'ॠ': 'ॄ',  'ऌ': 'ॢ',  'ए': 'े',    'ऐ': 'ै',    'ओ': 'ो',    'औ': 'ौ' };

function shiva(key) {
    if (!(this instanceof shiva)) return new shiva(key);
    var sh = (type(key) == 'array') ? key : shivasutra(key);
    this.result = sh;
    return this;
}

shiva.prototype.end = function() {
    return this.result;
}

shiva.prototype.toString = function() {
    return this.result.toString();
}

shiva.prototype.liga = function() {
    this.result = yoga(this.result);
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

shiva.prototype.dirgha = function(str) {
    return this;
}

//http://stackoverflow.com/questions/1187518/javascript-array-difference
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};


function log() { console.log.apply(console, arguments) }


// ===============

// var Shivasutra = 'अ आ इ ई उ ऊ ण् ऋ ॠ ऌ क् ए ऐ ओ औ ङ् ऐ औ च् ह य व र ट् ल ण् ञ म ङ ण न म् झ भ ञ् घ ढ ध ष् ज ब ग ड द श् ख फ छ ठ थ च ट त व् क प य् श ष स र् ह ल्';
//Shivasutra = 'अ आ इ ई उ ऊ ण् ऋ ॠ ऌ क् ए ऐ ओ औ ङ् ऐ औ च् ह य व र ट् लँ ण् ञ म ङ ण न म् झ भ ञ् घ ढ ध ष् ज ब ग ड द श् ख फ छ ठ थ च ट त व् क प य् श ष स र् ह ल्';
