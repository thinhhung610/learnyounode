var fs = require('fs');
var path = process.argv[2];

if(path) {
	var callback = function(err, data) {
		if(err) throw err;
		console.log(data.toString().split('\n').length - 1);
	};

	fs.readFile(path, 'utf8', callback);
}
