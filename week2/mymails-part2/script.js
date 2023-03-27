// Inser<div id="msg-container">
document.querySelector('#msg-container').innerHTML += `<div class ="row rew-row">
<img class="avatar" src="images/avatar-1.jpg" />
<div class="text-container">
<h6>John H</h6>
<p>On peut créer un sélecteur ciblant les éléments d'un type donné appartenant à une classe donnée. Dans l'exemple suivant, la classe highlight met en surbrillance, mais elle le fait différemment quand elle s'applique à un <span> ou à un titre <h1>. Nous le faisons en utilisant le sélecteur de type pour l'élément ciblé, avec la classe ajoutée, sans espace blanc entre les deux.
</p>
</div>
<span class="delete">&#x2716;</span>
</div>
`;
const messagesCount = document.querySelectorAll('p').length

document.querySelector('#count') . textContent = messagesCount


const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
const formattedDate = date.toLocaleString('fr-FR', options);

document.querySelector('#footer').innerHTML = formattedDate;

