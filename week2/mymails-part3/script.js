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

const updateCount = () => {
  const counter = document.querySelector("#counter");
  const messageCount = document.querySelectorAll(".message").length;
  counter.textContent = messageCount;
};

for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
  document.querySelectorAll(".delete")[i].addEventListener("click", function () {
    console.log("Click detected!");

    // Trouver l'élément de message parent
    let messageElement = this.closest(".message");

    // Supprimer l'élément de message du DOM
    if (messageElement) {
      messageElement.parentNode.removeChild(messageElement);
    }

    // Mettre à jour le compteur
    updateCount();
  });
}

// Mettez à jour le compteur une fois au chargement initial
updateCount();




  