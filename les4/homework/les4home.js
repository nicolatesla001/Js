// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//
// function rec(a,b) {
//     let c = a * b;
//     return c
// }
//
// let s = rec(2, 4)
// console.log(s)
// document.write('Площа прямокутника дорівнює ' + rec(2, 4))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sc(r) {
//     let s = Math.PI * r**2
//     return s
// }
//
// let sc1 = sc(5)
// console.log(sc1)
// document.write('Площа кола дорівнює ' + sc1)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCelinder(r,h){
// let square=2* Math.PI*r*(r+h)
// return square
// }
// let result=squareCelinder(2, 5)
// console.log(result)
// document.write('Площа циліндра дорівнює ' + result)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr=['hello', true, 55, 11, 7, 'string']
// function list(arr){
//     for(let i=0;i<arr.length;i++){
//        document.write(` ${arr[i]}` )
//     }
// }
// list(arr)

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function ppp(elem){
//     document.write(`<p>${elem}</p>`)
//     for(let i=0;i<5;i++){
//         document.write(`<p>${i}-${elem}</p>`)
//     }
// }
// ppp(`element`)
// ????????????????
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function ulCreator(a){
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
//
// }
// ulCreator('text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulCreator2(text, num){
//     document.write(`<ul>`)
// for (i=0;i<num;i++){
//     document.write(`<li>text</li>`)
// }
//     document.write(`</ul>`)
// }
// ulCreator2('some text', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr=['some string', 5,11,77,22, true, 'okten', false]
// function iterator(arr){
//     for (const arrElement of arr) {
//         console.log(arrElement)
//         document.write(`<div>${arrElement}</div>`)
//
//     }
//
// }
// iterator(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.

// let array= [ {id:1, name:'Nico', age:24},
//     {id:2, name:'Oleg', age:21},
//     {id:3, name:'Olya', age:28},
//     {id:4, name:'Vasya', age:23},
//     {id:5, name:'Igor', age:34}]
//
// function objCreator(array){
//     for (const arrayElement of array) {
//         document.write(`<div>
// ${arrayElement.id} ${arrayElement.name} ,age - ${arrayElement.age}
// </div>`)
//
//     }
// }
// objCreator(array)




