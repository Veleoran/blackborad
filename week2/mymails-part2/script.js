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


const date = year + '-' + month + '-' + day;

new Date(documentJS.querySelector('#date').textContent).getDate() === new Date().getDate()



 console.log(new Date(documentJS.querySelector('#date').textContent).getDate() === new Date().getDate());

