try {
	function test_1() {
		print('hello');
		const print = (string) => { console.log(string); }
	}
	test_1();
} catch (error) {
	console.log('test_1', error)
}

try {
	function test_2() {
		print('hello');
		function print(string) { console.log(string); }
	}
	test_2();
} catch (error) {
	console.log('test_2', error)
}

try {
	function test_3() {
		print('hello');
	}
	const print = (string) => { console.log(string); }
	test_3();
} catch (error) {
	console.log('test_3', error)
}

try {
	function test_4() {
		print('hello');
	}
	test_4();
	const print = (string) => { console.log(string); }
} catch (error) {
	console.log('test_4', error)
}


try {
	function test_5() {
		print('hello');
	}
	setTimeout(() => {
		test_5()
	}, 100);
	const print = (string) => { console.log(string); }
} catch (error) {
	console.log('test_5', error)
}


