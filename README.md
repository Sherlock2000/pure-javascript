# pure-javascript
Javascript equivalents of jQuery functions. No need to import jQuery or any other libraries in your project .These functions or methods are build with standards and work with any framework or library. Now you don't need to include heavy libraries in your web project , which will surely improve page load time and performance.

## Contents

#### $(function( ){ } ) -> document.addEventListener("DOMContentLoaded" , function( ){ } )
_inbuilt_

Runs the provided function when the DOM has finished loading


#### $.ajax -> Ajax()
_custom_

Makes an AJAX(Asynchronous JavaScript and XML) call which uses XmlHttpRequest objects and ActiveXObject (for browsers which do not support XmlHttpRequest). It also has a simple syntax like jQuery's AJAX.
 
#### $(_selector_).addclass(newClass)  -> Element.classList.add(newClass) 
_inbuilt_

Add a class to single element or list of elements.

#### $(_selector_).removeClass(oldClass) -> Element.classList.remove(oldClass)
_inbuilt_

Remove a class from a single element or list of elements.
