//TODO: Write a function named helloWorld that will translate "Hello, World" in 3 specified languages.

//Step 1: Declare function
function helloWorld(lang) {
//Step 2: If/ statement that will determine the requested language and return "Hello, World" in the appropriate language.
  if(lang == "es") {
    return "Hola Mundo!" }
  else if(lang == "de") {
      return "Hallo Welt!" }
  else if(lang == "en") {
      return "Hello, World!" }
}
//Step 2: If/ statement that will determine the requested language and return "Hello, World" in the appropriate language.
//Step 3: Log to console to verify code works,
console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
