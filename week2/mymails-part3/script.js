const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;



for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
  document.querySelectorAll(".delete")[i].addEventListener("click", function () {
    

 this.parentNode.remove();
 const NewmessageCount = document.querySelectorAll('p').length;
 document.querySelector('#count').textContent = NewmessageCount;
   
  }
);
}

document.querySelector("#btn-add").addEventListener("click", function () {
  console.log("Click detected!");
  const messageInput = document.querySelector("#add-message");
  const message = messageInput.value;
  document.querySelector('#msg-container').innerHTML += `
 <div class="row new-row">
   <img class="avatar" src="avatar-1.jpg" />
   <div class="text-container">
     <h6>John Doe</h6>
     <p>${message}</p>
   </div>
   <span class="delete">&#x2716;</span>
 </div>
`;

messageInput.value = '';


const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

const deleteButtons = document.querySelectorAll(".delete");
deleteButtons[deleteButtons.length - 1].addEventListener("click", function () {
    this.parentNode.remove();
    const newMessagesCount = document.querySelectorAll('p').length;
    document.querySelector('#count').textContent = newMessagesCount;
});



});






  