$("button").click(function() {
	$(this).css("background", "pink");
	var text = $(this).text();
	console.log("Clicked: \"" + text + "\"");
});

$("#submit").click(function() {
	console.log("SUBMIT");
});

$("input").keypress(function(event) {
	if (event.which === 13) { //enter
		console.log("you pressed enter.");
	}
});

$("h1").on("click", function() {
	$(this).css("color", "purple");
})

$("button").on("mouseenter", function() {
	$(this).css("fontWeight", "bold");
});

$("button").on("mouseleave", function() {
	$(this).css("fontWeight", "normal");
});