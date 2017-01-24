// ISEVEN
console.log("isEven()");

function isEven(num) {
	if (typeof num === "number" && !(num % 2)) {
		return true;
	}

	return false;
}

console.log(isEven);
console.log("isEven(4) = "+ isEven(4));
console.log("isEven(21) = "+ isEven(21));
console.log("isEven(68) = "+ isEven(68));
console.log("isEven(333) = "+ isEven(333));
console.log("isEven(\"hello\") = "+ isEven("hello"));

// FACTORIAL
console.log("factorial()");

function factorial(num) {
	if (typeof num === "number") {
		if (num === 0) {
			return 1
		}

		var total = num;
		var counter = 1;
		while (counter < num) {
			total *= counter++;
		}

		return total
	}

	return -1
}

console.log(factorial);
console.log("factorial(5) = "+ factorial(5));
console.log("factorial(2) = "+ factorial(2));
console.log("factorial(10) = "+ factorial(10));
console.log("factorial(0) = "+ factorial(0));
console.log("factorial(\"hello\") = "+ factorial("hello"));

// FACTORIAL
console.log("kebabToSnake()");

function kebabToSnake(input) {
	if (typeof input === "string") {
		return input.replace(/-/g, "_");
	}

	return "N/A"
}

console.log(kebabToSnake);
console.log("kebabToSnake(\"hello-world\") = " + kebabToSnake("hello-world"));
console.log("kebabToSnake(\"dogs-are-awesome\") = "+ kebabToSnake("dogs-are-awesome"));
console.log("kebabToSnake(\"hello\") = "+ kebabToSnake("hello"));
console.log("kebabToSnake(5) = "+ kebabToSnake(5));
