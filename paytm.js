
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
function generate12DigitNumber() {
    const min = Math.pow(10, 11); // Minimum 12-digit number (10^11)
    const max = Math.pow(10, 12) - 1; // Maximum 12-digit number (10^12 - 1)
  
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNumber.toString();
  }
  
  const twelveDigitNumber = generate12DigitNumber();
  console.log(twelveDigitNumber);

  document.getElementById("ref").innerHTML = `Ref. No. ${twelveDigitNumber}`;

//   const paytm_audio = "./sounds/paytm_payment_tune.mp3";
// var snd = new Audio("paytm_payment_tune.mp3");

// function playsound() {
//     var sfx = document.getElementById("sfx");
//                     sfx.autoplay = 'true';
//                 sfx.load();
// }

  function next() {

    
   
    p_name = document.getElementById("p_name").value;
    const amount = document.getElementById("amount").value;
    localStorage.setItem("amount", amount)
    localStorage.setItem("p_name",p_name);
    console.log(p_name);
    console.log(amount);
    // paytm_audio.play();
    // snd.play();
    // document.getElementById("sound1").play();
    window.location = "fake_paytm_1.html";
    
  }

document.getElementById("name").innerHTML = localStorage.getItem("p_name");
// console.log(p_name);
// pro_t
// op = localStorage.getItem("p_name");
// console.log(op.charAt);
document.getElementById("pro_t").innerHTML = localStorage.getItem("p_name").charAt(0);
// document.getElementById("amount1").innerHTML = "₹"+localStorage.getItem("amount");
// document.getElementById("amount1").innerHTML = "₹"+localStorage.getItem("amount");
document.getElementById("amount1").innerHTML = "<b>₹"+localStorage.getItem("amount")+"</b> <img src='images/icons8-verified-account.gif' alt='Loading...'>";

function back() {
    window.location = "paytm_info.html";
}