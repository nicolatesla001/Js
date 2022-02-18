// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, ' +
// 'рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars(model, vyrobnyk, rik, maxsh, obyem) {
//     this.model = model;
//     this.vyrobnyk=vyrobnyk;
//     this.rik=rik;
//     this.maxsh=maxsh;
//     this.obyem=obyem;
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.maxsh} на годину`)
//     };
//
//     this.info=function (){
//         for (const key in this){
//             if (typeof this[key] !=='function')
//                 console.log(`${key} ${this[key]}`)
//         }
//     };
//     this.increaseMaxSpeed=function (newSpeed){this.maxsh=this.maxsh+newSpeed};
//     this.changeYear=function (newValue){this.rik=newValue};
//     this.addDriver=function (driver){this.driver=driver}
// }
//
// let car1=new Cars('Toyota','Japan',2009,200,4000)
// console.log(car1)
// car1.info()
// car1.increaseMaxSpeed(50)
// car1.changeYear(2010)
// car1.info()
// car1.addDriver('Pupkin')
// console.log(car1)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, ' +
// 'максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars{
//
//     constructor(model, vyrobnyk, rik, maxsh, obyem) {
//         this.model = model;
//         this.vyrobnyk = vyrobnyk;
//         this.rik = rik;
//         this.maxsh = maxsh;
//         this.obyem = obyem;
//     }
//     drive(){console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);}
//     info(){for (const key in this){console.log(`${key} ${this[key]}`)}}
//     newSpeed(shvid){this.maxsh=this.maxsh+shvid}
//     newValue(newValue){this.rik=newValue}
//     addDriver(driver){this.driver=driver}
// }
// let car1=new Cars('Toyota','Japan',2009,200,4000)
// console.log(car1)
// car1.info()
// car1.newSpeed(50)
// car1.newValue(2010)
// car1.info()
// car1.addDriver('Pupkin')
// console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Popelushka{
//
//     constructor(name1, age, sizeF) {
//         this.name1 = name1;
//         this.age = age;
//         this.sizeF = sizeF;
//     }
// }
//
// const popelushkaArray = [
//     new Popelushka('igor', 22, 46),
//     new Popelushka('nina', 21, 25),
//     new Popelushka('ira', 24, 30),
//     new Popelushka('lesia', 26, 31),
//     new Popelushka('nadia', 29, 32),
//     new Popelushka('genia', 90, 58),
//     new Popelushka('lola', 87, 34),
//     new Popelushka('goha', 34, 39),
// ];
// console.log(popelushkaArray);
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince{
//     constructor(name1, age, tuflya) {
//         this.name1 = name1;
//         this.age = age;
//         this.tuflya = tuflya;
//     }
// }
// console.log(new Prince('Vasya',25,39))
//
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// const popelushkaPrince = (popelushkaArray,princ) => {
//     for (const item of popelushkaArray){
//         if (popelushkaArray.sizeF=== princ.tuflya){
//             return `ти знайшов її ${item.name1}`
//         }
//     }
//
// }
// console.log(popelushkaPrince(popelushkaArray,Prince))
//
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// console.log(popelushkaArray.find((value) =>{ value.sizeF === Prince.tuflya}))
