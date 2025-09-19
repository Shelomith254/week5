// 🚀 JavaScript Fundamentals Assignment
// =====================================

// 🎯 Part 1: Basics
// Variables, data types, operators, conditionals
let age = 20;
let basicsMessage = "";

if (age >= 18) {
  basicsMessage = "You are an adult.";
} else {
  basicsMessage = "You are a minor.";
}

document.getElementById("basicsOutput").textContent = basicsMessage;

// ❤️ Part 2: Functions
// Reusable logic with functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(100, 3);
  document.getElementById("functionOutput").textContent = "Total is: " + total;
}

// 🔁 Part 3: Loops
// Using a for loop to list items
let fruits = ["Apple", "Banana", "Cherry"];
let loopOutput = document.getElementById("loopOutput");

for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  loopOutput.appendChild(li);
}

// 🌐 Part 4: DOM
// DOM manipulation and events
let toggleBtn = document.getElementById("toggleBtn");
let domMessage = document.getElementById("domMessage");

toggleBtn.addEventListener("click", function () {
  if (domMessage.style.display === "none") {
    domMessage.style.display = "block";
  } else {
    domMessage.style.display = "none";
  }
});
