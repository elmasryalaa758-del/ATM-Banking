// ATM Banking System

const prompt = require("prompt-sync")();

// بيانات الحساب
let userPIN = "1234";
let balance = 5000;

let attempts = 0;
const maxAttempts = 3;

// التحقق من الـ PIN
while (attempts < maxAttempts) {
    let enteredPIN = prompt("Enter your 4-digit PIN: ");

    if (enteredPIN === userPIN) {
        console.log("\nLogin Successful!");

        let choice;

        do {
            console.log("\n===== ATM MENU =====");
            console.log("1. Withdraw");
            console.log("2. Deposit");
            console.log("3. Check Balance");
            console.log("4. Change PIN");
            console.log("5. Exit");

            choice = prompt("Choose an option: ");

            switch (choice) {

                case "1":
                    let withdrawAmount = Number(prompt("Enter amount to withdraw: "));

                    if (withdrawAmount <= 0) {
                        console.log("Error: Amount must be greater than zero.");
                    } else if (withdrawAmount > balance) {
                        console.log("Error: Insufficient balance.");
                    } else {
                        balance -= withdrawAmount;
                        console.log("Withdrawal Successful.");
                        console.log("Current Balance: $" + balance);
                    }
                    break;

                case "2":
                    let depositAmount = Number(prompt("Enter amount to deposit: "));

                    if (depositAmount > 0) {
                        balance += depositAmount;
                        console.log("Deposit Successful.");
                        console.log("Current Balance: $" + balance);
                    } else {
                        console.log("Error: Deposit amount must be greater than zero.");
                    }
                    break;

                case "3":
                    console.log("Current Balance: $" + balance);
                    break;

                case "4":
                    let newPIN = prompt("Enter new 4-digit PIN: ");

                    if (/^\d{4}$/.test(newPIN)) {
                        userPIN = newPIN;
                        console.log("PIN changed successfully.");
                    } else {
                        console.log("Error: PIN must contain exactly 4 digits.");
                    }
                    break;

                case "5":
                    console.log("Thank you for using the ATM.");
                    break;

                default:
                    console.log("Invalid choice. Please try again.");
            }

        } while (choice !== "5");

        break;

    } else {
        attempts++;
        console.log("Incorrect PIN.");

        if (attempts === maxAttempts) {
            console.log("Account Locked. Too many incorrect attempts.");
        } else {
            console.log("Remaining Attempts: " + (maxAttempts - attempts));
        }
    }
}