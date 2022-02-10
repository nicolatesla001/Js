// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minNumber(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1)
//         console.log(num1)
//     } else if (num2 < num1 && num2 < num3) {
//         document.write(num2)
//         console.log(num2)
//     }
//     else if( num3 < num1 && num3 < num2){
//         console.log(num3)
//     document.write(num3)
//     }
//         else{}
// }
//
// minNumber(200, 500, 100)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         document.write(num1)
//         console.log(num1)
//     }
//     else if(num2>num1 && num2>num3){
//         document.write(num2)
//         console.log(num2)
//     }
//     else if(num3>num1 && num3>num2){ console.log(num3)
//     document.write(num3)}
//     else{}
// }
//
// maxNumber(500, 9000,600)

// - створити функцію яка повертає найбільше число з масиву

// let array=[245,121,256,234,653,745,223.512]
// function max(array){
//     console.log(Math.max(...array))
//     document.write(Math.max(...array))
// }
//
// max(array)


// let array=[245,121,256,234,653,745,223,512]
// function max(array){
//     let m=array[0];
//     for (const item of array){
//         if (item>m){
//             m=item
//         }
//     }
//     return m;
// }
// console.log(max(array))
// document.write(`<div>Найбільше число масиву - ${max(array)}</div>`)

// - створити функцію яка повертає найменьше число з масиву

// let array=[245,121,256,234,653,745,223,512]
// function min(array){
//     console.log(Math.min(...array))
//     document.write(Math.min(...array))
// }
// min(array)

// let array=[245,121,256,234,653,745,223,512]
// function min(array){
//     let m=array[0]
//     for (const item of array){
//         if (item<m){
//             m=item
//         }
//     }
//     return m
// }
// console.log(min(array))
// document.write(`<div>Найменше число масиву - ${min(array)}</div>`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// function summary(arr){
//     let res=0
//     for (let sum of arr){
//         res=res+sum
//     }
//     return res
//
// }
// let arr=[35,2,32,57,44,70,30,46,2,39]
//
// console.log(summary(arr))
// document.write('Сума масиву дорівнює ' + summary(arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function serArr(arr) {
//     let res = 0
//     for (let x of arr) {
//         res = (res + x)
//
//     }
//     return res/arr.length
// }
// let arr = [4, 8, 10, 12, 11]
// console.log(serArr(arr))

// - створити функцію яка заповнює масив рандомними числами
// Math.round(Math.random()*100)
//
// function arrCr(num){
//     let arr=[]
//     for (let i=0;i<num;i++){
//         arr.push(Math.round(Math.random()*100))
//     }
//     return arr
// }
// document.write(arrCr(12))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// function arrCr(num,lastnum){
//     let arr=[]
//     for (let i=0;i<num;i++){
//         arr.push(Math.round(Math.random()*lastnum))
//     }
//     return arr
// }
// document.write(arrCr(5,10))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// function arrRev(arr){
//
//     for(let i=arr.length-1;i>=0;i--){
//         console.log(arr[i])
//     }
// }
// arr=[1,2,3,4,5]
// arrRev(arr)


