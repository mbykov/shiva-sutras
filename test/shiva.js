//
try {
    var shiva = require('shiva-sutras');
} catch (err) {
    var shiva = require('../shiva');
}

describe('shiva-sutras', function() {
    describe('methods', function(){
        it('ik - liga() - form - i, u, r. l.', function() {
            var sutra = shiva('इक्').liga().toString();
            sutra.should.equal('ि,ु,ृ,ॢ');
        });
        it('ac - dirgha() - vowels', function() {
            var sutra = shiva('अच्').dirgha().toString();
            sutra.should.equal('आ,ई,ऊ,ॠ,ऌ,ए,ओ,ऐ,औ');
        });
        it('acc - add() - all vowels', function() {
            var sutra = shiva('अच्').add(shiva('अच्').dirgha()).result.sort().toString();
            sutra.should.equal('अ,आ,इ,ई,उ,ऊ,ऋ,ऌ,ए,ऐ,ओ,औ,ॠ');
        });
    });

});

var tests = [
    {descr: 'ik - i, u, r. l.',
     pratyahara: 'इक्',
     result: 'इ,उ,ऋ,ऌ'
    },
    {descr: 'ac - all vowels',
     pratyahara: 'अच्',
     result: 'अ,इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ'
    },
    {descr: 'hal - all consonants',
     pratyahara: 'हल्',
     result: 'ह,य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह'
    },
    {descr: 'jhal - stops and śavarga',
     pratyahara: 'झल्',
     result: 'झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह'
    },
    {descr: 'jhaś - voiced consonants',
     pratyahara: 'झश्',
     result: 'झ,भ,घ,ढ,ध,ज,ब,ग,ड,द'
    },
    {descr: 'jhaṣ - voiced aspirated consonants',
     pratyahara: 'झष्',
     result: 'झ,भ,घ,ढ,ध'
    },
    {descr: 'yaṇ - semivowels',
     pratyahara: 'यण्',
     result: 'य,व,र,ल'
    },
    {descr: 'śal - śavarga',
     pratyahara: 'शल',
     result: 'श,ष,स,ह'
    },
    {descr: 'aR - a, i, u', // FIXME: <<<====================
     pratyahara: 'अण्',
     result: 'अ,इ,उ' // अ,इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ,ह,य,व,र,ल
    },
    {descr: 'aw',
     pratyahara: 'अट्',
     result: 'अ,इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ,ह,य,व,र'
    },
    {descr: '',
     pratyahara: '',
     result: ''
    },
    {descr: '',
     pratyahara: '',
     result: ''
    },
    {descr: '',
     pratyahara: '',
     result: ''
    },
];


var sutra;
describe('shiva-sutras', function() {
    describe('pratyaharas', function(){
        tests.forEach(function(test) {
            if (test.descr == '') return;
            var descr = [test.pratyahara, test.descr].join(' - ');
            it(descr, function() {
                // log('====', test.pratyahara, '===', test.result)
                sutra = shiva(test.pratyahara).toString();
                sutra.should.equal(test.result);
            });
        });
    });
});


function log () { console.log.apply(console, arguments) }
