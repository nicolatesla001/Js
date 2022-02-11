// - створити функцію яка приймає три числа та виводить найменьше.
// let min=(a,b,c)=>{
//     if (a<b&& a<c){
//         console.log(a)
//         document.write(a)
//     }
//     else if (b<a&& b<c){
//         console.log(b)
//         document.write(b)
//     }
//     else if (c<a &&c<b){
//         console.log(c)
//         document.write(c)
//     }
//     else {document.write('Повторіть спробу')}
// }
//
// min(7,2,8)

// - створити функцію яка приймає три числа та виводить найбільше.
// let max=(a,b,c)=>{
//     if(a>b&&a>c){
//         console.log(a)
//         document.write(a)
//     }
//     else  if(b>a&&b>c){
//         console.log(b)
//         document.write(b)
//     }
//     else if(c>a&&c>b){
//         console.log(c)
//         document.write(c)
//     }
//     else {document.write('Повторіть спробу')}
// }
//
// max(400,200,90)

// - створити функцію яка повертає найбільше число з масиву

// let arr = [15, 40, 800, 200, 500, 900, 400, 300]
// let arrMax = (arr) => {
//     let max = arr[0]
//     for (el of arr) {
//         if (el > max) {
//             max = el
//         }
//     }
//     return max
// }
// console.log(arrMax(arr))
// document.write('Максимальне число масиву' + ' ' + arrMax(arr))

// - створити функцію яка повертає найменьше число з масиву
// let arr = [15, 40, 800, 200, 500, 900, 400, 300]
// let arrMin=(arr)=>{
//     min=arr[0]
//     for (el of arr){
//         if(el<min){
//             min=el
//         }
//     }
//     return min
// }
// console.log(arrMin(arr))
// document.write('Мінімальне число масива'+' '+arrMin(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let arrSum = (arr) => {
//     sum = 0
//     for (el of arr) {
//         sum = sum + el
//     }
//     return sum
// }
// console.log(arrSum(arr))
// document.write('Сума масиву дорівнює' + ' ' + arrSum(arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr=[2,4,6,8,10]
// let serNum=(arr)=>{
//    let sum=0
//     for (el of arr){
//         sum=sum+el
//     }
//     return sum/arr.length
// }
// console.log(serNum(arr))
// document.write('Середнє арифметичне масива складає'+' '+ serNum(arr))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

// const calc = (...arr) => {
//     let min = arr[0]
//     let max = arr[0]
//     for (const el of arr) {
//         if (el < min) {
//             min = el
//         }
//         if (el > max) {
//             max = el
//
//         }
//
//     }
//     console.log(max)
//     return min
// }
// document.write('Мінімальне число дорівнює' + ' ' + calc(1, 2, 3, 4))

// - створити функцію яка заповнює масив рандомними числами

// let randArr = (numm) => {
//     let arr = []
//     for (let i = 0; i < numm; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }
// console.log(randArr(5))

// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//     який характеризує кінцеве значення діапазону.

// let arrCr = (num1, limit) =>{
//     let arr = []
// for (let i = 0; i < num1; i++) {
//     arr.push(Math.floor(Math.random() * limit))
// }return arr
// }
// console.log(arrCr(5,50))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr=[1,2,3,4,5]
// let rev=(arr)=>{
//     arrRev=[]
// for (let i=arr.length-1,ri=0;i>=0;i--,ri++){
//     arrRev[ri]=arr[i]
// }return arrRev
// }
// console.log(rev(arr))

