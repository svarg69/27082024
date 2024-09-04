// console.time();
// // пузырькова сортировка

// // матрица 3 на 3
// let arrVlozh = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arrVlozh);

// for (let i = 0; i < arrVlozh.length; i++) {
//   for (let j = 0; j < arrVlozh[i].length; j++) {
//     console.log(arrVlozh[i][j]);
//   }
// }

// // рандом пофиксили

// let randnumber = Math.random();

// console.log(Math.floor(Math.random() * 21 - 10));
// console.log(randnumber * 10);

// console.time('array');
// let arr = [7, 4, 3, 11, 2];
// console.timeEnd('array');
// // debugger;
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }

// bubbleSort(arr);
// console.log(arr);

// console.timeEnd('program');

// Сравнение сортировок по скорости работы
// // console.time();
// let arr = [7, 4, 3, 11, 2];

// // debugger;
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }

// bubbleSort(arr);
// console.log(arr);

// // console.timeEnd();

// arr.sort(); // переводит все в массиве в строки и сортирует побуквенно если не задать как именно сортировать.
// console.log(arr);

// let arr2 = ["asss", "saaa", "ksss", "mmmmmm"];
// // console.log(arr2);
// // arr2.sort();
// // console.log(arr2);

// function simpleSort(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// arr2.sort(simpleSort); // функция работает по принцыпу коллбэка, в скобках функции нельзя пердавать со скобками своим, подходят только функции без аргументов
// console.log(arr2);
// // если левое значение больше правого возвращает 1, меньше -1, равно - о. Так же и при сравнении строк побуквенно выш
// arr2.sort((a, b) => a - b); самый короткий вариант b-a - по убыванию
// так же базовый сорт плохо работет с отрицталеьными

// Эксперименты со временеи?
// console.time();

// function simpleSort(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// for (let i = 0; i < 500; i++) {
//   let arr = [7, 4, 3, 11, 2];
//   arr.sort(simpleSort);
// }

// console.timeEnd();

// console.time();

// let arr = [7, 4, 3, 11, 2];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }
// bubbleSort(arr);
// console.log(arr);
// console.timeEnd();

// console.time();

// let arr = [7, 4, 3, 11, 2];

// arr.sort((a, b) => a - b);
// console.log(arr);

// console.timeEnd();

// console.log сам по себе сжирает много ресурсов и времени в десятки ра

// рекурсия - вызов функции самой себя

// function test(value) {
//   console.log(value++);
//   if (value < 5) {
//     test(value);
//   }
// }
// // debugger;
// test(0);
// рекурсия выполняет схожие задачи как и цикл?
//  рекурсия жрет много ресурсов и стек забивает если ее не остановить
// для этого пишем условие, логику внутри до вызова сомой себя внутри себя if...

// с факториалом 6

// function fact(value) {
//   if (value == 1) {
//     return 1;
//   }
//   return value * fact(value - 1);
// }

// fact(6);

// for (let i = 0; i < array.length; i++) {}

// while (condition) {

// }

// Функции
// функшн декларэй8шн
// function verbNoun() {
//   console.log(15);
// }

// // verbNoun();
// console.log(verbNoun);
// console.log(verbNoun());

// let myFunc = verbNoun;

// myFunc();

// function verbNoun(func) {
//   func();
// }

// function ptint() {
//   console.log("Hello");
// }
// verbNoun(ptint);

// let myFunc = new Function("let b = 13; console.log(b);");

// console.log(myFunc);
// myFunc();
// console.log(eval("5 + 50"));

// eval
// function sum(a, b, c) {
//   return a + b + c;
// }

// // console.log(sum(3, 11, 17));
// // виды функций Экспрешн
// let newSum = function sum(a, b, c) {
//   return a + b + c;
// };
// // тут точка с запятой ставится ёпт
// console.log(newSum(1, 1, 1));
// console.log(sum(1, 1, 1));
// // // при таком способе определения имя функции уже не работает, работает то что в let,
// {
//   let value = 110;
// }

// console.log(value);

// стрелочная функция - нет фанкшн и имени
// () => 5 + 5;
// let summa = () => 5 + 5;

// console.log(() => 5 + 5);
// console.log(summa());
// console.log(summa);

// Сравнить строи одинакового размера, и найти их отличия
// Например  Hello World   Hellos world - вернет 1 - одно отличие в одной букве
// function diffStrings(str1, str2) {
//   if (str1 == str2) {
//     return 0;
//   }
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] != str2[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(diffStrings("I like JS", "I mike BS"));

// function diffStrings(str1, str2) {
//   if (str1 == str2) {
//     return 0;
//   }
//   let count = 0;
//   let str1parity =
//     str1.length % 2 == 0 ? str1.length / 2 : Math.trunc(str1.length / 2 + 1);
//   let str2parity =
//     str2.length % 2 == 0 ? str2.length / 2 : Math.trunc(str2.length / 2 + 1);
//   if (str1.substring(0, str1parity) != str2.substring(0, str2parity))
//     for (let i = 0, size = str1.parity; i < size; i++) {
//       if (str1[i] != str2[i]) {
//         count++;
//       }
//     }
//   if (str1.substring(str1.length / 2) != str2.substring(str2.length / 2))
//     for (let i = str1.length / 2; i < str1.length / 2; i++) {
//       if (str1[i] != str2[i]) {
//         count++;
//       }
//     }

//   return count;
// }

// console.log(diffStrings("I like JS", "I mikd BS"));

// function diffStrings(str1, str2) {
//   if (str1 == str2) {
//     return 0;
//   }
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1.charCodeAt(i) != str2.charCodeAt(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(diffStrings("I like JS", "I mikd BS"));

// console.log("Hello World".charCodeAt(0));
// Массивы
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr = [];
// console.log(arr);

// arr = new Array(1, 2, 3);
// console.log(arr);

// arr = new Array(10);
// console.log(arr);
// если задать в скобках одно число - то массив будет пустой а число указывает на количество андефайндов

let arr = [10, 15, 25, 45];
console.log(arr);

arr = arr.filter((value, i, arr) => arr[i] ** 2);
console.log(arr);
