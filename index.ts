#! /usr/bin/env node

// npm i izma-simple-calculater
// npx izma-simple-calculater
// echo "# simple-calculator" >> README.md      it command put on powershell and they makes readme.md file
// git init
// ingnore any file for ex: nodemodules folder
// make files of .gitignore
// then put that folder file name
// git add .
// git branch -M main
// git remote add origin https://github.com/IzmaRao/calculater.git
// git push -u origin main
// shabang
// npm i inquirer
// npm install @types/inquirer -D
// npm i --save-dev @types/inquirer
import inquirer from "inquirer";

const anwere = await inquirer.prompt([
  {
    message: "Enter your first Number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter your Second Number",
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
} else if (anwere.operater === "Substraction") {
    console.log(anwere.firstNumber - anwere.secondNumber);
} else if (anwere.operater === "Multiplication") {
    console.log(anwere.firstNumber * anwere.secondNumber);
} else if (anwere.operater === "Division") {
    console.log(anwere.firstNumber / anwere.secondNumber);
} else {
  console.log("Please select a valid operator");
}


















