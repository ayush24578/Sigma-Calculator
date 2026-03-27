function addNumbers() {
  const num1Input = document.getElementById("num1").value;
  const num2Input = document.getElementById("num2").value;
  const resultElement = document.getElementById("result");

  if (num1Input === "" || num2Input === "") {
    resultElement.textContent = "Please enter both numbers";
    return;
  }

  const num1 = parseFloat(num1Input);
  const num2 = parseFloat(num2Input);

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Invalid input";
    return;
  }

  const sum = num1 + num2;
  resultElement.textContent = sum;
}
