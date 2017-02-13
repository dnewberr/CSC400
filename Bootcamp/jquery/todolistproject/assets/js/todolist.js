var LIGHT_GRAY = "rgb(211, 211, 211)";
var ENTER_KEY = 13;

$("#todoList").on("click", ".todoItem", function() {
	$(this).toggleClass("completed");
});

$("#todoList").on("click", ".deleteIcon", function(event) {
	event.stopPropagation(); // prevents cross out
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
})

$("input[type='text']").keypress(function(event) {
	if (event.which === ENTER_KEY) {
		var newItem = $(this).val();
		$("#todoList").append("<li class=\"todoItem\"> "
			+ "<span class=\"deleteIcon\"><i class=\"fa fa-trash\">"
			+ "</i></span> " + newItem + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("#newItemInput").slideToggle(100);
});