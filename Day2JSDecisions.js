//TODO: write a function that determins which number in a data st of 2 is greater
//Step 1 - declare functiob: greaterNum
function greaterNum(a,b) {
//Step 2 - If/Else statement to compare arguments and return strings that declare which number is greater
  if (a>b)
    return "A is greater than B"
  else {
    return "B is greater than A"
  }
}
//Step 3 - Log outcomes to console with at least 2 tests
console.log(greaterNum(1,2))
console.log(greaterNum(9,7))
