var fs = require("fs");
var zlib = require('zlib');
var path = require("path");

var sdir = './outp'

zfile = process.argv[2];

/*
if ( !zfile ) {
  process.exit(0);
}
*/

console.log("Unzip archive '%s'", zfile);
//var azip = new AdmZip(zfile);
//azip.extractAllTo(sdir, true);

sdir = path.resolve(sdir);

var inp = fs.createReadStream('./tcejdbdll.dll');
var out = fs.createWriteStream('./tcejdbdll.dll.gz');

inp.pipe(zlib.createGzip()).pipe(out).on('close', function() {
    console.log("we're done!");
    
	sdir = path.resolve(sdir);

	var inp = fs.createReadStream('./tcejdbdll.dll.gz');
	var out = fs.createWriteStream('./tcejdbdll.dll.asdf');

	inp.pipe(zlib.createGunzip()).pipe(out).on('end', function() {
		console.log("we're done!");
	});
    
});



