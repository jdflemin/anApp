#!/usr/bin/env node

// readline from node
const readline = require('readline');

// sets up for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calcMath = require('./maths');

// main method
let getUserInput = async () => {
	// get user input
	let years = await genericQuestion('How many years do you want to save this money for? ');	
	let money = await genericQuestion(`How much money are you saving for ${years} years? `);
	let rate = await genericQuestion(`What rate are you expecting to get on $${money} for ${years}? `);
	
	let annualContribution;
	let keepAsking = true;
	// see if user wants to make an annual deposit
	while (keepAsking) {
		let answer = await genericQuestion('Do you want to contribute annually? (Yes/No) ');
		if (
			answer.trim() == 'yes' || 
			answer.trim() == 'no' || 
			answer.trim() == 'y' || 
			answer.trim() == 'n'
		) {
			keepAsking = false;
			if (
				answer.trim() == 'yes' || 
				answer.trim() == 'y'
			) annualContribution = await genericQuestion('What will be your annual contribution? ');
		} else {
			console.log('Please answer with either Yes or No');
		}
	}

	if (annualContribution) {
		// annual contribution

		console.log('Your money will grow to be $', calcMath.annualDeposits(money, years, rate, annualContribution));
	} else {
		// no annual contribution
		console.log('Your money will grow to be $', calcMath.pertCalc(money, years, rate));
	}
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

// lets get it started in ha let's get it started in
getUserInput();


