document.getElementById("converter-form").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission to avoid page reload
    const marlaValue = parseFloat(document.getElementById("marla").value);
    const squareFeet = marlaValue * 272.25; // 1 Marla = 272.25 square feet
    document.getElementById("result").textContent = `${marlaValue} Marla is equal to ${squareFeet} Square Feet.`;
};
