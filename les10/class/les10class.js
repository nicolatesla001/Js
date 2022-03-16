// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let divOne=document.createElement('div')
// divOne.innerText='Ввід 1'
// divOne.style.margin='30px'
// document.body.append(divOne)
//
// let divTwo=document.createElement('div')
// divTwo.innerText='Ввід 2'
// divTwo.style.margin='30px'
// document.body.append(divTwo)
//
// let formOne=document.createElement('form')
// formOne.setAttribute('name','formOne')
// divOne.append(formOne)
//
// let formTwo=document.createElement('form')
// formTwo.setAttribute('name', 'formTwo')
// divTwo.append(formTwo)
//
// let inputOne=document.createElement('input')
// inputOne.setAttribute('name','inputOne')
// inputOne.style.margin='5px'
//
// let inputTwo=document.createElement('input')
// inputTwo.setAttribute('name','inputTwo')
//
// let inputTree=document.createElement('input')
// inputTree.setAttribute('name','inputTree')
// inputTree.style.margin='5px'
//
// let inputFour=document.createElement('input')
// inputFour.setAttribute('name','inputFour')
//
// let button=document.createElement('button')
// button.innerText='ЛЕС ГОУ'
//
// button.style.marginLeft='170px'
// button.style.borderRadius='10px'
//
// document.body.append(button)
//
// formOne.append(inputOne,inputTwo)
//
// formTwo.append(inputTree,inputFour)
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputOne.value)
//     console.log(document.forms.formOne.inputTwo.value)
//     console.log(document.forms.formTwo.inputTree.value)
//     console.log(document.forms.formTwo.inputFour.value)
// })
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputOne=document.createElement('input')
// inputOne.value='Введіть кілкість рядків'
// inputOne.onclick = function (){inputOne.value=''}
//
// let inputTwo=document.createElement('input')
// inputTwo.value='Введіть кількість стовбців'
// inputTwo.onclick = function (){inputTwo.value=''}
//
// let inputTree=document.createElement('input')
// inputTree.value='Введіть вміст'
// inputTree.onclick = function (){inputTree.value=''}
//
// let button=document.createElement('button')
// button.innerText='ЛЕС ГОУ'
//
// document.body.append(inputOne, inputTwo, inputTree,button)
//
// button.addEventListener('click', function (){
//     let tr=inputOne.value
//     let td=inputTwo.value
//     let textt=inputTree.value
//
//     function tabl(tr,td,textt){
//         let table=document.createElement('table')
//         let divT=document.createElement('div')
//
//         table.style.border='1px solid red'
//         divT.append(table)
//        document.body.append(divT)
//
//         for (let i=0;i<tr;i++){
//             let tr=document.createElement('tr')
//             tr.style.border='1px solid black'
//
//             for (let k=0;k<td;k++){
//                 let td=document.createElement('td')
//                 td.style.border='1px solid blue'
//                 td.innerText=`${textt}`
//                 table.append(tr);
//                 tr.append(td);
//             }
//         }
//     }
//     tabl(tr,td,textt)
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let words = ['олень', 'свиня', 'дурак', 'бомж']
// let inputOne = document.createElement('input')
// let butt = document.createElement('button')
// butt.innerText = 'Перевір'
// document.body.append(inputOne, butt)
//
// butt.addEventListener('click', function () {
//     let inputValue = inputOne.value
//     for (let word of words) {
//         if (word === inputValue) {
//             alert('Хто обзивається сам так називається!')
//             inputValue = 'Попробуй ще раз'
//             return
//         } else (alert('Добре!)'))
//
//     }
// })

// let words = ['олень', 'свиня', 'дурак', 'бомж']
// let inputOne=document.createElement('input')
// let butt=document.createElement('button')
// butt.innerText='Перевір'
// document.body.append(inputOne,butt)
//
// butt.addEventListener('click', function (e){
//
//     for (let word of words){
//         if (inputOne.value.includes(word)){
//             alert('Но но но')
//         }
//         else (alert('Добре)'))
//         inputOne.value=''
//         return
//     }
// })

