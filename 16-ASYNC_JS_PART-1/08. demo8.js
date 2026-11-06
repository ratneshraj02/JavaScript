function process1() {
	console.log('start');
	setTimeout(function exec() {
		console.log('Executed Some task');
	}, 0);

	for (let i = 0; i < 10000000000; i++) {}

	console.log('End');
}

process1(); // start end executed some task
