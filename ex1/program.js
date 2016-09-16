var sum = 0;
for(var i = process.argv.length - 1; i > 1; i--) {
	var currentArgv = parseInt(process.argv[i]);
	if(typeof currentArgv === 'number' && !isNaN(currentArgv)) {
		sum += currentArgv;
	} else {
		console.log('Your argument invalid');
	}
}
console.log(sum);
