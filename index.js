document.addEventListener(`DOMContentLoaded`, addsParagraph);

function addsParagraph() {
   const p = document.querySelector(`#text`);
           p.textContent = "This is really cool!"
}