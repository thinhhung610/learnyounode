var fs = require('fs');
var path = process.argv[2];
if(path) {
	var file = fs.readFileSync(path, 'utf8');
	console.log(file.toString().split('\n').length - 1);	
}
