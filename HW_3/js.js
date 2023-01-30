// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function doCube(arg1, arg2) {
//     arg1 = arg1**3;
//     arg2 = arg2**3;
//     let sum = arg1 + arg2;
//     console.log(`Куб числа ${num1} равен ${arg1}`);
//     console.log(`Куб числа ${num2} равен ${arg2}`);
//     console.log(`Сумма этих "кубов" равна ${sum}`);
// } 
// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));
// doCube(num1, num2);





// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// function doTax(arg) {
//     if (isNaN(arg)) {
//     console.log(`Значение задано неверно`);   
//     } else {
//     arg = arg*0.87;
//     console.log(`Размер зарплаты за вычетом налогов равен ${arg}`);    
//     }
// } 
// let num = Number(prompt("Введите размер зарплаты"));
// doTax(num);





// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
// function doCompare(arg1, arg2, arg3) {
//         if (arg1 > arg2 && arg1 > arg3) {
//             console.log(`${arg1} больше чем ${arg2} и ${arg3}`);   
//         } else if (arg2 > arg1 && arg2 > arg3){
//             console.log(`${arg2} больше чем ${arg1} и ${arg3}`);
//         } else {
//             console.log(`${arg3} больше чем ${arg1} и ${arg2}`);
//         }
//     } 
// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));
// let num3 = Number(prompt("Введите третье число"));
// doCompare(num1, num2, num3);
//                    // слишком много кода по моему для такой простой задачи
    





// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.


// function doSum(arg1, arg2) {
//     console.log(`Сумма чисел ${arg1} и ${arg2} равна ${arg1 + arg2}`);
//     } 
// function doSubtraction(arg1, arg2) {
//     if (arg1 > arg2) {
//     console.log(`Разность чисел ${arg1} и ${arg2} равна ${arg1 - arg2}`); 
//     } else {
//     console.log(`Разность чисел ${arg1} и ${arg2} равна ${arg2 - arg1}`);
//     } 
//     }
// function doMultiplication(arg1, arg2) {
//     console.log(`Произведение чисел ${arg1} и ${arg2} равно ${arg1 * arg2}`);
//     }
// function doDivision(arg1, arg2) {
//     console.log(`Частное чисел ${arg1} и ${arg2} равно ${arg1 / arg2}`);
//     }
// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));
// doSum(num1, num2);
// doSubtraction(num1, num2);
// doMultiplication(num1, num2);
// doDivision(num1, num2);





function doSum(arg1, arg2) {
    console.log(`Сумма чисел ${arg1} и ${arg2} равна ${arg1 + arg2}`);
    } 
function doSubtraction(arg1, arg2) {
    if (arg1 > arg2) {
    console.log(`Разность чисел ${arg1} и ${arg2} равна ${arg1 - arg2}`);// почему то желтые скобки 
    } else {
    console.log(`Разность чисел ${arg1} и ${arg2} равна ${arg2 - arg1}`);// почему то желтые скобки
    } 
    }
function doMultiplication(arg1, arg2) {
    console.log(`Произведение чисел ${arg1} и ${arg2} равно ${arg1 * arg2}`);
    }
function doDivision(arg1, arg2) {
    console.log(`Частное чисел ${arg1} и ${arg2} равно ${arg1 / arg2}`);
    }
let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
doSum(num1, num2);
doSubtraction(num1, num2);
doMultiplication(num1, num2);
doDivision(num1, num2);



// если честно, я не очень понят про возврат значения 'return'....