//TODO: Write a function that takes a number score and assigned an appropriate grade.

//Step 1: Declare a function assignGrade
function assignGrade(score) {
//Step 2: Write an if statement that takes the score and assigns grade.
  if (score >= 90) {
    return "You got an A" }
  else if (score >= 80) {
    return "You got a B" }
  else if (score >= 70) {
    return "You got a C" }
  else if (score >= 60) {
    return "You got a D"}
  else {
    return "You failed."}
}
//Step 3: Test function in logs
console.log(assignGrade(44));
console.log(assignGrade(91));
console.log(assignGrade(75))
