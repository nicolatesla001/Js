// a) додає клас з назвою групи, елементу з ід main_header

// document.getElementById('main_header').classList.add('dec-2021')

// b) робить шириниу елементу ul 400px

// let ul=document.getElementsByTagName('ul')
// console.log(ul)
// ul[0].style.width='400px'
// ul[0].style.border='1px solid black'

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let link=document.getElementsByClassName('linkList')
// for (const linkElement of link) {
//     linkElement.style.width='50%'
//     linkElement.style.border='1px solid black'
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let text=document.getElementsByClassName('listElement2')
// text[0].innerHTML = '<a href="">New Text</a>'

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let li=document.getElementsByTagName('li')
// for (const liElement of li) {
// console.log(liElement)
//     liElement.style.backgroundColor='silver'
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let aa=document.getElementsByTagName('a')
// for (const aaElement of aa) {
// console.log(aaElement)
//     aaElement.classList.add('anchor')
//
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//     змінює йому розмір тексту на 40 пікселів
// let aaa=document.getElementsByTagName('a')
// for (const aaaElement of aaa) {
// console.log(aaaElement)
//     if(aaaElement.innerText==='link3'){
//         aaaElement.style.fontSize='40px'
//     }
//
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aaaa=document.getElementsByTagName('a')
// console.log(aaaa)
// for (const aaaaElement of aaaa) {
//     console.log(aaaaElement)
//     let clas=aaaaElement.innerText
//     aaaaElement.classList.add(`element_${clas}`)
//
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub=document.getElementsByClassName('sub-header')
// console.log(sub)
// for (const subElement of sub) {
//     subElement.style.backgroundColor=prompt('Який колір?')
//
// }

// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()

// let sub2=document.getElementsByClassName('sub-header')
// console.log(sub2)
// for (const sub2Element of sub2) {
//     console.log(sub2Element)
//     if (sub2Element.innerText==='content 2 segment'){
//         sub2Element.style.color=prompt('Який колір?')
//     }
//
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let con=document.getElementsByClassName('content_1')
// console.log(con)
// con[0].innerText=prompt('Який текст?')

// l) отримати елементи p та змінити їм padding на 20px
// let pEle=document.getElementsByTagName('p')
// console.log(pEle);
// for (const pEleElement of pEle) {
//     console.log(pEleElement)
//     pEleElement.style.padding='20px'
//     pEleElement.style.border='1px solid black'
//
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text2=document.getElementsByClassName('text2')
// console.log(text2)
// text2[0].innerText='dec 2021'

// for (const text2Element of text2) {
//     console.log(text2Element)
//     text2Element.innerText='dec-2021'
//
// }
