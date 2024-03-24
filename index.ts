#! /usr/bin/env node

import inquirer from "inquirer";

// Asking Questions from users through Inquirer

// printing a Welcome Messege
console.log("\n\tWelcome To \'CodeWithEsha\' - CLI Simple Calculator\n");

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {messege: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        messege: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
    
]);

// Conditional statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}