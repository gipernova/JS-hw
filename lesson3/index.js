// 1. Ввести число и проверить больше ли оно 10, если да - вывести "Больше", нет - "Меньше", равно - "Равно"
let number = Number(prompt("Give me a number"))
if (number > 10) {
  console.log("Больше")
} else if (number < 10) {
  console.log("Меньше")
} else if (number === 10) {
  console.log("Равно")
} else {
  console.log("Give me a number!!!")
}

// 2. Ввести возраст, проверить является ли пользователь совершеннолетним  ив вывести соответсвующее сообщение (2 способами `if` и `?`).
//1 способ
let age = Number(prompt("How old are you?"))
if (age >= 18) {
  console.log("OK, you can enter 18+ website")
} else if (age >= 1 && age < 18) {
  console.log("Sorry. You are too young for this content")
} else {
  console.log("I said tell me your age!")
}
//2 способ
age >= 18
  ? console.log("OK, you can enter 18+ website")
  : console.log("Sorry. You are too young for this content")

// 3. Найти максимальное число из трех. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
let firstNum = Number(prompt("Give me first number"))
let secondNum = Number(prompt("Give me second number"))
let thirdNum = Number(prompt("Give me third number"))

if (firstNum > secondNum && firstNum > thirdNum) {
  console.log(firstNum)
} else if (secondNum > thirdNum && secondNum > firstNum) {
  console.log(secondNum)
} else if (thirdNum > firstNum && thirdNum > secondNum) {
  console.log(thirdNum)
} else {
  console.log("There is no unique biggest number!")
}

// 4. Напишите код, который спрашивает логин, проверяет его на верность, в случае если логин верен, просит ввести пароль и проверяет его. Если логин не верен - вывести "Нет такого пользователя". В случае несовпадения логина или пароля выводить alert с текстом ошибки. В случае успешного логина - alert с поздравлением. Правильные логин: test и пароль: password.

let userName = prompt("Login:")

if (userName === "test") {
  let userPass = prompt("Password:")
  if (userPass === "password") {
    alert("Congratulations! Welcome!")
  } else {
    alert("Password is incorrect")
  }
} else {
  alert("There is no such user")
}
// 5. Напишите программу изменения пароля. Пользователь вводит старый пароль, если он подходит идем дальше, если нет - вывести соответсвующее сообщение. Ввести новый пароль, ввести подтверждение, обработать варианты
// `новый пароль не может совпадать со старым`
let passWord = "password"
let oldPass = prompt("Enter your previous password:")
switch (oldPass) {
  case passWord:
    let newPass = prompt("Enter your new password:")
    switch (newPass) {
      case oldPass:
        alert("New password can't be the same as previous")
        break
      default:
        let approvePass = prompt("Enter your new password again:")
        switch (approvePass) {
          case newPass:
            alert("You successfully changed your password")
            break
          default:
            alert("Passwords do not match. Try again later")
            break
        }
    }
    break
  default:
    alert("The password is incorrect")
    break
}
// 6. Калькулятор обмена валют. Первый prompt спрашивает валюту: "usd" или "eur". С помощью switch установите обменный курс для валюты, выбранной пользователем, после чего спросите величину и переведите её из гривны в выбранную на первом prompt валюту. Выведите результат в alert()
let rateUsd = 27
let rateEur = 32
let userCurrency = prompt("Choose what currency you need (type usd or eur):")
switch (userCurrency) {
  case "usd":
    let amountToUsd = Number(prompt("How much hrivnas do you want to change?"))
    alert(`You will get ${(amountToUsd / rateUsd).toFixed(2)} USD`)
    break
  case "eur":
    let amountToEur = Number(prompt("How much hrivnas do you want to change?"))
    alert(`You will get ${(amountToEur / rateEur).toFixed(2)} EUR`)
    break
  default:
    alert("Choose correct currency")
    break
}

// ⭐️⭐️⭐️
// 1. Необходимо Написать программу, которая проверяет пользователя на знание таблицы умножения. Пользователь сам вводит два целых однозначных числа. Программа задает вопрос: результат умножения первого числа на второе. Пользователь должен ввести ответ и Увидеть на экране правильно он ответил или нет. Если нет- показать еще и правильный результат.

let firstNumber = Number(prompt("Give me first number"))
let secondNumber = Number(prompt("Give me second number"))
let result = firstNumber * secondNumber
let userAnswer = Number(prompt("What is the result of multiplication?"))

switch (userAnswer) {
  case result:
    alert("Wow! You are so nice at maths!")
    break
  default:
    if (isNaN(userAnswer)) {
      alert("Eventually you entered not a number")
      break
    }
    alert(`Unfortunately you are wrong:( Correct answer is ${result}`)
    break
}

// 2. Сделайте игру "камень-ножницы-бумага". Пользователь вводит свой вариант через prompt (`1 или 2 или 3`), программа генерирует свой вариант через Math.random() и выводит через alert. Следующий alert выводит имя победителя или "ничья"
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let userChoice = Number(
  prompt(
    "Let's play rock, paper, scissors. Type 1 for rock, 2 for scissors, 3 for paper"
  )
)
let botChoice
let randomChoice = getRandomIntInclusive(1, 3)
if (randomChoice === 1) {
  botChoice = "rock"
} else if (randomChoice === 2) {
  botChoice = "scissors"
} else {
  botChoice = "paper"
}

switch (userChoice) {
  case 1:
    alert(`So you chose rock`)
    switch (botChoice) {
      case "rock":
        alert(`I also chose ${botChoice}`)
        alert("Draw")
        break
      case "paper":
        alert(`I chose ${botChoice}`)
        alert("I won!")
        break
      case "scissors":
        alert(`I chose ${botChoice}`)
        alert("You won. Congratulations")
        break
    }
    break
  case 2:
    alert(`So you chose scissors`)
    switch (botChoice) {
      case "rock":
        alert(`I chose ${botChoice}`)
        alert("I won!")
        break
      case "paper":
        alert(`I chose ${botChoice}`)
        alert("You won. Congratulations")
        break
      case "scissors":
        alert(`I also chose ${botChoice}`)
        alert("Draw")
        break
    }
    break
  case 3:
    alert(`So you chose paper`)
    switch (botChoice) {
      case "rock":
        alert(`I chose ${botChoice}`)
        alert("You won. Congratulations")
        break
      case "paper":
        alert(`I also chose ${botChoice}`)
        alert("Draw")
        break
      case "scissors":
        alert(`I chose ${botChoice}`)
        alert("I won!")
        break
    }
    break
  default:
    alert("There was a mistake during input. Try again, please")
    break
}

// 3. Сделайте игру "камень-ножницы-бумага", как описано выше, пользуясь логическими операциями (&&, ||, !), не используя if и switch. Задание должно быть решено одним выражением

// Чтобы данное задание заработало адекватно, просьба закомментировать предыдущее, т.к. названия переменных совпадают в данных заданиях.
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// let userChoice = Number(
//   prompt(
//     "Let's play rock, paper, scissors. Type 1 for rock, 2 for scissors, 3 for paper"
//   )
// )

// let randomChoice = getRandomIntInclusive(1, 3)
// let botChoice = randomChoice

// userChoice === botChoice
//   ? alert("User and computer chose the same items. Draw")
//   : userChoice === 1 && botChoice === 2
//   ? alert("User chose rock and computer chose scissors. User won")
//   : userChoice === 1 && botChoice === 3
//   ? alert("User chose rock and computer chose paper. Computer won")
//   : userChoice === 2 && botChoice === 1
//   ? alert("User chose scissors and computer chose rock. Computer won")
//   : userChoice === 2 && botChoice === 3
//   ? alert("User chose scissors and computer chose paper. User won")
//   : userChoice === 3 && botChoice === 1
//   ? alert("User chose paper and computer chose rock. User won")
//   : userChoice === 3 && botChoice === 2
//   ? alert("User chose paper and computer chose scissors. Computer won")
//   : alert("Enter correct number")
