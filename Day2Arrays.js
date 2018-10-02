//Exercise 1 .concat
var groceryList1 = ["apples", "carrots", "oatmeal"]
var groceryList0 = [groceryList1]
groceryList0.concat("granola")

console.log("1. " + groceryList1)

//Exercise 2 .push
var groceryList2 = ["chips", "dip", "cookies"]
groceryList2.push("soda")

console.log("2. " + groceryList2)

//Exercise 3 ???
var numbers1 = [1,2,3,4,5]
var numbers0 = [numbers1]
numbers0.unshift(0)

console.log("3. " + numbers1)

//Exercise 4
var numbers2 = [2,4,6,8,10]
numbers2.unshift(0)

console.log("4. " + numbers2)

//Exercise 5
var numbers3 = [2,13,6,8,4,2]
var a = numbers3.indexOf(2)

console.log("5. " + a)

//Exercise 6
var b = numbers3.lastIndexOf(2)

console.log("6. " + b)

//Exercise 7
var chars = ["y", "a", "r", "r", "a"]

console.log("7. " + (chars[0] + chars[1] + chars[2] + chars[3] + chars[4]))

//Exercise 8
var charsReversed = chars.reverse()

console.log("8. " + (chars[0] + chars[1] + chars[2] + chars[3] + chars[4]))
