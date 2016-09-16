const net = require('net');
const server = net.createServer((c) => {
	c.write(fDate(new Date()) + '\r\n');
	c.pipe(c);
	c.end();
});

var fDate = function(date) {
	var year = date.getFullYear(),
		month = date.getMonth(),
		day = date.getDate(),
		hour = date.getHours(),
		minute = date.getMinutes();

	return year + '-' + (month < 9 ? '0' + (month + 1) : month) + '-' + (day < 10 ? '0' + day : day) + ' ' + hour + ':' + minute;
};

server.on('error', (e) => {
	throw e;
});

server.listen(process.argv[2]);
