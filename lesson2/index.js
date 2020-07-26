// 1. Провести сравнение и вывести результат
console.log(1 == 2)
console.log(1 != 2)
console.log(1 == 1)
console.log(1 != 1)
console.log("text" == 5)
console.log("text" != 5)
console.log("text" == "Text")
console.log("text" == "text")
console.log(true == "true")
console.log(true == false)
console.log(false == 0)
console.log(false === 0)
console.log("" == false)
console.log("" !== false)
console.log(undefined === null)
console.log(undefined == null)
console.log(17 === true)
console.log("17" === true)
console.log({} === {})

//2. Используя функию prompt ввести число и проверить является ли оно `четным`, результат вывести в консоль (true/false)
let userEven = prompt("Give me an even number")
/*if (userEven === null) {
  console.log("null")
} else if*/

if (Number(userEven) % 2 === 0) {
  console.log(true)
} else if (Number(userEven) % 2 === 1) {
  console.log(false)
} else {
  console.log(NaN)
}

// 3. Используя функию prompt ввести число и проверить является ли оно `НЕчетным`, результат вывести в консоль (true/false)
let userOdd = prompt("Give me an odd number")
if (Number(userOdd % 2 === 1)) {
  console.log(true)
} else if (Number(userOdd % 2 === 0)) {
  console.log(false)
} else {
  console.log(NaN)
}

// 4. Создать переменную типа number применить к ней 3 сокращенных оператора и вывести новое значение
let myNum = 5
myNum *= 3
myNum -= 5
myNum += 767
console.log(myNum)

// 5. Привести `let a = "100"` к числу 3-мя способами
let a = "100"
console.log(typeof Number(a))
console.log(typeof +a)
console.log(typeof parseInt(a))

// 6. Написать формулу разности квадратов и проверить с рандомными числами, и вывести результат
let x = Number(prompt("Give me x"))
let y = Number(prompt("Give me y"))
let leftSide = x ** 2 - y ** 2
console.log(leftSide)
let rightSide = (x + y) * (x - y)
console.log(rightSide)

if (leftSide === rightSide) {
  console.log(true)
} else {
  console.log(false)
}

//⭐️⭐️⭐️
// 1. Используя функцию prompt получить от пользователя 3 числа прибавить к каждому 10 и вывести сумму этих чисел используя alert
let firstNum = Number(prompt("Give me first number"))
let secondNum = Number(prompt("Give me second number"))
let thirdNum = Number(prompt("Give me third number"))

let sum = firstNum + 10 + secondNum + 10 + thirdNum + 10
alert(sum)

// 2. Определить существование треугольника по трем сторонам. Вводим 3 числа (стороны) и возвращаем `true/false`
let firstSide = Number(prompt("Give me length of the first side"))
let secondSide = Number(prompt("Give me length of the second side"))
let thirdSide = Number(prompt("Give me length of the third side"))

if (
  firstSide + secondSide > thirdSide &&
  secondSide + thirdSide > firstSide &&
  firstSide + thirdSide > secondSide
) {
  console.log(true)
} else {
  console.log(false)
}

// 3. Написать формулу куб суммы и проверить с рандомными числами
let firstCube = Number(prompt("Give me first number"))
let secondCube = Number(prompt("Give me second number"))
let leftCube = (firstCube + secondCube) ** 3
console.log(leftCube)
let rightCube =
  firstCube ** 3 +
  3 * firstCube ** 2 * secondCube +
  3 * firstCube * secondCube ** 2 +
  secondCube ** 3
console.log(rightCube)

if (leftCube === rightCube) {
  console.log(true)
} else {
  console.log(false)
}
