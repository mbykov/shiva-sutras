var shiva = require('../shiva');

var pratyahara = 'अच्';
// pratyāhāras - 'अच्'
// anubandha - [it]

var sutra = shiva('इक्', true);
sh = sutra.result.toString();
log('IK', sh);

var sutra = shiva('इक्');
sh = sutra.result.toString();
log('IK', sh);

var sutra = shiva('हल्');
sh = sutra.result.toString();
log('hal - all consonants', sh);

var sutra = shiva('अच्');
sh = sutra.result.toString();
log('ac - all vowels', sh);

var sutra = shiva('झल्');
sh = sutra.result.toString();
log('jhal - stops and śavarga', sh);

var sutra = shiva('झश्');
sh = sutra.result.toString();
log('jhaś - voiced consonants', sh);

var sutra = shiva('झष्');
sh = sutra.result.toString();
log('jhaṣ - voiced aspirated consonants', sh);

var sutra = shiva('यण्');
sh = sutra.result.toString();
log('yaṇ - semivowels', sh);

var sutra = shiva('शल्');
sh = sutra.result.toString();
log('śal - śavarga', sh);

var sutra = shiva('खय्');
sh = sutra.result.toString();
log('khay - unvoiced stops', sh);

var sutra = shiva('झश्').add('अच्', true);
sh = sutra.result.toString();
log('jhaś+ac - voiced consonants + vowels', sh);

var sutra = shiva('झश्');
sh = sutra.result.toString();
log('jhaS - voiced stops', sh);

//घश voiced stops

// тесты здесь
// http://learnsanskrit.org/panini/shivasutras
// BUGS: у ла отвалился ом, ва с виграхой






function log () { console.log.apply(console, arguments) }
