import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
        message: chalk.bold.red("convert currency from")
    },
    {
        name: "to",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
        message: chalk.bold.blue("convert currency to")
    },
    {
        name: "amount",
        type: "number",
        message: chalk.bold.yellow("Enter your amount")
    }
]);
let fromAmount = currency[answers.from];
let toAmount = currency[answers.to];
let amount = answers.amount;
let baseAmount = amount / fromAmount; //15000/280(usd base currency)
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bold.italic.green(convertedAmount));
function roundOf(convertedAmount) {
    let ans = Math.round(convertedAmount);
}
roundOf(convertedAmount);
