//PRINT REVERSE
console.log("printReverse()");

function printReverse(arrayInput) {
	for (var i = arrayInput.length - 1; i >= 0; i--) {
		console.log(arrayInput[i]);
	}
}

console.log(printReverse);
printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);


//IS UNFORM
console.log("isUniform()");

function isUniform(arrayInput) {
	if (arrayInput.length === 0) {
		return true;
	}
	var origVal = arrayInput[0];
	for (var i = 1; i < arrayInput.length; i++) {
		if (arrayInput[i] !== origVal) {
			return false;
		}
	}

	return true;
}

console.log(isUniform);
console.log("isUniform([1, 1, 1, 1]): " + isUniform([1, 1, 1, 1]));
console.log("isUniform([2, 1, 1, 1]): " + isUniform([2, 1, 1, 1]));
console.log("isUniform([\"a\", \"b\", \"p\"]): " + isUniform(["a", "b", "p"]));
console.log("isUniform([\"b\", \"b\", \"b\"]): " + isUniform(["b", "b", "b"]));

//SUM ARRAY
console.log("sumArray()");

function sumArray(numArray) {
	var total = 0

	for (var i = 0;  i < numArray.length; i++) {
		if (typeof numArray[i] !== "number") {
			return -1;
		}

		total += numArray[i];
	}

	return total;
}

console.log(sumArray);
console.log("sumArray([1, 2, 3]): " + sumArray([1, 2, 3]));
console.log("sumArray([10, 3, 10, 4]): " + sumArray([10, 3, 10, 4]));
console.log("sumArray([-5, 100]): " + sumArray([-5, 100]));

//MAX
console.log("max()");

function max(numArray) {
	var max = Number.MIN_VALUE;

	for (var i = 0;  i < numArray.length; i++) {
		if (typeof numArray[i] !== "number") {
			return -1;
		}

		if (numArray[i] > max) {
			max = numArray[i];
		}
	}

	return max;
}

console.log(max);
console.log("max([1, 2, 3]): " + max([1, 2, 3]))
console.log("max([10, 3, 10, 4]): " + max([10, 3, 10, 4]))
console.log("max([-5, 100]): " + max([-5, 100]))