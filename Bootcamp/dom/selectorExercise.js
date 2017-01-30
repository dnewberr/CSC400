/* Select first p */

var firstParagraph = document.querySelector("p")
console.log("querySelector")
console.log(firstParagraph)

firstParagraph = document.querySelector("#first")
console.log("querySelectorAll")
console.log(firstParagraph)

firstParagraph = document.getElementById("first")
console.log("getElementById")
console.log(firstParagraph)

var firstParagraphs = document.getElementsByClassName("special")
console.log("getElementsByClassName")
console.log(firstParagraphs[0])