function subtractNumbers() {
  let num1Input = document.getElementById("num1").value;
  let num2Input = document.getElementById("num2").value;

  let num1 = parseFloat(num1Input);
  let num2 = parseFloat(num2Input);

  // Error handling
  if (num1Input === "" || num2Input === "") {
    document.getElementById("result").innerText = "Please enter both numbers";
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText =
      "Invalid input! Enter valid numbers";
    return;
  }

  let result = num1 - num2;

  document.getElementById("result").innerText = result;
}
