const button = document.getElementById('button');

button.addEventListener('click', function() {
   this.parentElement.classList.toggle('toggle-navbar');
});
