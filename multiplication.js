function multiplyNumbers() {
  try {
    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;

    // Check if inputs are empty
    if (input1.trim() === "" || input2.trim() === "") {
      throw "Please enter both numbers.";
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      throw "Invalid input. Please enter valid numbers.";
    }

    const result = num1 * num2;

    // Display result
    document.getElementById("result").innerText = result;

  } catch (error) {
    document.getElementById("result").innerText = error;
  }
}