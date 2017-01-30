var tag = document.getElementById("highlighted")
console.log("Get by id - highlighted")
console.log(tag)

var tags = document.getElementsByClassName("bolded")
console.log("Get by class name - bolded")
console.log(tags[0])
console.log(tags[1])

tags = document.getElementsByTagName("li")
console.log("Get by tag name - li")
console.log(tags[0])
console.log(tags[1])
console.log(tags[2])

tag = document.querySelector("#highlighted")
console.log("querySelector - #highlighted")
console.log(tag)

tag = document.querySelector(".bolded")
console.log("querySelector - .bolded (only first item)")
console.log(tag)


tags = document.querySelectorAll(".bolded")
console.log("querySelectorAll - .bolded")
console.log(tags[0])
console.log(tags[1])