// Exercise 1
// Print all numbers between -10 and 19
var start = -10
var end = 19

console.log("Print all numbers between -10 and 19")
while (start <= end) {
	console.log(start++)
}

// Print all even numbers between 10 and 40
start = 10
end = 40

console.log("Print all even numbers between 10 and 40")
while (start <= end) {
	if (!(start % 2)) {
		console.log(start)
	}
	start++
}

// Print all odd numbers between 300 and 333
start = 300
end = 333

console.log("Print all odd numbers between 300 and 333")
while (start <= end) {
	if (start % 2) {
		console.log(start)
	}
	start++
}
// Print all numbers divisible by 5 AND 3 between 5 and 50
start = 5
end = 50

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
while (start <= end) {
	if (!(start % 5) && !(start % 3)) {
		console.log(start)
	}
	start++
}