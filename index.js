#!/usr/bin/env node

// readline from node
const readline = require('readline');

// sets up for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// main method
let getUserInput = async () => {
	// get user input
	let years = await genericQuestion('How many years do you want to save this money for? ');	
	let money = await genericQuestion(`How much money are you saving for ${years} years? `);
	let rate = await genericQuestion(`What rate are you expecting to get on $${money} for ${years}? `);
	
	console.log(pertCalc(money, years, rate));
	rl.close()
}

// generic method for asking questions and returning the input
let genericQuestion = (question) => {
	return new Promise(res => {
		rl.question(question, (input) => {
			res(input);
		});
	});
}

function pertCalc(principle, years, interestRate) {
	var convInterest = interestRate / 100;
	var total = principle * Math.exp(convInterest * years);
	return total;
}

// lets get it started
getUserInput();

