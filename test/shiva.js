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
    {descr: 'am',
     pratyahara: 'अम्',
     result: 'अ,इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ,ह,य,व,र,ल,ञ,म,ङ,ण,न'
    },
    {descr: 'aS',
     pratyahara: 'अश्',
     result: 'अ,इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ,ह,य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द'
    },
    {descr: 'al - the complete संस्कृत alphabet',
     pratyahara: 'अल्',
     result: 'अ,इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ,ह,य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह'
    },

    {descr: 'il',
     pratyahara: 'इल्',
     result: 'इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ,ह,य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह'
    },
    {descr: 'ic - vowels except a',
     pratyahara: 'इच्',
     result: 'इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ'
    },
    // {descr: 'iR', // FIXME - считать нужно до второго R - ण्
    //  pratyahara: 'इण्',
    //  result: 'इ,उ,ऋ,ऌ,इ,उ,ऋ,ऌ,ए,ओ,ऐ,औ,ह,य,व,र,ल'
    // },
    {descr: 'uk',
     pratyahara: 'उक्',
     result: 'उ,ऋ,ऌ'
    },
    {descr: 'eN -guna diphtongs',
     pratyahara: 'एङ्',
     result: 'ए,ओ'
    },
    {descr: 'ec - diphtongs',
     pratyahara: 'एच्',
     result: 'ए,ओ,ऐ,औ'
    },
    {descr: 'Ec - vriddhi diphtongs',
     pratyahara: 'ऐच्',
     result: 'ऐ,औ'
    },
    {descr: 'haS - soft consonants',
     pratyahara: 'हश्',
     result: 'ह,य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द'
    },
    {descr: 'hal - all consonants',
     pratyahara: 'हल्',
     result: 'ह,य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह'
    },
    {descr: 'yaR-yaṇ - semivowels',
     pratyahara: 'यण्',
     result: 'य,व,र,ल'
    },
    {descr: 'yam',
     pratyahara: 'यम्',
     result: 'य,व,र,ल,ञ,म,ङ,ण,न'
    },
    {descr: 'yaN',
     pratyahara: 'यञ्',
     result: 'य,व,र,ल,ञ,म,ङ,ण,न,झ,भ'
    },
    {descr: 'yay',
     pratyahara: 'यय्',
     result: 'य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प'
    },

    {descr: 'yar',
     pratyahara: 'यर्',
     result: 'य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स'
    },
    {descr: 'yaS',
     pratyahara: 'यश्',
     result: 'य,व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द'
    },
    {descr: 'val',
     pratyahara: 'वल्',
     result: 'व,र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह'
    },
    {descr: 'ral',
     pratyahara: 'रल्',
     result: 'र,ल,ञ,म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह'
    },
    {descr: 'may',
     pratyahara: 'मय्',
     result: 'म,ङ,ण,न,झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प'
    },
    {descr: 'Nam',
     pratyahara: 'ङम्',
     result: 'ङ,ण,न'
    },
    {descr: 'jaz',
     pratyahara: 'झष्',
     result: 'झ,भ,घ,ढ,ध'
    },
    {descr: 'JaS',
     pratyahara: 'झश्',
     result: 'झ,भ,घ,ढ,ध,ज,ब,ग,ड,द'
    },
    {descr: 'Jay',
     pratyahara: 'झय्',
     result: 'झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प'
    },
    {descr: 'Jar',
     pratyahara: 'झर्',
     result: 'झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स'
    },

    {descr: 'Jal',
     pratyahara: 'झल्',
     result: 'झ,भ,घ,ढ,ध,ज,ब,ग,ड,द,ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स,ह'
    },
    {descr: 'Baz',
     pratyahara: 'भष्',
     result: 'भ,घ,ढ,ध'
    },
    {descr: 'jaS - soft unaspirate',
     pratyahara: 'जश्',
     result: 'ज,ब,ग,ड,द'
    },
    {descr: 'baS',
     pratyahara: 'बश्',
     result: 'ब,ग,ड,द'
    },
    {descr: 'Kay',
     pratyahara: 'खय्',
     result: 'ख,फ,छ,ठ,थ,च,ट,त,क,प'
    },
    {descr: 'Kar - hard consonents',
     pratyahara: 'खर्',
     result: 'ख,फ,छ,ठ,थ,च,ट,त,क,प,श,ष,स'
    },
    {descr: 'Cav',
     pratyahara: 'छव्',
     result: 'छ,ठ,थ,च,ट,त'
    },
    {descr: 'cay',
     pratyahara: 'चय्',
     result: 'च,ट,त,क,प'
    },
    {descr: 'car',
     pratyahara: 'चर्',
     result: 'च,ट,त,क,प,श,ष,स'
    },
    {descr: 'Sar',
     pratyahara: 'शर्',
     result: 'श,ष,स'
    },
    {descr: 'Sal',
     pratyahara: 'शल्',
     result: 'श,ष,स,ह'
    },
    {descr: 'rR',
     pratyahara: 'रण्',
     result: 'र,ल'
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
            var descr = [test.pratyahara, test.descr, test.result].join(' - ');
            it(descr, function() {
                // log('====', test.pratyahara, '===', test.result)
                sutra = shiva(test.pratyahara).toString();
                sutra.should.equal(test.result);
            });
        });
    });
});


function log () { console.log.apply(console, arguments) }
