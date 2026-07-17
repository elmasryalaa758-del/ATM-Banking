const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pin = "1234";
let balance = 5000;
let attempts = 0;

function askPin() {
    rl.question("Enter PIN: ", (enteredPin) => {

        if (enteredPin === pin) {
            console.log("\nWelcome!");

            showMenu();

        } else {

            attempts++;

            console.log("Wrong PIN");

            if (attempts === 3) {
                console.log("Account Locked");
                rl.close();
            } else {
                askPin();
            }
        }

    });
}

function showMenu() {

    console.log("\n===== ATM MENU =====");
    console.log("1. Withdraw");
    console.log("2. Deposit");
    console.log("3. Check Balance");
    console.log("4. Change PIN");
    console.log("5. Exit");

    rl.question("Choose an option: ", (choice) => {

        switch (choice) {

            case "1":

                rl.question("Enter amount: ", (amount) => {

                    amount = Number(amount);

                    if (amount <= 0) {
                        console.log("Invalid Amount");
                    } else if (amount > balance) {
                        console.log("Insufficient Balance");
                    } else {
                        balance -= amount;
                        console.log("Withdrawal Successful");
                        console.log("Current Balance: " + balance);
                    }

                    showMenu();

                });

                break;

            case "2":

                rl.question("Enter amount: ", (amount) => {

                    amount = Number(amount);

                    if (amount > 0) {
                        balance += amount;
                        console.log("Deposit Successful");
                        console.log("Current Balance: " + balance);
                    } else {
                        console.log("Invalid Amount");
                    }

                    showMenu();

                });

                break;

            case "3":

                console.log("Current Balance: " + balance);

                showMenu();

                break;

            case "4":

                rl.question("Enter New 4-digit PIN: ", (newPin) => {

                    if (/^\d{4}$/.test(newPin)) {
                        pin = newPin;
                        console.log("PIN Changed Successfully");
                    } else {
                        console.log("PIN must contain exactly 4 digits.");
                    }

                    showMenu();

                });

                break;

            case "5":

                console.log("Thank you for using the ATM.");
                rl.close();

                break;

            default:

                console.log("Invalid Choice");

                showMenu();

        }

    });

}

askPin();1234