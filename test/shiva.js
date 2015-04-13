//
try {
    var shiva = require('shiva-sutras');
} catch (err) {
    var shiva = require('../shiva');
}

describe('shiva-sutras', function() {
    describe('pratyaharas', function(){
        it('ik - i, u, r. l.', function() {
            var sutra = shiva('इक्').toString();
            // sutra.should.equal('इ,ई,उ,ऊ,ऋ,ॠ,ऌ');
            sutra.should.equal('इ,उ,ऋ,ऌ');
        });
        it('ik - liga form - i, u, r. l.', function() {
            var sutra = shiva('इक्').liga().toString();
            sutra.should.equal('ि,ु,ृ,ॢ');
        });
        it('ac - dirgha vowels', function() {
            var sutra = shiva('अच्', true).dirgha.toString();
            sutra.should.equal('अ,आ,इ,ई,उ,ऊ,ऋ,ॠ,ऌ,ए,ऐ,ओ,औ,ऐ,औ');
        });
        it('ac - all vowels', function() {
            var sutra = shiva('अच्', true).result.toString();
            sutra.should.equal('अ,आ,इ,ई,उ,ऊ,ऋ,ॠ,ऌ,ए,ऐ,ओ,औ,ऐ,औ');
        });
        it('ac - all vowels - liga', function() {
            var sutra = shiva('अच्').result.toString();
            sutra.should.equal(',ा,ि,ी,ु,ू,ृ,ॄ,ॢ,े,ै,ो,ौ,ै,ौ');
        });
        it('hal - all consonants', function() {
            var sutra = shiva('हल्').result.toString();
            sutra.should.equal('ह,य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह');
        });
        it('jhal - stops and śavarga', function() {
            var sutra = shiva('झल्').result.toString();
            sutra.should.equal('झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह');
        });
        it('jhaś - voiced consonants', function() {
            var sutra = shiva('झश्').result.toString();
            sutra.should.equal('झ,भ,घ,ढ,ध,ज,ब,ग,ड,द');
        });
        it('jhaṣ - voiced aspirated consonants', function() {
            var sutra = shiva('झष्').result.toString();
            sutra.should.equal('झ,भ,घ,ढ,ध');
        });
        it('yaṇ - semivowels', function() {
            var sutra = shiva('यण्').result.toString();
            sutra.should.equal('य,व,र,ल');
        });
        it('śal - śavarga', function() {
            var sutra = shiva('शल').result.toString();
            sutra.should.equal('श,ष,स,ह');
        });
        // it('', function() {
        //     var sutra = shiva('').result.toString();
        //     sutra.should.equal('');
        // });
    })

})

function log () { console.log.apply(console, arguments) }
