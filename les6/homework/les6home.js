// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let h='hello world'
// console.log(h.length)
//
// let l='lorem ipsum'
// console.log(l.length)
//
// let j='javascript is cool'
// console.log(j.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let h='hello world'
// console.log(h.toUpperCase())
//
// let l='lorem ipsum'
// console.log(l.toUpperCase())
//
// let j='javascript is cool'
// console.log(j.toUpperCase())
//
// let h1='hello world'
// h11=h1.toUpperCase()
// console.log(h11)
//
// let l1='lorem ipsum'
// let l11=l1.toUpperCase()
// console.log(l11)
//
// let j1='javascript is cool'
// let j11=j1.toUpperCase()
// console.log(j11)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let h='HELLO WORLD'
// let h1=h.toLowerCase()
// console.log(h1)
//
// let l='LOREM IPSUM'
// let l1=l.toLowerCase()
// console.log(l1)
//
// let j='JAVASCRIPT IS COOL'
// let j1=j.toLowerCase()
// console.log(j1)


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let str1=str.trim()
// console.log(str1)
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let arrCr=(str)=>{
//     return str.split()
// }
// console.log(arrCr(str))
// document.write(arrCr(str))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let newStr=(num1,num2)=>{
//     return str.substring(num1,num2)
// }
//
// let str = 'Каждый охотник желает знать'
// document.write(newStr(0,7))
// console.log(newStr(0,7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
// символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let newStr=(str)=>{
//     let st=str.split(' ').join('-').toUpperCase()
//     return st
// }
// let str = "HTML JavaScript PHP";
// console.log(newStr(str))
// document.write(newStr(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let upR = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1).toLowerCase()
// }
// let str = 'okten web'
// console.log(upR(str))
// document.write(upR(str))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     return str.replace(/(^|\s)\S/g, function(x) {return x.toUpperCase()})
// }
// let str = 'hello world i am here'
// console.log(capitalize(str))

