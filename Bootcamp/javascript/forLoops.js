// Exercise 1
// Print all numbers between -10 and 19
var start = -10
var end = 19

console.log("Print all numbers between -10 and 19")
for (x = start; x <= end; x++) {
	console.log(x)
}

// Print all even numbers between 10 and 40
start = 10
end = 40

console.log("Print all even numbers between 10 and 40")
for (x = start; x <= end; x += 2) {
	console.log(x)
}

// Print all odd numbers between 300 and 333
start = 300
end = 333

console.log("Print all odd numbers between 300 and 333")
for (x = start + 1; x <= end; x += 2) {
	console.log(x)
}
// Print all numbers divisible by 5 AND 3 between 5 and 50
start = 5
end = 50

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
for (x = start; x <= end; x++) {
	if (!(x % 3) && !(x % 5)) {
		console.log(x)
	}
}