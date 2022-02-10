// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує
// їх між собою.

// function calc() {
//     if (arguments.length === 1) {
//         return arguments[0]
//     } else if (arguments.length === 2) {
//         return arguments[0] + arguments[1]
//     }
// }
//
// console.log(calc(1,2))

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив.

// let arr1=[1,2,3]
// let arr2=[2,3,4]
// function arrCr(arr1,arr2){
//     let arr3=[]
//     for (i=0,x=0;i<arr1.length,x<arr2.length;i++,x++){
//         arr3.push(arr1[i]+arr2[x])
//     }
//     return arr3
// }
// document.write(arrCr(arr1,arr2))
// console.log(arrCr(arr1,arr2))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function keyCr(array){
//     let   result   =   [ ] ;
//     for   ( let   item   of   array )   {
//         for   ( let   key   in   item )   {
//             result . push ( key ) ;
//         }
//     }
//     return   result ;
// }
// let array=[{name: 'Dima', age: 13}, {model: 'Camry'}]
// console.log(keyCr(array))
