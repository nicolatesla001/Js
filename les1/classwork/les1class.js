// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній
// result.

let array = [5, 15, 10, 3, 88, 64, 27, 32, 2, 77]
let result = [array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9]]
console.log(result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book={name : 'Скрам', numPage:279, genre:'бізнес'};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

book={name:'ДНК особистості' , numPage:352, genre:'економіка', author:'Брайан Трейсі' }


// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу
// як окремий об'єкт

book=[book={ name : 'Скрам', numPage:279, genre:'бізнес'},
    book={ name:'ДНК особистості', numPage:352, genre:'економіка', author:'Брайан Трейсі' } ]
console.log(book[0])
console.log(book[1])


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height=23
let width=10
let result1=height * width
console.log(result1)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.


let heightC=10
let dC=4
let r=dC/2

let v=Math.PI*r**2*heightC
console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).

// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор
// зведення в ступінь **).

let n=3
let m=4
let k = Math.sqrt (Math.pow(n, 2)+Math.pow(m, 2))
console.log(k)


