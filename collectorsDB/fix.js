"use strict";

var fs = require('fs'),
	file = process.argv[2];

var contents = JSON.parse(fs.readFileSync(file));

//console.info(contents);

contents.forEach(function(v,i){
	v.id = generateUID();
});

console.info(contents);

fs.writeFileSync(file, JSON.stringify(contents));


function generateUID() {
	return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
}