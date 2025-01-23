// Access the HTML elements
const dayInput = document.querySelector(".input-day");
const monthInput = document.querySelector(".input-month");
const yearInput = document.querySelector(".input-year");
const calculateButton = document.querySelector(".btn");
const display1 = document.getElementById("result1")
const display2 = document.getElementById("result2")
const display3 = document.getElementById("result3")
var label = document.querySelector(".label");
var label2 = document.querySelector(".label2");
var label3 = document.querySelector(".label3");

// Access the spans for result display
const dDay = document.querySelector(".dd");
const dMonth = document.querySelector(".dm");
const dYear = document.querySelector(".dy");

// Add event listener to the button
calculateButton.addEventListener("click", function () {

  // Check if any input is empty
  if (!dayInput.value || !monthInput.value || !yearInput.value) {
    console.log("One or more inputs are empty!");
    dYear.textContent = "invalid input !!!";
    dYear.style.color = "red";
    dYear.style.fontSize = "3rem";
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "none";
    dayInput.style.borderColor = "red";
    monthInput.style.borderColor="red";
    yearInput.style.borderColor="red"
    calculateButton.style.backgroundColor="red"
    label.style.color = "red";
    label2.style.color = "red";
    label3.style.color = "red";
    dMonth.textContent = "";
    dDay.textContent = "";
    return;
  }

  // Parse the input values as integers
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);


  // Validate the input
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    dYear.textContent = "invalid input";
    dYear.style.fontSize = "3rem";
    dYear.style.color = "red";
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "none";
    label.style.color = "red";
    label2.style.color = "red";
    label3.style.color = "red";
     calculateButton.style.backgroundColor="red"
    dayInput.style.borderColor = "red";
    monthInput.style.borderColor="red";
    yearInput.style.borderColor="red"
    dMonth.textContent = "";
    dDay.textContent = "";
    return;
  }

  const isValidDate = validateDate(day, month, year);
  if (!isValidDate) {
    dYear.textContent = "invalid date";
    dMonth.textContent = "";
    dDay.textContent = "";
    return;
  }

  // Get today's date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  // Calculate the age
  let ageYears = currentYear - year;
  let ageMonths = currentMonth - month;
  let ageDays = currentDay - day;

  // Adjust if days or months are negative
  if (ageDays < 0) {
    ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
    ageMonths--;
  }
  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }

  // Display the result
  dYear.textContent = `${ageYears}`;
  dMonth.textContent = `${ageMonths}`;
  dDay.textContent = `${ageDays}`;
});

// Function to validate the date
function validateDate(day, month, year) {
  const today = new Date();
  if (year > today.getFullYear()) {
    return false;
  }
  if (month < 1 || month > 12) {
    return false;
  }
  const daysInMonth = new Date(year, month, 0).getDate(); // Get days in the month
  if (day < 1 || day > daysInMonth) {
    return false;
  }
  return true;
}
