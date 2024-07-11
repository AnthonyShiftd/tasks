//Навигация:_________________________________________________________________________________________________________________________________________

console.log(document.body.children) //Выдает все HTML-элементы в body

//Поиск элементов getElement, querySelector__________________________________________________________________________________________________________

//Синтаксис:
//getElementById()
const idElement = document.getElementById('ul_body')
console.log(idElement)
idElement.style.color = 'red'

//getElenemtByTagName() (Возвращает коллекцию)
const searchTagName = document.getElementsByTagName('h1')
console.log(searchTagName)

//getElementByClassName (Возвращает коллекцию)
const searchClassName = document.getElementsByClassName('li_tag')
console.log(searchClassName)

//querySelector()
const element = document.querySelector('div')
console.log(element)

//querySelectorAll()
const allElement = document.querySelectorAll('div')[1]
console.log(allElement)

//matches - в процессе пребора сравнивает элементы с заданым. 
//Возвращает все подходящие элементы.
const f = document.body.children
for(let elem of document.body.children){
    if(elem.matches('div')){
        console.log(elem)
    }
}

//closest - метод поднимается вверх по родительской ветке и ищет 
//первого родителя, подходящего под запрос.
const child = document.querySelector('li')
console.log(child.closest('ul'))//ul
console.log(child.closest('div'))//null(такого родителя нет)

// Изменение документа HTML:_________________________________________________________________________________________________________________________

//.innerHTML - свойство дает доступ к содержимому HTML-элемента:
const elementHOne = document.querySelector('h1')
elementHOne.innerHTML = 'Тут должно было быть "Добрый день!'

//.outerHTML - свойство дает доступ к HTML-разметке документа:
const elementHOneTwo = document.querySelectorAll('h1')[1]
console.log(elementHOneTwo)
elementHOneTwo.outerHTML = '<h1>А тут должно было быть "Добрый вечер!"</h1>'

//.textContent - безопасный способ добавить текст в элемент (даже если он будет содержать HTML-разметку)
const elementHOneThree = document.getElementById('zaeb')
elementHOneThree.textContent = '<p>Не важно, сколько тегов</p><span>, а важно уметь ими пользоваться!</span>'

//ОПЕРАЦИИ С ЭЛЕМЕНТАМИ_______________________________________________________________________________________________________________

//СОЗДАНИЕ ЭЛЕМЕНТОВ-----------------

const newElement = document.createElement('span') //создаем новый элемент
newElement.innerHTML = '<p style = "color:yellow">ПриветЯНовыйЭлементСозданныйВСкрипте!</p>' //наполняем его
const elementWithBenefits = document.getElementById('zaeb') //получаем "Якорь" от которого будем размещать элемент

elementWithBenefits.before(newElement) //Добавление элемента перед "Якорем"
elementWithBenefits.prepend(newElement) //Добавление элемента внутрь "Якоря" в начало
elementWithBenefits.append(newElement) //Добавление элемента внутрь "Якоря" в конец
elementWithBenefits.after(newElement) //Добавление элемента после "Якоря"

//ПЕРЕНОС ЭЛЕМЕНТОВ----------------
elementHOne.before(elementHOneThree) //При переносе исходый элемент исчезает с предыдущего места.

//КЛОНИРОВАНИЕ ЭЛЕМЕНТОВ--------------------
const cloneNewElement = newElement.cloneNode(true) /*Клонирование элемента с содержимым. 
                                                                Если нужно без содержимого аргумента 'true' не должно быть.*/
elementHOneThree.after(cloneNewElement)

//УДАЛЕНИЕ ЭЛЕМЕНТОВ-------------------------
newElement.remove() //Удаление элемента

//СТИЛИ И КЛАССЫ________________________________________________________________________________________________________________________________________

//ClassName------------------
const classEndElement = document.querySelector('.end')
classEndElement.className = 'end-div end' //изменили класс "end" на класс "end_div"

//ClassList------------------
classEndElement.classList.add('end-div-copy') //добавить класс
classEndElement.classList.remove('end-div') //удалить класс
classEndElement.classList.toggle('end') //удаляет класс, если он есть. Добавляет - если его нет.
console.log(classEndElement.classList.contains('end'))//проверяет, есть ли такой класс

//ДОБАВЛЕНИЕ СТИЛЕЙ-------------------------
const all = document.body.children
let allEnd
for(let i = 0; i<all.length; i++){
    if(all[i].innerHTML === "Конец"){
        allEnd = all[i]
    }}

allEnd.style.backgroundColor = 'blue' //добавили стиль









