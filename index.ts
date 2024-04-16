#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\ttWelcome to codeing with hamza - CLI NUMBER GUESSING GAME\n");

const RandomNumber = Math.floor(Math.random () * 5 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):"
    }
]);

if(answers.userGuessNumber ===  RandomNumber){
    console.log("Congratulation ! you guess a correct number")
}
else{
    console.log("Sorry, you guess a wrong number");
}