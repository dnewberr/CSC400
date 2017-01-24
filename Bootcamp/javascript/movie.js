var movies = [
	{
		title: "HP1",
		rating: "4.6",
		hasWatched: true
	},
	{
		title: "Finding Dori",
		rating: "3.2",
		hasWatched: false
	},
	{
		title: "Monster House",
		rating: "2.6",
		hasWatched: true
	},
	{
		title: "Passengers",
		rating: "4.6",
		hasWatched: false
	}
]


movies.forEach(function(movie) {
	infoPrint(movie);
})

function infoPrint(movie) {
	var watchedStatus = movie.hasWatched ? "have" : "have not";
	console.log("You " + watchedStatus + " seen " + movie.title + " - " + movie.rating + " stars")
}