var http = require('http');
var bl = require('bl');
var resData = [];

for(var i = 2; i < 5; i++) {
	var path = process.argv[i];

	http.get(path, function(res) {

		res.setEncoding('utf8');
		res.on('data', function(data) {
			resData.push({
				'order' : i,
				'data'	: data
			});
		});

		res.pipe(bl(function(err, data) {
			if(err) throw err;

			resData.push({
				'order' : i,
				'data'	: data
			});

			if(resData.length === 3) {
				resData.sort(function(a,b) {
					if(a.order > b.order) {
						return 1;
					}
					if(a.order < b.order) {
						return -1;
					}
					return 0;
				});
				resData.forEach(function(el) {
					console.log(123);
					console.log(el['data']);
				});
			}
		}));

	}).on('error', function(e) {
		console.log(`Got error: ${e.message}`);
	});
}