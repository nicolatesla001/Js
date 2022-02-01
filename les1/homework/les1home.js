// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true,
// false.

let hi = 'hello'
let school = 'owu'
let c = 'com'
let u = 'ua'
let n1 = 1
let n10 = 10
let n9 = -999
let n123 = 123
let PI = 3.14
let np = 2.7
let n16 = 16
let tr = true
let fls = false

// Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(hi)
console.log(school)
console.log(c)
console.log(u)
console.log(n1)
console.log(n10)
console.log(n9)
console.log(n123)
console.log(PI)
console.log(np)
console.log(n16)
console.log(tr)
console.log(fls)

// alert(hi)
// alert(school)
// alert(c)
// alert(u)
// alert(n1)
// alert(n10)
// alert(n9)
// alert(n123)
// alert(PI)
// alert(np)
// alert(n16)
// alert(tr)
// alert(fls)

document.write(hi)
document.write(school)
document.write(c)
document.write(u)
document.write(n1)
document.write(n10)
document.write(n9)
document.write(n123)
document.write(PI)
document.write(np)
document.write(n16)
document.write(tr)
document.write(fls)

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

hi = 'helloo'
school = 'owuschool'
c = 'com-com'
u = 'ua.ua'
n1 = 11
n10 = 100
n9 = -995
n123 = 128
PI = 3.1414
np = 2.77
n16 = 167
tr = 'true-true'
fls = 'false-false'

console.log(hi)
console.log(school)
console.log(c)
console.log(u)
console.log(n1)
console.log(n10)
console.log(n9)
console.log(n123)
console.log(PI)
console.log(np)
console.log(n16)
console.log(tr)
console.log(fls)

// alert(hi)
// alert(school)
// alert(c)
// alert(u)
// alert(n1)
// alert(n10)
// alert(n9)
// alert(n123)
// alert(PI)
// alert(np)
// alert(n16)
// alert(tr)
// alert(fls)

document.write(hi)
document.write(school)
document.write(c)
document.write(u)
document.write(n1)
document.write(n10)
document.write(n9)
document.write(n123)
document.write(PI)
document.write(np)
document.write(n16)
document.write(tr)
document.write(fls)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person.
// (Не об'єкт)

let firstName = 'Сакаль'
let middleName = 'Микола'
let lastName = 'Миколайович'
let person = (firstName + middleName + lastName)
console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name = prompt('Як тебе звати?',);

// let name = prompt("Імя");
// let middle_Name = prompt('По-батькові');
// let age = prompt('Вік');
//
// console.log(`Вітаю ${name} ${middle_Name}. Тобі ${age} роки.`);
// alert(`Тебе звати ${name} ${midlName}.Тобі ${age}`)
// let tru=confirm(`Ти ${name} ${midlName}, тобі ${age}?`)
// alert(`Супер`)
//


// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100
// let b = '100'
// let cc = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 < 6)
console.log(5 === 6)
console.log(5 > 6)
console.log(10 == 10)
console.log(10 >= 10)
console.log(10 > 10)
console.log(10 < 10)
console.log(10 != 10)
console.log(123 === '123')
console.log(123 == '123')

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");205 строчний елемент 20 додає елементи 5 який є цифрою і елемент 205 буде заражений стрінгою і абзац
// document.write(str - a + "<br/>");15
// document.write(str * "2" + "<br/>");40
// document.write(str / 2 + "<br/>");10


let name=prompt("Імя")
let midlName=prompt('По-батькові?')
let age=prompt(`Вік?`)
alert(`Тебе звати ${name} ${midlName}.Тобі ${age}`)
let tru=confirm(`Ти ${name} ${midlName}, тобі ${age}?`)
alert(`Супер`)
console.log(`Тебе звати ${name} ${midlName}?`)









