// - створити функцію яка обчислює та повертає площу прямокутника
// let square = (a, b) => {
//     return a * b
// }
// console.log(square(5, 12))
// document.write('Площа прямокутника' + ' ' + square(5, 12))

// - створити функцію яка обчислює та повертає площу кола
// let squareC = (r) => {
//     return Math.PI * r ** 2
// }
// console.log(squareC(5))
// document.write('Площа кола' + ' ' + squareC(5))

// - створити функцію яка обчислює та повертає площу циліндру
// let square1 = (r, h) => {
//     return 2 * Math.PI * r * h
// }
// console.log(square1(5, 9))
// document.write('Площа циліндра дорівнює'+' '+square1(5,9))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr=[1,2,3,4,'okten','hello',5,'some string',11,true]
// let calc=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         document.write(arr[i] +' ');
//
//     }
// }
// calc(arr)
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let pCreator=(text)=>{
//     for(i=0;i<5;i++){
//         document.write(`<p>${text}</p>`)
//     }
// }
// pCreator('some text')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let liCreator=(li)=>{
//     document.write('<ul>')
//     document.write(`<li>${li}</li>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`<li>${li}</li>`)
//     document.write('</ul>')
// }
// liCreator('lijko')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let liCre=(text,num1)=>{
//     document.write('<ul>')
//     for (i=0;i<num1;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// liCre('some string',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1, true, 66, 'string', 'okten', false, 54]
// let arrayCr = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<div>${array[i]}</div>`);
//
//     }
// }
// arrayCr(array)
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.

// let arrayId=[{id:1,name:'Vasya',age:25},{id:2,name:'Olya',age:29},{id:3,name:'Vitya',age:21}]
// let func=(array)=>{
//     for(let arrEl of array){
//         document.write(`<div>${arrEl.id} ${arrEl.name} вік ${arrEl.age}</div>`)
//     }
// }
// func(arrayId)