//Exercise 1
var a = true

function marco(a) {
  if(true) { return "polo"}
  if(false) { return "marco"}
}

console.log("1." + " " + marco())

//Exercise 2
function greeter(name) {
  return "Hi," + " " + name
}

console.log("2." + " " + greeter("Janice"));

//Exercise 3
function oddOrEven(number) {
  if(number % 2 == 0) {
    return "The number is Even."
} else {
    return "The number is Odd."
  }
}

console.log("3." + " " + oddOrEven(10))

//Exercise 4
function triple(number) {
  return number*3
}

console.log("4." + " " + triple(7));

//Exercise 5
function multiply(a,b) {
  return a * b
}

console.log("5." + " " + multiply(4,9));

//Exercise 6
function divisibleBy(a,b) {
  if((a/b) % 2 == 0) {
    return "The numbers are evenly divisible"
} else {
    return "The numbers are not evenly divisible."
  }
}

console.log("6." + " " + divisibleBy(30,5));

//Exercise 7
var product =  { name: "chair", price: 14.99 }
function describeProduct(product) {
  return "The product is a "+ product +". It costs $" + product
}

console.log(describeProduct(product));
