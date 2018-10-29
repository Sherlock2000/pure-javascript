document.addEventListener("DOMContentLoaded", () => {  // Wait for the DOM to load

      const newClass = "my-class"; // class to be added to the elements

      document.querySelector("#ELEMENT").classList.add(newClass); // adding a new class to a single element

      document.querySelectorAll(".ELEMENTS").forEach(element =>{ // adding a new class to a list of elements
            element.classList.add(newClass);
      });


});