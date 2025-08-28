 Answer to the question no: 01

The difference between getElementById,getElementsByClassName and querySelector/querySelectorAll,how they select elements from the HTML.getElementById is used to select a single element and its must be a specific id.On the other hand, getElementsByClassName select all element with a class and returns an HTMl Collection, allowing access multiple elements at the same time.querySelector and querySelectorAll are use CSS selectors.querySelector returns only the first matching element but querySelectorAll returns all matching elements as a NodeList. In short,getElementById for ids,getElementsByClassName for classes and querySelector/querySelectorAll when we want to use CSS selectors. 


Anser to the question no: 02

To create and insert a new element into the DOM,we first use document.createElement() to make the element we want.Then we can add content to it to using innerText or innerHTML.After that, we need to decide where in the page we want it to show and use appendChild() to place it inside a parent element.

Answer to question no: 03

Event Bubbling is a process when a event happens on a child element,it automatically also happens on its parent elements and then on higher elements.For example, if we click button on a div,the click first happens on the button, then on the div and then on the elements above it.It moves automatically from the inside element to the outside elements.

answer to the question no: 04

Event Delegation is a method in javaScript where we adding event listeners to many child elements,we add a single event listener to the parent.When we click on a child element,the event bubbles up to the parent and we can handle it there.This is useful because it reduces code and makes it easy to handle elements that are added later dynamically

Answer to the question no: 05 

preventDefault() stops the browser from doing reloading.For example,when we click a submit button in a form,the browser reload the page after submission.But if we use preventDefault(),the page did not reload.

stopPropagation() stops an event from going to parent elements.For example,if we click a button in a box,normally the box also reacts but with stopPropagation() only the button react.