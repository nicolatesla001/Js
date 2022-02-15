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




