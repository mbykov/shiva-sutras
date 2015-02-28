# node.js and browser shiva-sutras - शिवसूत्राणि

## Installation

With node.js:

````bash
$ npm install shiva-sutras
````
or with [component](http://github.com/component/component)

````bash
$ component install mbykov/shiva-sutras
````

Or as standalone version:

````html
<script src="shiva.js"></script>
````

## API

````javascript
var vowels = shiva('अच्').result;
var semivowels = shiva('यण्').result;
var consonants = shiva('हल्').result;
var nasals = shiva('ञम्').result; // ञ म ङ ण न म्
var voiced_asp = shiva('झष्').result;
var unvoiced_asp = shiva('खव्').del('चव्').result;
var asps = var voiced_asp.concat(var unvoiced_asp).sort();
var voiced_unasp = shiva('जश्').result.sort();
var unvoiced_unasp = shiva('चय्').result.sort();
````


View more examples in [test suite](https://github.com/mbykov/shiva-sutras/tree/master/test/node)

## Running node tests

````bash
$ make test
````

## Running browser tests

open text/index.html

## License

  GNU GPL
