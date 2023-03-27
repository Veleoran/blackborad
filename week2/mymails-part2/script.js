// Inser<div id="msg-container">
document.querySelector('#msg-container').innerHTML += `<div class ="row rew-row">
<img class="avatar" src="images/avatar-1.jpg" />
<div class="text-container">
<h6>John H</h6>
<p> bonjour
</p>
</div>
<span class="delete">&#x2716;</span>
</div>
`;

const messagesCount = document.querySelectorAll('p').length

document.querySelector('#count').textContent = messagesCount


let date = new Date()
let hours = date.getHours()+"h"
let year = date.getFullYear()
let day = date.getDate()
if (day<=9) {day="0"+ day}
let month = date.getMonth()+ 1
if (month<=9) {month="0"+ month}
date= (year+"-"+month+"-"+day+" "+hours);
document.querySelector('#footer').innerHTML += `<span>${date}<span>`
console.log(hours)




