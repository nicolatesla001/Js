// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Скільки хвилин?')
// if (time >= 0 && time <= 14) {
//     console.log(`I`)
// } else if (time >= 15 && time <= 29) {
//     console.log(`II`)
//
// } else if (time >= 30 && time <= 44) {
//     console.log(`III`)
//
// } else if (time >= 45 && time <= 59) {
//     console.log(`IV`)
// }
// else{console.log('Попробуйте ще раз')}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day=+prompt('Яке сьогодні число?')
// if (day>=1 && day<=10){console.log('Перша декада')}
// else if (day>=11 && day<=20){console.log('Друга декада')}
// else if (day>=21 && day<=31){console.log('Третя декада')}
// else {console.log('У цьому місяці 31 день.Попробуйте ще раз')}
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом
// (тернаркою)

// let test = prompt()
// if (test === 'true') {
//     console.log('ВІРНО')
// } else {
//     console.log('НЕПРАВИЛЬНО')
// }
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3


// let a=+prompt('Чому дорівнює а?')
// if (a!==0){console.log('ВІРНО')}
// else { console.log('НЕВІРНО')}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день.

// let plan = +prompt('Порядковий номер сьогоднішнього дня?(від 1 до 7)')
// switch (plan) {
//     case 1:
//         console.log('подивитись лекцію')
//         break
//     case 2:
//         console.log('відвідати семінар')
//         break
//     case 3:
//         console.log('подивтись превю')
//         break
//     case 4:
//         console.log('сходити в магазин')
//         break
//     case 5:
//         console.log('поприбирати')
//         break
//     case 6:
//         console.log('приготувати вечерю')
//         break
//     case 7:
//         console.log('зустрітись з друзями')
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year=+prompt('Скільки днів у році?')
// if (year % 2 === 0 ){
//     console.log('Вискокосний')
// }
// else {console.log('Не вискокосний')}


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let javaName=prompt('Яка офіційна навза Java?')
// if (javaName==='ECMAScript'){
//     alert('Правильно!')
// }
// else {alert('Не знаєте? ECMAScript')}