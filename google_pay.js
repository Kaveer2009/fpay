function next() {
    // playsound();
    p_name = document.getElementById("p_name").value;
    const amount = document.getElementById("amount").value;
    localStorage.setItem("amount", amount)
    localStorage.setItem("p_name",p_name);
    console.log(p_name);
    console.log(amount);
    window.location = "gPay.html";

}

pname = localStorage.getItem("p_name");
document.getElementById("p_name").innerHTML = `Paid to ${pname}`;
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