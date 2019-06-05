(() => {
   //Variables
   //Button to toggle the class
   const button = document.getElementById('button');
   // Selector for the fill element.
   const fill = document.querySelector('.fill');
   // Boolean variable that behaves as a state.
   let pressed = false;

   // Adds a listener to the button.
   button.addEventListener('click', function() {
      // Variable for the Nav element.
      const nav = this.parentElement;
      // Toggle class form nav element.
      nav.classList.toggle('toggle-navbar');

      // Checks if the nav element contains the class.
      nav.classList.contains('toggle-navbar')
         ? // If so, it changes the pressed variable to true.
           (pressed = true)
         : // Else it keeps it false;
           (pressed = false);

      // Call to the function closeNavbar to add the eventListener on the element.
      checkIfPressed();
   });

   // Function that will remove the toggle class from the navbar.
   const checkIfPressed = () => {
      // Checks if the nav is being showed.
      if (pressed) {
         // Adds a listener to the fill element, a tried to make this with the BODY element but it didn't work, i guess thats because the BODY element contains the navbar.
         fill.addEventListener('click', closeNavbar);
      }
   };

   // Function that will close the navbar and remove the event listener from the element.
   const closeNavbar = () => {
      // Removes the class on click
      button.parentElement.classList.remove('toggle-navbar');
      // Once it removes the class, it also removes the event listener from the element.
      fill.removeEventListener('click', closeNavbar);
   };
})();
