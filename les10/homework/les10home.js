// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".

// let text=document.getElementById('text')
// let but=document.getElementById('button')
// but.addEventListener('click', function (e){
//     text.style.display='none'
// })
    // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// but.addEventListener('click', function (e){
//     but.style.display='none'
// })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form=document.forms[0]
// let input=document.getElementById('age')
// input.onclick=function (e){
//     input.value=''
// }
//
//
// form.onsubmit=function (e){
//     e.preventDefault()
//     if (e.target.age.value>=18){
//         console.log('OK!')
//         alert('Все добре')
//     }
//     else {
//         console.log('Но но ноо')
//     alert('Твій вік менше 17')}
// }
//
// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menuE= document.querySelector('.menu')
// let titleE=menuE.querySelector('.title')
// titleE.onclick=function (e){
//     menuE.classList.toggle('title')
// }

    // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    // Вывести список комментариев в документ, каждый в своем блоке.
    // Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {name: 'Максим', body: 'Вчи English'},
//     {name: 'Іван', body: 'Досить сидіти, вже пізно'},
//     {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
//     {name: 'Іра', body: 'Воно, тобі треба?'}
// ];
//
// let divMain=document.createElement('div')
// for (const item of comments) {
//     let div=document.createElement('div')
//     let h4=document.createElement('h4')
//     let p=document.createElement('p')
//     let btn=document.createElement('button')
//     let hr=document.createElement('hr')
//
//      h4.innerText=item.name
//     p.innerText=item.body
//     btn.innerText='Закрити'
//
//     btn.onclick= function (e){
//         p.classList.toggle('coment')
//     }
//     div.append(h4,p,btn)
//     divMain.append(div,hr)
// }
// document.body.append(divMain)







