function divideNumbers() {
    const resultElement = document.getElementById("result");
    const val1 = document.getElementById("num1").value;
    const val2 = document.getElementById("num2").value;

    if (val1 === "" || val2 === "") {
        resultElement.innerText = "Error: Fill both boxes!";
        resultElement.style.color = "orange";
        return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (num2 === 0) {
        resultElement.innerText = "Error: Cannot divide by 0";
        resultElement.style.color = "red";
        return;
    }

    const quotient = num1 / num2;
    resultElement.style.color = "black";
    resultElement.innerText = parseFloat(quotient.toFixed(2));
}