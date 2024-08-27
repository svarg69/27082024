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
