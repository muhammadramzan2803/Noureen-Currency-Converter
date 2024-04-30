#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// console.log(chalk.blue.bold("\n \t Wellcome 'Noureen' to Currency_Converter\n"));

console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t  <<<==============================>>>`));

console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>> ${chalk.bold.hex(`#9999FF`)(`Wellcome To \`Code With Noureen\` -Currency-Coverter`)} <<<=========>>>`));

console.log(chalk.bold.rgb(204, 204, 204)(`\t\t  <<<==============================>>>\n`));





// Define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1,      //Base currency
    "EUR": 0.9,    //European currency(Euro)
    "JYP": 113,    //Japenese currency(Yen)
    "CAD": 1.3,    //Canadian Dollar
    "AUD": 1.65,   //Australian Dollar
    "PKR": 277.70,    //Pakistan Rupees
    // Add more currencies and their exchange rates here
}

// promt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
      name: "to_currency",
      type: "list",
      message: "Select the currency to convert into",
      choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount 
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);