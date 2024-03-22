#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// npm i izma-simple-calculater
// npx izma-simple-calculater
// shabang
// npm i inquirer
// npm install @types/inquirer -D
// npm i --save-dev @types/inquirer
var inquirer_1 = require("inquirer");
var anwere = await inquirer_1.default.prompt([
    {
        message: "Enter first Number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select One of the operater to perform action",
        type: "list",
        name: "operater",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    }
]);
// console.log(anwere);
if (anwere.operater === "Addition") {
    console.log(anwere.firstNumber + anwere.secondNumber);
}
else if (anwere.operater === "Substraction") {
    console.log(anwere.firstNumber - anwere.secondNumber);
}
else if (anwere.operater === "Multiplication") {
    console.log(anwere.firstNumber * anwere.secondNumber);
}
else if (anwere.operater === "Division") {
    console.log(anwere.firstNumber / anwere.secondNumber);
}
else {
    console.log("Please select a valid operator");
}
