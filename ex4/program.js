var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

if(path && ext) {
	var callback = function(err, files){
		if(err) throw err;
		var regex = new RegExp('(.' + ext + ')$');
		var arr = files.filter(function(file) {
			return regex.test(file);
		});
		console.log(arr.join('\n'));
	};

	fs.readdir(path, callback);
}
