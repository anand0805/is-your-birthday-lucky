const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");


function calculateSum(date) {
    let sum = 0;
    date = date.replaceAll("-", "");
    for (var i = 0; i < date.size; i++) {
        sum += Number(date[i]);
    }
    return sum;
}

function checkIsNumberLucky(sumOfDate, numberToCheck) {
    if (sumOfDate % numberToCheck == 0) {
        return showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `);
    } else {
        showMessage(`${numberToCheck} is not that lucky 😕`);
    }
}

function showMessage(message) {
    displayMessage.innerText = message;
}
checkButton.addEventListener("click", () => {
    const date = dateOfBirth.value;
    const numberToCheck = luckyNumber.value;
    if (date && numberToCheck) {
        const sumOfDate = calculateSum(date);
        checkIsNumberLucky(sumOfDate, numberToCheck);
    } else {
        showMessage("Please enter both the fields");
    }
})