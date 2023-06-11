function next() {
    // playsound();
    p_name = document.getElementById("p_name").value;
    const amount = document.getElementById("amount").value;
    localStorage.setItem("amount", amount)
    localStorage.setItem("p_name",p_name);
    console.log(p_name);
    console.log(amount);
    window.location = "phonepe_1.html";

}

pname = localStorage.getItem("p_name");
document.getElementById("p_name").innerHTML = pname;
pamount = localStorage.getItem("amount");
document.getElementById("amount").innerHTML = `₹ ${pamount}.00`;

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(`Current date: ${year}-${month}-${day}`);
console.log(`Current time: ${hours}:${minutes}:${seconds}`);
var date = `${year}-${month}-${day}, ${hours}:${minutes}`;

document.getElementById("date").innerHTML = date;

console.log(date);
function generateText() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '';
    for (let i = 0; i < 23; i++) {
      numbers += Math.floor(Math.random() * 10);
    }
    const firstChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    const text = firstChar + numbers;
    return text;
  }
  generateText();
  const result = generateText();
  console.log(result);


  document.getElementById("t_id").innerHTML = result;

  function generate16DigitNumber() {
    var number = "";
    var digits = "0123456789";
    
    for (var i = 0; i < 16; i++) {
      var randomIndex = Math.floor(Math.random() * digits.length);
      number += digits[randomIndex];
    }
    
    return number;
  }
  
  // Example usage
  var sixteenDigitNumber = generate16DigitNumber();
  console.log(sixteenDigitNumber);

  document.getElementById("b_no").innerHTML = sixteenDigitNumber;
  