var todoList = []

function add(x) {
	todoList.push(x);
	console.log("\"" + x + "\" was added to the list.");
}

function list() {
	console.log("--- LIST: ----------------");
	todoList.forEach(function(item, i) {
		index = i + 1;
		console.log(index + ": " + item);
	})
	console.log("--------------------------");
}

function quit() {
	todoList = [];
	console.log("Goodbye.");
}

function deleteItem(x) {
	todoList.splice(Number(x) - 1, 1);
	console.log("\"" + x + "\" was deleted from the list.")
}

var action = prompt("What would you like to do?");

while (action !== "quit") {
	if (action === "new") {
		add(prompt("Enter a new todo"));
	}
	if (action === "list") {
		list();
	}
	if (action === "delete") {
		deleteItem(prompt("Enter the item number you want to delete"));
	}

	action = prompt("What would you like to do?");
}

quit()