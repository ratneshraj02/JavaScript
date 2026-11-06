function mapper(arr, fun) {
	/*
        arr -> is going to be array of element
        fun -> callback function which expects two arguments value and index.
    */
	let result = [];
	for (let i = 0; i <= arr.length; i++) {
		//i -> index, arr[i] -> value

		let res = fun(arr[i], i);
		return arr.push(res);
	}
	return result;
}

let arr = [1, 2, 3, 4, 5];
let x = mapper(arr, function cube(v, i) {
	console.log(v * v * v, i);
	return v * v * v;
});
console.log(x, arr);

console.log('\n-------------------------------------------------------\n');


//e.g :
function print(idx, element) {
	return `Element at index ${idx} is ${element}`;
}

function customMapper(arr, func) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res.push(func(arr[i], i));
	}
	return res;
}

const newArr = [9, 8, 6, 5, 4, 6];

const value = customMapper(newArr, print);
console.log(value);