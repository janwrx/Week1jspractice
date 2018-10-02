//TODO: Write a function named pluralize that plurilizes a noun.

//Step 1: Declare a function

function pluralize(a,noun) {

//Step 2: Write if statement that determines if the number is greater than 1, then 1 plurilizes the noun if it is.

  if(a>1) {

    if(noun == "goose") {
      return parseInt(a) + " " +"geese"
    } else if(noun == "sheep") {
      return parseInt(a) + " " + "sheep"
    } else if(noun == "child") {
        return parseInt(a) + " " + "children"
    } else if(noun == "person") {
        return parseInt(a) + " " + "people"
    } else if(noun == "species") {
        return parseInt(a) + " " + "species"
    }

    return parseInt(a) + " " + noun + "s"

  } else {
      return parseInt(a) + " " + noun
  }
}
//Step 3: Test in to log to confirm.

console.log(pluralize(1,"dog"));
console.log(pluralize(2,"cat"));
console.log(pluralize(2,"sheep"));
console.log(pluralize(2,"goose"));
console.log(pluralize(2,"child"));
console.log(pluralize(2,"person"));
console.log(pluralize(2,"species"));
