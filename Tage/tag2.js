//! Conditional Statement

let number = 17;
if (number % 2 === 0) {
  console.log("Even Number");
} else console.log("Odd Number");

//Todo Ticket Verkaufssytem

function calculateTicketPrice(age) {
    if (age < 18) {
      return 5; // 5€ for ages under 18
    } else if (age >= 18 && age <= 65) {
      return 10; // 10€ for ages between 18 and 65
    } else {
      return 5; // 5€ for ages 65 and above
    }
  }

  // Get the age from the user
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter your age: ', (answer) => {
    const userAge = parseInt(answer);
    const ticketPrice = calculateTicketPrice(userAge);
    console.log(`Your ticket price is ${ticketPrice}€`);
    rl.close();
  });

//! 2. Weg

//   function calculateTicketPrice(age) {
//     if (age < 18) {
//       return 5; // 5€ for ages under 18
//     } else if (age >= 18 && age <= 65) {
//       return 10; // 10€ for ages between 18 and 65
//     } else {
//       return 5; // 5€ for ages 65 and above
//     }
//   }

//   // Get the age from the user
//   const userAge = parseInt(prompt("Please enter your age: "));

//   // Calculate and display the ticket price
//   const ticketPrice = calculateTicketPrice(userAge);
//   console.log(`Your ticket price is ${ticketPrice}€`);
