 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 answer:
  document.getElementById(id) selects an element by its unique ID(IDs should be unique in a page.). 
 it return a single element (or null if no match). it doesn't require any # prefix to use, just the plain ID string.

 document.getElementsByClassName(className) selects all elements with a given class name. it's return A live HTMLCollection (not an array, but a similar thing) . i can use  loop over the HTMLCollection . If i modify the DOM, this collection updates automatically because it’s “live” .

document.querySelector(selector) selects the first element that matches a CSS selector . it return a singal element (or null if no match) . i can use any valid CSS selector(ID, class, tag, attribute,pseudo-class) . have to use prefix


 document.querySelectorAll(selector) Selects all elements that match a CSS selector. it return a static NodeList.if i modify the dom, it doesn't auto-update . it's not live it is static . i can directly iterate with `forEach` which i can't in document.getElementsByClassName(className) . have to use prefix according to given CSS selector it is static so it doesn't update automatically .



2.How do you create and insert a new element into the DOM? 
answer:  document.createElement('tagName') দিয়ে  নতুন একটি HTML element বানাতে হবে । এটা page-এ এখনও দেখাবে না, শুধু জাভাস্ক্রিপ্টের মেমরিতে তৈরি হয়। Content, class বা attribute যোগ করতে হবে | then যে parent div এর মধ্যে রাখবা সেই parent div কে একটা variable এ রাখো । তারপর parent.appendChild(new create Element) 


3.What is Event Bubbling and how does it work?
answer: Event Bubbling is a DOM event propagation process in JavaScript. When an event occurs on an element ,
the event first happens on the target element,
then it bubbles up step by step through its parent elements toward the document. Event bubbles up to reach the parent elements. if i want i can stop bubbling by using stopPropagation() . 
 child → parent → ancestor → document


4.What is Event Delegation in JavaScript? Why is it useful?
answer : Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching it to multiple child elements. it is useful for Efficiency: Instead of adding an event listener to every child, you add only one to the parent.
Dynamic elements: Works for child elements added later dynamically; you don’t need to attach new listeners.
Cleaner code: Less repetitive code and easier maintenance

5.What is the difference between preventDefault() and stopPropagation() methods ?
answer : Difference between preventDefault() and stopPropagation() in JavaScript:
preventDefault() ---> Prevents the default browser action for an event.Does not stop event bubbling.

stopPropagation() ---> Stops the event from bubbling up (or capturing down) the DOM.Does not prevent the default action.