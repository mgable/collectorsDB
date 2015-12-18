"use strict";

var fs = require('fs'),
	file = process.argv[2];

var contents = JSON.parse(fs.readFileSync(file));

console.info(contents);

contents.forEach(function(v,i){
	var src = {}
	src.original = v.src;
	v.src = src
});

fs.writeFileSync(file, JSON.stringify(contents));