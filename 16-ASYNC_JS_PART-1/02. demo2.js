function process() {
	console.log('Start');
	setTimeout(() => {
		console.log('Executed Some Task');
	}, 3000);
	for (let i = 0; i < 100000000000000; i++) {
		//Some Task
	}
	console.log('End');
	console.log('TATA');
}
process();
