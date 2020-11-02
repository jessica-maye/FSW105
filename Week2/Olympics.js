//5 is greater than 3

if (5 > 3){
    console.log ("is greater than")
} else {
    console.log ("is not greater than")
}

//the length of "cat" is 3
var cat = {
    length: 3
}

var dog = {
    length: 3
}

if (cat.length == 3){
    console.log ("The length of cat is 3")
} else {
    console.log ("The length of cat is not 3")
}
//if cat is equal to dog
if (cat === dog){
    console.log ("Is equal to")
} else {
    console.log ("Not the same")
}

//Bronze Medal

var person = {
    name: "Bobby",
    age: 12
}

if (person.age < 18){
    console.log ("Bobby is too young")
} else {
    console.log ("Bobby is old enough")
}

if (person.name.charAt(0) === "B") {
    console.log ("Allow into the Movie")
} else {
    console.log ("Do not Allow into the Movie")
}

if (person.age!== 18 && person.name.charAt(0)==="B"){
    console.log ("Do not Allow into the Movie")
} else {
    console.log ("Allow into the Movie")
}