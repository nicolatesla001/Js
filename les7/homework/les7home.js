// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// class User{
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// let arrUser=[
//     new User(9, 'Roman', 'Ignativ', 'ignat@gmail.com', 30680000044),
//     new User(2, 'Ivan', 'Abrikosov', 'ivk@gmail.com', 30680000999),
//     new User(3, 'Oleg', 'Voronin', 'olvo@gmail.com', 30680000088),
//     new User(5, 'Andriy', 'Shevchenko', 'sheva@gmail.com', 30680000066),
//     new User(1, 'Bodya', 'Pupkin', 'bad@gmail.com', 30680000001),
//     new User(7, 'Nazar', 'Burda', 'bur@gmail.com', 30680000022),
//     new User(8, 'Stepan', 'Giga', 'sgig@gmail.com', 30680000033),
//     new User(6, 'Sergiy', 'Matvienko', 'matv@gmail.com', 30680000011),
//     new User(10, 'Vasya', 'Polek', 'polka@gmail.com', 30680000055),
//     new User(4, 'Igor', 'Loza', 'lozi@gmail.com', 30680000077)
// ]
// console.log(arrUser)


//     // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filter=arrUser.filter(value=>{
// if (value.id%2===0){
//     return value
// }})
// console.log(filter)

    // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort=arrUser.sort((a,b)=> a.id-b.id)
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client{
//
//     constructor(id, name, surnam, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surnam = surnam;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arrClient=[
//     new Client(9, 'Roman', 'Ignativ', 'ignat@gmail.com', 30680000044,['soup']),
//     new Client(2, 'Ivan', 'Abrikosov', 'ivk@gmail.com', 30680000999,['bread']),
//     new Client(3, 'Oleg', 'Voronin', 'olvo@gmail.com', 30680000088,['bread','soup']),
//     new Client(5, 'Andriy', 'Shevchenko', 'sheva@gmail.com', 30680000066,['bread','copybook']),
//     new Client(1, 'Bodya', 'Pupkin', 'bad@gmail.com', 30680000001,['bread','soup']),
//     new Client(7, 'Nazar', 'Burda', 'bur@gmail.com', 30680000022,['bread']),
//     new Client(8, 'Stepan', 'Giga', 'sgig@gmail.com', 30680000033,['bread','soup','pen']),
//     new Client(6, 'Sergiy', 'Matvienko', 'matv@gmail.com', 30680000011,['bread','soup','book','pen','copybook']),
//     new Client(10, 'Vasya', 'Polek', 'polka@gmail.com', 30680000055,['bread','soup']),
//     new Client(4, 'Igor', 'Loza', 'lozi@gmail.com', 30680000077,['bread','soup','book'])
// ]
// console.log(arrClient)
//
//     // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort=arrClient.sort((a,b)=>a.order.length-b.order.length)
// console.log(sort)