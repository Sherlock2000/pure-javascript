document.addEventListener("DOMContentLoaded", () => {  // Wait for the DOM to load

      const newClass = "my-class"; // class to be  removed from elements

      document.querySelector("#ELEMENT").classList.remove(newClass); // removing an old class to a single element

      document.querySelectorAll(".ELEMENTS").forEach(element =>{ // removing an old class to a list of elements
            element.classList.remove(newClass);
      });


});