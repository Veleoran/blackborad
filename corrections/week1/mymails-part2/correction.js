// 1 - Add message

const newMessage = ` 
  <div class="row new-row">
  <img class="avatar" src="/images/avatar-1.jpg" />
  <div class="text-container">
    <h6>John Doe</h6>
    <p>New message</p>
  </div>
  <span class="delete">&#x2716;</span>
  </div>
  `;

document.querySelector('#msg-container').innerHTML += newMessage

// 2 - Create msg counter
const messagesCount = document.querySelectorAll('p').length
document.querySelector('#count').textContent = messagesCount;

// 3 - Add date in footer with constructor Date()
/* const date = Date()
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>` */

// BONUS - Change format of constructor Date() like this if in France "mardi 1er mars 2022, 17:43:26"
let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
    month = "0" + (new Date().getMonth() + 1)
} else {
    month = new Date().getMonth() + 1
}

if (new Date().getDate() < 9) {
    day = "0" + new Date().getDate()
} else {
    day = new Date().getDate()
}

const date = year + "-" + month + "-" + day
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`