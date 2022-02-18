// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let name=(string,symbol)=>{
//     let newArr=[]
//     if (string.includes(symbol)){
//         let x=string.split(symbol)
//         x.forEach((elem)=>{
//             if (elem) newArr.push(elem)
//         })
//         console.log(newArr.join(' '))
//     }
// }
//
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// name(n1,'.')

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let ran=(num1,num2)=>{
//     let arr=[]
//     for (i=0;i<num1;i++){
//         arr.push(Math.floor(Math.random()*num2))
//
//     }
//     return arr
// }
//
// console.log(ran(5,5))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort

// let ran=(num1,limit)=>{
//     let arr=[]
//     for (i=0;i<num1;i++){
//         arr.push(Math.floor(Math.random()*limit))
//     }
//     return arr.sort((a,b)=>a-b)
// }
// console.log(ran(5,50))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа

// let ran=(num1,limit)=>{
//     let arr=[]
//     for (i=0;i<num1;i++){
//         arr.push(Math.floor(Math.random()*100))
//     }
//     return arr.filter(value => value%2===0)
// }
// console.log(ran(5,50))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// let ran=(num1,limit)=>{
//     let arr=[]
//     for (i=0;i<num1;i++){
//         arr.push(Math.floor(Math.random()*limit))
//     }
//     return arr.map(value => value.toString())
// }
// console.log(ran(7,60))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums=(arr,direction)=>{
//     if (direction==='ascending')return arr.sort((a,b)=>a-b)
//     if(direction==='descending')return arr.sort((a,b)=>b-a)
// }
//
// console.log(sortNums([5,8,11,44,2,66,3,27],'descending'))



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// let arr = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sort=arr.sort((a,b)=>b.monthDuration-a.monthDuration)
// console.log(sort)
//
// let filter=arr.filter((some)=>{return some.monthDuration>5})
// console.log(filter)

// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let h='hello world'
// // let h1=h.length
// // console.log(h1)
// //
// // let l='lorem ipsum'
// // let l1=l.length
// // console.log(l1)
// //
// // let j='javascript is cool'
// // console.log(j.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let h='hello world'
// console.log(h.toUpperCase())
// let l='lorem ipsum'
// console.log(l.toUpperCase())
// let j='javascript is cool'
// console.log(j.toUpperCase())
//
// console.log(h.toLowerCase())
//
// console.log(l.toLowerCase())
//
// console.log(j.toLowerCase())

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim())

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать'
// let sub=(num1,num2)=>{
//     return str.substring(num1,num2)
//
// }
// console.log(sub(0,7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let insertDash=(str)=>{
//     let x=str.split(' ').join('-').toUpperCase()
//     return x
// }
// let str = "HTML JavaScript PHP";
// document.write(insertDash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let first=(str)=>{
//     return str[0].toUpperCase()+str.slice(1)
// }
// let str='hello okten'
// console.log(first(str))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize=(str)=>{
//     return str.split(' ').map(item=>item.charAt(0).toUpperCase()+item.slice(1)).join(' ')
// }
// let str='hello okten i am nico'
// console.log(capitalize(str))


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let x=(str,sym)=>{
//     let arr=[]
//     if (str.includes(sym)){
//        let x=str.split(sym)
//        x.forEach(item=>{
//            if (item)arr.push(item)
//        })
//         console.log(arr.join(' '))
//     }
// }
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// x(n2,'-')