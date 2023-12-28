const topRowInputs = document.querySelectorAll("#topRow .input-field");
const bottomRowInputs = document.querySelectorAll("#bottomRow .input-field");

topRowInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (index === 1) {
        let yVal = input.value;
        bottomRowInputs[index].value = yVal; // Mirror input values
        if (yVal < 0) {bottomRowInputs[index].value = 0;}
        if (yVal > 252) {bottomRowInputs[index].value = 252;}
    } else {
        bottomRowInputs[index].value = roundTowardsZero(input.value / 8); // Mirror input values
    }
  });
});

bottomRowInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (index === 1) {
        topRowInputs[index].value = input.value; // Mirror input values
    } else {
        topRowInputs[index].value = roundTowardsZero(input.value * 8); // Mirror input values
    }
  });
});

function roundTowardsZero(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}