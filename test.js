var fs = require("fs");
var zlib = require('zlib');
var path = require("path");

var sdir = './outp'

//console.log("Unzip archive '%s'", zfile);
//var azip = new AdmZip(zfile);
//azip.extractAllTo(sdir, true);

sdir = path.resolve(sdir);

var inp = fs.createReadStream('./win32/tcejdb-1.1.25-mingw32-i686.dll.gz');
var out = fs.createWriteStream('./tcejdbdll.dll');

inp.pipe(zlib.createGunzip()).pipe(out).on('close', function() {
	console.log("we're done!");
});



