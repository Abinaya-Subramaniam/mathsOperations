
function navigateTo(operation) {
  const operationSection = document.getElementById('operation-section');
  const operationContainer = document.getElementById('operation-container');
  const backButton = document.querySelector('button');

  
  document.querySelector('.cards').style.display = 'none';
  operationSection.style.display = 'block';

  
  switch (operation) {
    case 'fibonacci':
      operationContainer.innerHTML = `
        <h2>Fibonacci Sequence Generator</h2>
        <input type="number" id="fibonacciInput" placeholder="Enter number of terms" />
        <button onclick="generateFibonacci()">Generate Fibonacci</button>
        <p id="fibonacciResult"></p>
      `;
      break;
    case 'palindrome':
      operationContainer.innerHTML = `
        <h2>Palindrome Checker</h2>
        <input type="text" id="palindromeInput" placeholder="Enter a word/phrase" />
        <button onclick="checkPalindrome()">Check Palindrome</button>
        <p id="palindromeResult"></p>
      `;
      break;
    case 'factorial':
      operationContainer.innerHTML = `
        <h2>Factorial Calculator</h2>
        <input type="number" id="factorialInput" placeholder="Enter a number" />
        <button onclick="calculateFactorial()">Calculate Factorial</button>
        <p id="factorialResult"></p>
      `;
      break;
    case 'prime':
      operationContainer.innerHTML = `
        <h2>Prime Number Checker</h2>
        <input type="number" id="primeInput" placeholder="Enter a number" />
        <button onclick="checkPrime()">Check Prime</button>
        <p id="primeResult"></p>
      `;
      break;
    case 'array':
      operationContainer.innerHTML = `
        <h2>Array Operations</h2>
        <input type="text" id="arrayInput" placeholder="Enter numbers (comma separated)" />
        <button onclick="processArray()">Process Array</button>
        <p id="arrayResult"></p>
      `;
      break;
    case 'quadratic':
      operationContainer.innerHTML = `
        <h2>Quadratic Equation Solver</h2>
        <input type="number" id="a" placeholder="Enter a" />
        <input type="number" id="b" placeholder="Enter b" />
        <input type="number" id="c" placeholder="Enter c" />
        <button onclick="solveQuadratic()">Solve Equation</button>
        <p id="quadraticResult"></p>
      `;
      break;
    case 'calendar':
      operationContainer.innerHTML = `
        <h2>Calendar Generator</h2>
        <input type="number" id="year" placeholder="Enter year" />
        <input type="number" id="month" placeholder="Enter month" />
        <button onclick="generateCalendar()">Generate Calendar</button>
        <div id="calendarResult"></div>
      `;
      break;
  }
}


function goBack() {
  document.querySelector('.cards').style.display = 'grid';
  document.getElementById('operation-section').style.display = 'none';
}


function generateFibonacci() {
  const n = parseInt(document.getElementById('fibonacciInput').value);
  if (isNaN(n) || n <= 0) {
    document.getElementById('fibonacciResult').innerText = "Please enter a valid number greater than 0.";
    return;
  }

  let result = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    result.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  document.getElementById('fibonacciResult').innerText = `Fibonacci Sequence: ${result.join(', ')}`;
}

function checkPalindrome() {
  const str = document.getElementById('palindromeInput').value;
  if (!str) {
    document.getElementById('palindromeResult').innerText = "Please enter a string.";
    return;
  }

  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  if (cleanedStr === reversedStr) {
    document.getElementById('palindromeResult').innerText = `"${str}" is a Palindrome!`;
  } else {
    document.getElementById('palindromeResult').innerText = `"${str}" is not a Palindrome.`;
  }
}


function calculateFactorial() {
  const num = parseInt(document.getElementById('factorialInput').value);
  if (isNaN(num) || num < 0) {
    document.getElementById('factorialResult').innerText = "Please enter a valid non-negative number.";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  document.getElementById('factorialResult').innerText = `Factorial of ${num} is ${factorial}`;
}


function checkPrime() {
  const num = parseInt(document.getElementById('primeInput').value);
  if (isNaN(num) || num <= 1) {
    document.getElementById('primeResult').innerText = "Please enter a valid number greater than 1.";
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  document.getElementById('primeResult').innerText = isPrime ? `${num} is a Prime Number!` : `${num} is not a Prime Number.`;
}


function processArray() {
  const input = document.getElementById('arrayInput').value;
  if (!input) {
    document.getElementById('arrayResult').innerText = "Please enter some numbers.";
    return;
  }

  const arr = input.split(',').map(num => parseFloat(num.trim()));
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const avg = sum / arr.length;

  document.getElementById('arrayResult').innerText = `Array: [${arr.join(', ')}] - Sum: ${sum}, Average: ${avg}`;
}


function solveQuadratic() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById('quadraticResult').innerText = "Please enter valid numbers for a, b, and c.";
    return;
  }

  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById('quadraticResult').innerText = `Roots are real and distinct: ${root1}, ${root2}`;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    document.getElementById('quadraticResult').innerText = `Root is real and equal: ${root}`;
  } else {
    document.getElementById('quadraticResult').innerText = "Roots are complex.";
  }
}


function generateCalendar() {
  const year = parseInt(document.getElementById('year').value);
  const month = parseInt(document.getElementById('month').value);

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    document.getElementById('calendarResult').innerText = "Please enter valid year and month.";
    return;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  let calendarHtml = `<h3>${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}</h3>`;
  calendarHtml += "<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

  let firstDay = new Date(year, month - 1, 1).getDay();
  for (let i = 0; i < firstDay; i++) {
    calendarHtml += "<td></td>";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarHtml += `<td>${day}</td>`;
    if ((firstDay + day) % 7 === 0) {
      calendarHtml += "</tr><tr>";
    }
  }

  calendarHtml += "</tr></table>";
  document.getElementById('calendarResult').innerHTML = calendarHtml;
}
