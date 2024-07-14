//Проверка на чет/нечет
const a = 9
console.log(Math.ceil(a/2))
Math.ceil(a/2)>(a/2)?console.log('Нечетное'):console.log('Четное') //Не четное
console.log(a)


//Проверка первых букв строк на совпадение
const b = 'Right'
const c = 'Row'
b[0] === c[0]?console.log('Есть совпадение'):console.log('oh Shit') //Есть совпадение


// Дано слово. Получите его последнюю букву. 
// Если слово заканчивается на мягкий знак, 
// то получите предпоследнюю букву.
const d = 'Медь'
if(d[d.length - 1]==='ь')
{
    console.log(d[d.length-2])
}
else{console.log(d[d.length-1])} //д


//Дано число. Выведите в консоль первую цифру этого числа.
const f = 267345672
const fFirstSymbol = f.toString().split('')[0]
console.log(fFirstSymbol) //2


//Дано число. Выведите в консоль последнюю цифру этого числа.
const g = 54368976807
const gLastSymbols = g.toString().split('')
console.log(gLastSymbols[gLastSymbols.length-1]) //7


//Дано число. 
//Выведите в консоль сумму первой и последней цифры этого числа.
const h = 678923574539
const hArr = h.toString().split('')
console.log(Number(hArr[hArr.length-1]) + Number(hArr[0])) //15


//Дано число. Выведите количество цифр в этом числе.
const i = 111111111111111111
console.log(i.toString().split('').length) //18


//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
const j = 5678342349
const k = 690321399
j.toString().split('')[0] === k.toString().split('')[0]?
console.log('True'):console.log('False') //False


//Дана строка. Если в этой строке более одного символа, 
//выведите в консоль предпоследний символ этой строки.
const l = 'To String'
if(l.length>1){
    console.log(l[l.length-2]) //n
}


//Даны два целых числа. 
//Проверьте, что первое число без остатка делится на второе.
const m = 8
const n = 3
if(m/n === m/n.ceil) {
    console.log('Делится')
}
else{
    console.log('Не делится')
} //Не делится


//Выведите в консоль все целые числа от 1 до 100.
const arrHungred = []

for(let i =1; i<=100; i++){
    arrHungred.push(i)
}
console.log(arrHungred)


//Выведите в консоль все целые числа от -100 до 1
const ab = []
for(let i = -100; i<=0; i++){
    ab.push(i)
}
console.log(ab)


//Выведите в консоль все целые числа от 100 до 1.
const ac = []
for(let i = 100; i>=1; i--){
    ac.push(i)
}
console.log(ac)


//Выведите в консоль все четные числа из промежутка от 1 до 100.
const ad = []
for(let i = 1; i<=100; i++){
    if(Math.ceil(i/2) === i/2){
        ad.push(i)
    }
}
console.log(ad)


//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
const af = []
for(let i=1; i<=100; i++){
    if(Math.ceil(i/3) === i/3){
        af.push(i)
    }
}
console.log(af)


//Найдите сумму всех целых чисел от 1 до 100.
let ah = 0
for(let i = 1; i<=100; i++){
    ah = ah + i
}
console.log(ah)


//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let at = 0
for(let i = 1; i<=100; i++){
    if(Math.ceil(i/2) === i/2){
        at = at + i
    }
}
console.log(at)


//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let ae = 0
for(let i = 1; i<=100; i++){
    if(Math.ceil(i/2) > i/2)
    {ae = ae + i}
}
console.log(ae)


//Даны два целых числа. 
//Найдите остаток от деления первого числа на второе.
const oneNumber = 43
const twoNumber = 32
let endOneTwo
const oneTwo = (one, two) => {endOneTwo = (one/two).toString().split('.')
    console.log(Number(endOneTwo[1]))
}
oneTwo(oneNumber, twoNumber) //34375




