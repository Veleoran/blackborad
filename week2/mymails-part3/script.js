document.querySelector("#btn-add").addEventListener("click", function() {
const message = document.querySelector("#add-message").value;

const newMessage = `
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>${message}</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;
document.querySelector('#add-message').value = "";
document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

const deletes = document.querySelectorAll(".delete");
for (let i = 0; i < deletes.length; i++){
deletes[i].addEventListener("click", function() {
  this.parentNode.remove();

  const newMessageCount = document.querySelectorAll("p").length;
  document.querySelector('#count').textContent = newMessageCount;

});
}
});
document.querySelector("#btn-search").addEventListener("click", function(){
  const textToCompare = document.querySelector("#search-message").value.toLowerCase();
  console.log(textToCompare);

const titles = document.querySelectorAll("h6");
for (let i = 0; i <titles.length; i++) {
  const titleText = titles[i].textContent.toLocaleLowerCase();

if (!titleText.includes(textToCompare)) {
const messageToShow = titles[i].parentNode.parentNode;
messageToShow.style.display = "none";
}else{
  const messageToHide = titles[i].parentNode.parentNode;
  messageToHide.style.display = "flex";
}
 }

 document.querySelector("#search-message").value = "";
})

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









  