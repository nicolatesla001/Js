// setTimeout(() => {
//        console.log('Встати');
//        setTimeout(() => {
//            console.log('Помитись');
//            setTimeout(() => {
//                console.log('Сніданок');
//                setTimeout(() => {
//                    console.log('Випити каву');
//                    setTimeout(()=>{
//                        console.log('Зарядка');
//                        setTimeout(()=>{
//                            console.log('Прочитати книгу');
//                            setTimeout(()=>{
//                                console.log('Обід');
//                                setTimeout(()=>{
//                                    console.log('Погодувати собаку');
//                                    setTimeout(()=>{
//                                        console.log('Прогулянка');
//                                        setTimeout(()=>{
//                                            console.log('Повечеряти');
//                                            setTimeout(()=>{
//                                                console.log('Подивитсь фільм');
//                                                setTimeout(()=>{
//                                                    console.log('Зробити розтяжку');
//                                                    setTimeout(()=>{
//                                                        console.log('Прийняти душ');
//                                                        setTimeout(()=>{
//                                                            console.log('Заснути');},1500)
//                                                    },1500)
//                                                })
//                                            },1500)
//                                        })
//                                    },1500)
//                                })
//                            },1500)
//                        },1500)
//                    },1500)
//                }, 1500)
//            }, 1500)
//        }, 1500)
//    }, 1500)

// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Встати');
//         resolve();
//     }, 1500)
// })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('Помитись')
//                 resolve()
//             }, 1500)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('Сніданок')
//                 resolve()
//             }, 1500)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('Випити каву')
//                 resolve()
//             }, 1500)
//         })
//     })
// .then(()=>{
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             console.log('Зарядка')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             console.log('Прочитати книгу')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Обід')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Погодувати собаку')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Прогулянка')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Повечеряти')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Подивитсь фільм')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Зробити розтяжку')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Прийняти душ')
//             resolve()
//         },1500)
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Заснути')
//             resolve()
//         },1500)
//     })
// })

// let set1='Встати'
// let set2='Помитись'
// let set3='Сніданок'
// let set4='Випити каву'
// let set5='Прочитати книгу'
// let set6='Обід'
// let set7='Погодувати собаку'
// let set8='Прогулянка'
// let set9='Подивитсь фільм'
// let set10='Зробити розтяжку'
// let set11='Прийняти душ'
// let set12='Заснути'
//
// function newPromise(set){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(set)
//             resolve()
//         },1500)
//     })
// }
//
// newPromise(set1)
// .then(()=>newPromise(set2))
// .then(()=>newPromise(set3))
// .then(()=>newPromise(set4))
// .then(()=>newPromise(set5))
// .then(()=>newPromise(set6))
// .then(()=>newPromise(set7))
// .then(()=>newPromise(set8))
// .then(()=>newPromise(set9))
// .then(()=>newPromise(set10))
// .then(()=>newPromise(set11))
// .then(()=>newPromise(set12))

function newPromise(set){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(set)
            resolve()
        },1500)
    })
}

let set=['Встати','Помитись','Сніданок','Випити каву','Прочитати книгу','Обід','Погодувати собаку','Прогулянка',
    'Подивитсь фільм','Зробити розтяжку','Прийняти душ','Заснути']
async function day(arg){
    for (const item of arg) {
        await newPromise(item)
    }
}
day(set)