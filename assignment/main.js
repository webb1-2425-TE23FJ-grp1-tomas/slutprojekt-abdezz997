// Hämtar knappen med klassen "btn" och sparar den i variabeln 'btn'
const btn = document.querySelector('.btn');

// Hämtar elementet med klassen "cookies" (t.ex. en cookie-notis) och sparar den i variabeln 'target'
const target = document.querySelector('.cookies');

// Lägger till en "click"-lyssnare på knappen
btn.addEventListener("click", function(event){
    
    // När knappen klickas på, växla klassen "hidden" på 'target'-elementet.
    // Om "hidden" finns tas den bort (gör elementet synligt), om den inte finns läggs den till (gör elementet osynligt).
    target.classList.toggle('hidden');

})
