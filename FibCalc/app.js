'use strict';

function Fibonacci(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return Fibonacci(num - 1) + Fibonacci(num - 2);
}

const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Write positive number: ");

console.log('\n' + 'Value of ' + number + '. Fibonacci\'s number is: ' + Fibonacci(number) + '\n' + 'Aplikacja FibCalc' + '\n' + 'Kazimierz Demucha' + '\n' + 'gr.1.2' + '\n');


