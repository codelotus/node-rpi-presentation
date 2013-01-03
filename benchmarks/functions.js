var Benchmark = require('benchmark').Benchmark;
var suite = new Benchmark.Suite;
var fs = require('fs');

// add tests
suite.add('RegExp#test', function() {
    /o/.test('Hello World!');
})
.add('String#indexOf', function() {
    'Hello World!'.indexOf('o') > -1;
})
.add('FileSystem#readdir', function() {
    fs.readdir('.', function(err, files){
        files.size > 0;
    });
})
// add listeners
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true });
