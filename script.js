// ПЕРЕМЕННЫЕ_____________________________________________________________________________

// const - переменная, значение которой не меняется. Должно присваиваться значение сразу 
//         после ее объявления
// let - переменная, значение которой может меняться.

// ПРИМИТИВНЫЕ ТИПЫ:______________________________________________________________________

// String (Строка)
// Boolean (Логический)
// Number (Число)
// null - Присваевается, когда необходимо указать, что у переменной нет значения.
// undefined
// Symbol (Символ)

// Ссылочный тип:

// object (объект):
        //Включает в себя, собственно ОБЪЕКТ и МАССИВ (массив тоже объект).
        //Переменная хранит ТОЛЬКО ССЫЛКУ на объект, который находится в другой области памяти, 
        //но не сам объект.\

        //Форма записи объекта:
         const objectA = {
             a: 10,
             b: true
         }

         const copyOfA = objectA //создание копии объекта "objectA"

         copyOfA.a = 20 //обращение к свойству объекта с последующим его изменеием
        
         console.log(objectA.a)

         copyOfA.с = 'abc' //добавление свойства к объекту

         console.log(objectA)

//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ:
//Принцип JS, согласно которому переменную со значением типа "Строка", 
//можно переопределить значением типо "число" или "boolean", присвоить объект и т.д.

//  function a(){
//      console.log('hey')
//  }

//  a()

//  a = 10

    //a() -Error (функция а переопределена на числовое значение и больше не существует)

//СТРЕЛОЧНАЯ ФУНКЦИЯ

const a = () => {
    console.log('Hey')
}

a()

//ОБЪЕКТЫ_______________________________________________________________________________
//не забывать что это ССЫЛОЧНЫЙ ТИП ДАННЫХ.
//Если значением свойства объекта является функция, такое свойство называется МЕТОДОМ.

//Синтаксис (Dot notation (точечная запись))
const myName = {
    name: 'Anton', //свойство объекта со значением.
    surname: 'Domrachev',
    russian: true,
    age: 28
}

//Обращение к свойствам объекта:
console.log(myName.age)

//Изменение значений свойств:
myName.age = 29
console.log(myName.age)

//Добавление нового свойства:
//1: С помощью DOT NOTATION:
myName.city = 'Znamensk'
console.log(myName)
//2: С помощью квадратных скобок
myName['wife'] = true //не забывать КАВЫЧКИ в названии свойства!
console.log(myName)
//Способ через "кавчки" позволяет присвоить имя свойству с помощью переменной типа "строка":
const girl = 'wife'
myName[girl] = 'Irina'
console.log(myName)
console.log(myName.surname)
 
// Удаление свойств объекта:
delete myName.surname
console.log(myName)

//Вложенные объекты:
const myCity = {
    country: 'Russia',
    city: {
        name: 'Znamensk',
        district: 'Astrahanstaya oblast'
    }
}

//Обращение к вложенным свойствам:
    //1. Dot notation:
    console.log(myCity.city.district)
    //2. Скобки:
    console.log(myCity['city'].name)

//Переменные можно использовать в качестве значений для объектов:
    const work = 'lawer'
    const company = 'TM-Servise'
    const hardWorker = {
            work, //Если название свойства совпадает с названием переменной для значения этого свойства, можно записывать свойство следующим образом
            workSpase: company
    }
    console.log(hardWorker)

    //Если название свойства совпадает с названием переменной для значения этого свойства,
    //можно записывать свойство следующим образом

//ГЛОБАЛЬНЫЕ ОБЪЕКТЫ:

//window - Глобальный объект веб-браузера.

//global - Глобальный объект Node.js

//globalThis - Универсальный глобальный объект (подходит для Веб-браузера и Nose.js).

//МЕТОДЫ - Свойства объекта, значением которого является функция.
        //Синтаксис:
            const myCityMethod = {
            city: 'Moscow',
            cityInConsole () {
                console.log(myCityMethod['city']) //запись метода
            }
        }
        myCityMethod.cityInConsole() //вызов метода

//JSON - JavaScript object notation._______________________________________________________
        //Формать обмена данными между серверами и браузерами.

//Пример синтаксиса JSON (приходит в виде строки):
//{"userId": 1, "id": 1, "title": "Test", "status": {"completed": false}}
       

           const json = {
           userId: 1,
           id: 1,
           title: "Test",
           status: {
               completed: false
           }
       }

//Конвертация JavaScript в JSON:
        const javaScriptParce  = JSON.stringify(json)
        console.log(javaScriptParce)

//Конвертация JSON в JavaScript:

        const jsonParse = JSON.parse(javaScriptParce)
        console.log(jsonParse)

//МУТАЦИЯ______________________________________________________________________________
//Пример мутации объекта (изменение свойства объекта - это мутация): 
 const russia = {
    federation: true,
    people: 144000000,
    presidentName: 'PVV'
 }
 const copyRussia = russia
 console.log(russia)

 copyRussia['federation'] = false
 console.log(russia)
 console.log(copyRussia)

 //Как избежать мутации?

    //1. Создать новый объект с идентичными свойствами:
 const mobilePhone = {
    model: 'Nothing',
    price: 44000,
    iphone: false,
    sales: {
        mVideo: true,
        dns: false
    }
 }


 const mobilePhone2 = Object.assign({}, mobilePhone) //создание нового объекта "mobilePhone2" со свойствами, идентичными объекту "mobilePhone" 
                                                     //ВАЖНО! В данном случае можно избажать мутирования только корневых свойств. 
                                                     //Если в объекте есть вложенные свойства - их изменение повлечет мутацию в исходном объекте.
 
 mobilePhone2.price = 45000
 mobilePhone2.sales.dns = true
 console.log(mobilePhone.price)
 console.log(mobilePhone2.price)
 
    //2. Разделить объект на свойства и создать новый объект:
const video = {
    likes: 129,
    fun: true,
    sinopsis: {
        picture: 'natural',
        people: true,
        animals: false
    }
}

const video2 = {...video}//создание нового объекта "video2" со свойствами, идентичными объекту "video"
                         //с помощью ОПЕРАТОРА РАЗДЕЛЕНИЯ ОБЪЕКТА НА СВОЙСТВА "..." и присваивания данных свойств новому объекту.
                         //ВАЖНО! В данном случае можно избажать мутирования только корневых свойств. 
                         //Если в объекте есть вложенные свойства - их изменение повлечет мутацию в исходном объекте.

video2.fun = false
video2.sinopsis.people = false
console.log(video)
console.log(video2)

    //3. Использовать конвертацию JSON:

const video3 = {
    likes: 2222,
    scary: true,
    sinopsis: {
        picture: 'natural',
        people: true,
        animals: false
    }
}

const video4 = JSON.parse(JSON.stringify(video3))

video4.likes = 1111
video4.sinopsis.people = false


console.log(video3)
console.log(video4)

//ФУНКЦИИ________________________________________________________________________
//Бок кода, который можно вызывать и выполнять многократно. Это ОБЪЕКТ.

//Синтаксис:
function sum(r) {
    const c = zg + gz + r 
    console.log(c)
}

let zg = 1
let gz = 2
sum(5) //Вызов функции с аргументом r = 5
zg = 3
gz = 4
sum(5)

//Функции могут быть:
//1)Иментованной
//2)Присвоенной переменной
//3)Анонимной
//4)Быть аргументом при вызове другой функции
//5) Значением свойства объекта (методом)

//Пример функции с возвратом результата:
function func1(at, bt) {
    let ct
    ct = at + bt
    return ct //возврат результата функции
}
//если у функции нет "return", функци вернет "undefinde"

console.log (func1(4, 4)) //Вызов функции

//Передача значения по ссылке

function age(person) {
    person.age +=1 //Увеличиваем свойство "age" переданного объекта на один.
    return person
}
const singer = {
    name: 'Eminem',
    age: 42,
    style: 'rap'
}
age(singer)
console.log(singer)

//При помощи функции крайне не рекомендуется изменять свойства глобальных объектов.
//Поэтому внутри функции создают копию передаваемого объекта и мутируют свойста в нем, 
//не нарушая исходный объект, после чего возвращают получившийся объект.

const singerTwo = {
    name: 'Bieber',
    age: 28,
    style: 'pop'
}

function ageTwo(person) {
    const updateSingerTwo = JSON.parse(JSON.stringify(person))
    updateSingerTwo.age +=1
    return updateSingerTwo
}
const updateSingerTwo = ageTwo(singerTwo)
console.log(singerTwo.age)
console.log(updateSingerTwo.age)

//КОЛБЭК ФУНКЦИИ__________________________________________________________________
//Функция, в аргумент которой передается другая функция

function callBackFnc()
{
    console.log('Hello')
}
setTimeout(callBackFnc, 2000)

//ОБЛАСТИ ВИДИМОСТИ_______________________________________________________________
//Область видимости определяет границы действия переменной.

//Глобальная область видимости:
//Используются переменные, объявленные в глобальной области видимости.

//Локальная область видимости:
//Используются переменные, объявленные в локальной области видимости.
    //1.Область видимости функции
    //2. Область видимости блока (функции, циклы и т.д.)

let gr //Глобальная область видимости.
let fr //Глобальная область видимости.

function myNewFnc() {
let gr //Локальная область видимости.
gr = 10 //Локальная область видимости.
fr = true 
console.log(gr)
}

myNewFnc()
console.log(gr)
console.log(fr)

//Цепочка областей видимости:

const file = 5 //глобальная область видимости
function oblastVidimostiOne(){ //локальная область видимости 1
    function oblastVidimostiTwo (){ //локальная область видимости 2
        console.log(file)
    }
    oblastVidimostiTwo() //вывод локальной области видимости 2 в лок. область видимости 1
}
oblastVidimostiOne() //вывод лок. области видимости 2 в глобальную область видимости

//СТРОГИЙ РЕЖИМ

//'use strict' - Запрещает использование необъявленных переменных. Должная стоять в начале кода

hy = 25
console.log(hy) //в строгом режиме выдаст Error, поскольку переменная hy не была ранее объявлена.

//ОПЕРАТОРЫ__________________________________________________________________________
//это встроеная в JS функция.

//Арифметические:
    // + - * /

//Сравнения:
    //=== - строгое сравнение. Сравнение, включая тип данных.
    //!== - не равно.
    //<= - меньше, либо равно.
    //>= - больше, либо равно.

//Логические операторы:
    //! - не
    //&& - и
    //|| - или

//Присваивание:
    //= - присваивает значение

//Текстовые операторы:

    //typeof - проверка типа значения

    //intanceof - пренадлежность объекта классу

    //new - создает новый экземпляр того или иного объекта (массива, объекта)

    //delete - удаление

//------

//Унарные операторы - операторы с одним операндом (аргументами).
    //Пример:
    //а++
    //new Object()

//Бинарные операторы - операторы с двумя операндами(аргументами).
    //Пример:
    //a + b
    //a = 5
    //a === b

//------

//Инфиксная запись - оператор стоит между операндами.
    //Пример:
    //a + b
    //a = 5
    //a === b

//Префиксная запись - оператор стоит перед операндом.
    //Пример:
    //++a
    //delete obj.a

//Постфиксная запись - оператор стоит после операндом.
    //Пример:
    //a++
    //myFunc() (скобки - оператор вызова функции)

//---------

//ПРИОРИТЕТНОСТЬ ОПЕРАТОРОВ

//В арифметических операторах работают правила арифметики.

//Логические операторы:
//! - оператор "НЕ". Всегда возвращает либо true либо false/
//!! - оператор "НЕ НЕ". Используется для конвертации любого значения в Boolean.
//&& - оператор "И". Возвращает значение одного из операндов.
//|| - оператор "ИЛИ". Возвращает значение одного из операндов.

//-----------

//Ложные значения:
//Значения, которые при переводе в тип Boolean возвращают "false":
//False
//0
//'' (пустая строка)
//undefined
//null

let isUndefined
let zeroObject = {}
console.log(typeof(isUndefined) === 'undefined') //true
console.log(1 === '1') //false
console.log(1 == '1') //true

console.log(!10) //false
console.log(!0) //true
console.log(!true) //false
console.log(!undefined) //true
console.log(!!1) //true
console.log(!!undefined) //false
console.log(zeroObject)
console.log(!!zeroObject) //true
console.log(isUndefined)
console.log(!!isUndefined) //false
console.log(zeroObject)

//------------

//Операторы && и || - являются операторами короткого замыкания.

// a && b: ищет ложный результат.
//Если "а" ложно, то результатом выражения будет "а". До "b" код не доходит.
//Если "a" - истинно, а "b" ложно, то результат выражения будет "b"
//Если а=true и b=true, то результат выражения будет b

//a || b: ищет истинный результат.
//Если "а" истинно, то результат выражения "а"
//Если "а" ложно, а "b" истинно, результат выражения "b"
//Если "а" истинно и "b" истинно, результат "a"

//---------

//... - оператор разделения объекта на свойства.

const button = {
    value: 'Open',
    color: "green"
}

const redButton = {
    ...button, //присваиваем новому объекту "redButton" свойства объекта "button"
    color: 'red'
}

console.log(redButton)

//Объединение объектов с помощью оператора "...":
const gkr = {
    name: 'gkr',
    age: '2 second'
}

const gkrInfoTwo = {
    type: 'constanta'
}

const gkrEnding = {
    ...gkr,
    ...gkrInfoTwo
}

console.log(gkrEnding)

//КОНКАТЕНАЦИЯ СТРОК (объединение)_________________________________________________________________
//Производися с помощью оператора +

//1)
'Hello ' + 'World' // 'Hello World'

//2)
const wordOne = 'Hello'
const wordTwo = 'World'
const greeting = wordOne + ' ' + wordTwo
console.log(greeting) //Hello World

//3) Шаблонные сроки:
const me = {
    name: 'Anton',
    city: 'Znamensk'
}
const greetingTwo = `My name is ${me.name}! I'm from ${me.city}!`
console.log(greetingTwo) //My name is Anton! I'm from Znamensk!

//При конкатенации любого типа со строкой все типы конвертируются в строку
//При конкатенации любого типа (кроме строки) с числом, все типы конвертируются в число. 
//(undefined преобразуется в NaN)
console.log(10 + '10')//'1010'
console.log(10 + true)//11
console.log(undefined + 1) //NaN

//ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ________________________________________________________
//Синтаксис: (всегда анонимное)
const rty = 
function(alj, blj){
let logo
logo = alj + blj
console.log(logo)
return logo
}

rty(34, 51)

//Использование функционального выражения в колбэк функциях:
setTimeout(function(){console.log('Отложенное сообщение')}, 3000)

//-----------------

//СТРЕЛОЧНАЯ ФУНКЦИЯ:
//Стрелочные функции всегда анонимны.
//Синтаксис:
const robinHoodFunc = (a) => {
console.log(a)
return a
}
const robinHoodFuncReturn = robinHoodFunc('succesful!')
const rock = `I'm ${robinHoodFuncReturn}`
console.log(rock)

//Вызов стрелочной функции в колбэк функции:
setTimeout(() => {console.log('Это сообщение мы ждем ваще 5 сек! Писос, правда?')}, 5000)

//------------

//Объявление значений параметров функции по умолчанию.
function game(player, gamers = 2)//Задано значение параметра "gamers" по умолчанию
{
    console.log(player * gamers)
}

game(10,3) //30
game(10) //20

//Стрелочная функция с параметром по умолчанию:

const hed = (value, multiplaer = 1) => {
console.log(value + multiplaer)
}

hed(1, 8) //

//Пример использования объекта по умолчанию:

const amk = {
    account: 'id123',
    type: 'picture',
}
const nuj = (post, addadAt = Date()) => ({
    ...post,
    addadAt,}) - //круглые скобки подразумаевают "return". 
                 //Способ сокращенного синтаксиса при одном выражении

console.table(nuj(amk))

//ОБРАБОТКА ОШИБОК В JS______________________________________________________________________
//Синтаксис объявления ошибки:
const anythingError = () => {
    throw new Error ('Something error') //Генерация ошибки.
}

//Часть кода, в который вероятно возникновение ошибки, 
//необходмимо помещать в конструкцию TRY/CATCH

const err = () => {
    throw new Error("Something ErR")
}

//Конструкция try/catch позволяет продолжить работу кода даже при возникновении ошибки!
try{
    err()
}
catch (error){
    console.error(error)
}

console.log('Continue...')

//ИНСТРУКЦИИ________________________________________________________________________________
//- код, выполняющий действия (ничего не возвращает)  Выделяется ;. 
//Инструкции должны наъодиться на разных строках кода.

let her = null 
const bji = 5

console.dir(her)

if (her < bji) {
    console.log('bji is larger')
}


// for (let i = 1; i < 5; i++){
//     setTimeout(()=>{console.log(i)}, 1000*i) //просто интересный пример секундомера
//     }


//МАССИВЫ__________________________________________________________________________________

//Синтаксис:
//1) 
const arr = [1, 2, 3, 4, 5]
console.log(arr)
//2)
const arr2 = new Array(...arr) //копия массива "arr"
console.log(arr2)

console.log(arr2.length) //3 //колличество эллементов в массиве.

console.log(arr === arr2) // false //несмотря на идентичность, массивы разные и находятся 
                          //в разных областях памяти.

const arr3 = arr
console.log(arr === arr3) //true //"arr3" скопированно "по ссылке"

console.log(arr3[0])
console.log(arr2[4])

arr3[2] = 1 //измнение элемента массива с порядковым номером 3
console.log(arr3)

arr[arr3.length] = 6 //вариант добавления элемента массива в конец

//---------------

//Методы массивов:
arr.push('true') //Добавляет элемент массива в конец

arr2.pop() //удаляет элемент в конце массива. Метод возвращяет удаленный элемент, 
          //поэтому его можно присвоить переменной.
const endElementArr = arr2.pop() //присвоение удаленного элемента массива переменной.
console.log(endElementArr) //4

arr2.unshift(0) //добавляет элемент в начало массива.

arr.shift() //удаляет первый элемент массива. Возвращает значение удаленног элемента. 
            //Может быть присвоен переменной.

arr.forEach((array) => {console.log(array * 2)}) //метод перебирает массив и применяет функцию 
                                               //к каждому элементу массива, не меняя его.
                                               //ВАЖНО! Возвращает undefined.

const mapArr = arr.map((el) => {return el+2}) //метод перебирает массив и применяет функцию 
                                         //к каждому элементу массива, не меняя его.
                                         //ВАЖНО! Возвращает новый массив.
console.log(mapArr) // [4, 3, 6, 7, 8, 'true2']

//ДЕСТРУКТУРИЗАЦИЯ__________________________________________________________________________

//Деструктуризация объектов: создание переменных из свойств объектов.
const userPro1 = {
    name1: 'Anton',
    age1: 28,
    male: true
}

const {name1, age1} = userPro1 //Создание из свойств объекта "userPro1" 2-х переменных 
                               //"name1" и "age1" со значениями "Anton" и 28 соответственно.
console.log(name1) //'Anton'
console.log(age1) // 28

//-------------

//Деструктутризация массивов:
const frutArr = ['Apple', 'Banana'] 
const [frutOne, frutTwo] = frutArr //создание переменных "frutOne" и "frutTwo" со значениями
                                   //"Apple" и "Banana" соответственно
console.log(frutOne) //Apple
console.log(frutTwo) //Banana

//--------------

//Деструктуризация в функциях: передача значений в параметры функции для их дальнейшего использования:
const destrFnc = ({name1, age1, male}) => {
    if(male){console.log(`${name1} ${age1} age, and his man!`)}
else{console.log(`${name1} ${age1} age, and she's woman!`)}
}
destrFnc(userPro1)

//УСЛОВНЫЕ ИНСТРУКЦИИ______________________________________________________________________

//Синтаксис инструкции if:
//if(Условие) {
//Блок кода, который выполняется ОДНОКРАТНО, если условие "true"
//}

//Пример 1:
let val = 10
if(val === 10) //условие "true"
    {val +=20} //оператор += совершает сложение и тут же присваивает новое значение переменной.
console.log(val) //30
//Пример 2:
const userTwo = {
    age: 29
}
if(!userTwo.name){ //undefined - это "false", но оператор "!" конвертировал его в "true"
    console.log(`Имя не указано`)
}

//--------------
//Синтаксис инструкции if else:
// if(Условие){
//     Блок кода, который выполняется ОДНОКРАТНО, если условие "true"
// }
// else{
//     Блок кода, который выполняется ОДНОКРАТНО, если условие "false"
// }

//Пример 1:
if(val < 5) //false
    {console.log(`10 < 5! I'm CrAsY!`)}
else
    {console.log(`10 > 5! I'm normalize!`)}

//-----------------

//Синтаксис инструкции if else if:
// if(Условие 1){Код выполняется, если Условие 1 == true. Далее инструкция не идет}
// else if(Условие 2){Код выполняется, если Условие 2 == true}
// else{Код выполняется, если Условия ложны}

//Пример 1:
if(val <= 5)
    {console.log(`Anything`)}
else if(val>=5)
    {console.log(`Right`)}
else
    {console.log(`Not Good`)}

//Пример 2: Использование if в функциях:
const isPosNumFnc = (a, b) => {
    if(typeof a !=='number' || typeof b !== 'number')
        {console.error(`It's not a number!`)}
    else if(a<=0 || b<=0)
        {console.error(`Better, but it's not positive number!`)}
    else {console.log(a+b); return a+b}
 }
isPosNumFnc(12563672563, 'two')//err: It's not a number!
isPosNumFnc(3, -1)//err: Better, but it's not positive number!
isPosNumFnc(1, 4)//5

//--------

//Инструкция Switch
//Синтаксис:
const month = 1
    switch (month){
        case 12:
            console.log(`December`)
        break
        case 1:
            console.log(`January`) //January
        break
        case 2:
            console.log(`February`)
        break
        default:
            console.log(`This is not winter month!`)
    }

//ТЕРНАРНЫй ОПЕРАТОР______________________________________________________________________
//Синтаксис:
// Условие 
//    ? Выражение 1 
//    : Выражение 2
//Если условие===true - возвращается результат выражения 1
//Если условие===false - возвращается результат выражения 2.

//Пример1:
const ternarValue = 11
!!ternarValue === false //true не равно false
?console.log('Истина')
:console.log('Ложно') //Ложно

//Пример2:
let ternarValue2 = 54
console.log(ternarValue2!==54 ? (`ternarValue2 is not a 54`):(`ternarValue is 54`))
ternarValue2 = -8
const positiveTernarValue2 = ternarValue2 >= 0
                            ?ternarValue2
                            :-ternarValue2
console.log(positiveTernarValue2)

//ЦИКЛЫ___________________________________________________________________________________

//Цикл for:
//Синтаксис:
for(let i=0; i<5; i++){
    console.log(i) //0 1 2 3 4
}

//-------------------------

//Цикл while: выполняется, пока условие истинно.
//Синтаксис:
let i = 0
while(i<5){
    console.log(i) // 0 1 2 3 4
    i++
}

//------------------------

//Цикл Do while: вне зависимоти истинно ли условия, тело цикла выполнится хотя бы один раз.
//Синтаксис
let iTwo = 0
do{
    console.log('First step')
    i++
} //выполнится 1 раз
while(iTwo>5)

//------------------------

//Цикл for in: перебирает свойства объекта по ключам (названиям свойств).
//Синтаксис:
const presentation = {
    name: 'finantienal',
    programs: 'Power Point',
    visual: true
}
const copyPresentationTwo = Object.assign(presentation)
let copyPresentation = {}
for(key in presentation){
    copyPresentation[key] = presentation[key]
} //создали новый объект, идентичный presentation.
console.log(copyPresentation)
console.log(presentation === copyPresentation) //false, потому что объект новый
console.log(presentation === copyPresentationTwo) //true, потому что была создана копия 
                                                  //одного и того же объекта.

//------------------

//Цикл FOR OF: 
const newConst1254 = 'Hello'

for (word of newConst1254)
{console.log(word)} //H e l l o (перебор по буквам)
//------------------

//Использование forEach для объектов:
const copyPresentationThree = {}
const presentationKeyArray = Object.keys(presentation).forEach((key) => {copyPresentationThree[key] = presentation[key]})
console.log(copyPresentationThree) //Object.keys - возращает массив из ключей свойств объекта.

const presentationTitleArray = Object.values(presentation).forEach(value => {console.log(value)})
                                //Object.values - возвращает массив из значений свойств объекта.

//----------------------
//Перебор массива с помощью цикла FOR IN.

const newArray=['Hello', 10, true]
for(key in newArray){console.log(newArray[key])}

//МОДУЛИ_____________________________________________________________________________
//Приложение может быть разбито на несколько файлов с JS кодом, в каждом из которых
//будет находиться часть, отвечающяя за определенный функционал.
//Эти файлы и называются МОДУЛЯМИ.

//Для того, чтобы использовать код из Модуля1 в Модуле2:

//moduleOne.js:
//const moduleOneFnc = () => {console.log('moduleOne')}
//export default moduleOneFnc - экспорт части кода.

//moduleTwo.js:
//import printModuleOne from ./moduleOne.js - Импорт части кода. При default экспорте названия могут отличаться.
//printModuleOne()

//Для того, чтобы экспортировать несколько блоков:
// export{
// one, two
// }

// import {
// one as oneRenamed, (если необходимо изменить название)
// two
// } from ./moduleAnyway.js

//КЛАССЫ И ПРОТОТИПЫ_________________________________________________________________
//Классы позволяют создавать прототипы для объектов.
//На основании прототипов создаются экземпляры.
//Синтаксис:
class Comment {
    constructor(text){
        this.text = text
        this.votesQty = 0
    }

    upvote(){
        this.votesQty += 1
    }
//Метод 'static' не наследуется экземплярами класса. Может быть только вызван.
    static sumComement(first, second){
        return (`${first} ${second}`)
    }
}

const firstComment = new Comment('First Comment')
const secondComment = new Comment('Second Comment')
console.log(firstComment)
console.log(secondComment)
console.log(firstComment.votesQty)
firstComment.upvote()
console.log(firstComment.votesQty)
console.log(secondComment.votesQty)

//-------------------------

//Расширение класса
class ThirdComment extends Array {
   howLength(){
    console.log(this.length)
   }
}
const thirdComment = new ThirdComment(2, 3, 4, 6)
thirdComment.howLength()
console.log(thirdComment)
console.log(thirdComment.length)


const ahwghd = [1, 2, 4, 6]
console.log(ahwghd)
const lor = 'Anton Domrachev'
console.log(lor.split(''))


//ПРОМИСЫ___________________________________________________________________
//Позволяют обрабатывать отложенные во времени события.
//Синтаксис: 
const myPromise = new Promise((resolve, reject) => {

})

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
.catch(() => console.error('Fetch Error'))

//Пример рабочего промиса:

const newPromiseB = new Promise((resolve, reject)=>{
    const data = fetch('https://jsonplaceholder.typicode.com/todos/2')
    resolve(data)
})

newPromiseB.then(
    resolve=>console.log(resolve),
    error=>console.error(error)
)

//Пример рабочего промиса ловящего ошибку:
const newPromis = new Promise((resolved, reject)=>{
    llll
    const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    resolved(llll)
})

newPromis
.then(value=>console.log('Your awesome!', value))
.catch(error=>console.error(`Fucking ${error}`))






//Вопросы:
//1)
//const mapArr = arr.map(el => el+2) // [4, 3, 6, 7, 8, 'true2']
//const mapArr = arr.map((el) => {el+2}) // [undefined, undefined, undefined, undefined, undefined, undefined]
//По логике: (el => el+2) === ((el) => {el+2})
//Ответ: Стрелочная функция (el) => {el+2} ничего не возвращает. Требуется return.

//2)

//УПРАЖНЕНИЯ!
//Поиск 'A' в строке:------------------------
const wordEight = 'AlamAntain'

const searchAFnc = (string) => {
    const wordUpperCase = string.toUpperCase()
    const wordArr = wordUpperCase.split('')
    const wordALength = []
    wordArr.forEach((array)=>{
        if(array === 'A'){
            wordALength.push(array)
        }
    })
    return wordALength.length
}
console.log(searchAFnc(wordEight))

//try...catch--------------------------
const regir = 1
try{
    finaly
}
catch(err){
    console.error(`${err.message}, bitch!`)
}

//Промисы-----------------------------
const newPromises = new Promise((resolve, reject) => {
    resolve(new Error())
    reject(console.error('Hallo! Miss me?'))})

//------------------------------------

const newPromiseTwo = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('done'), 1000)
})

newPromiseTwo.then(
    resolve=>console.log(resolve),
    reject=>console.error(reject.message)
)

const newObjectFF = new Array('name', 'age')
console.log
