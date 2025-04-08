const btn = document.querySelector('.btn');
const target = document.querySelector('.cookies');

btn.addEventListener("click", function(event){
    target.classList.toggle('hidden')

})