## Answers to Questions:

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: There are some diffrences between getElementById, getElementsByClassName, querySelector and querySelectorAll in how they select elements from the JavaScript DOM. 

#### getElementById 
This method used to target an element using the id attribute in the html element. It gives the whole element and we can extract every information inside that element, like innerText, classList etc. Id is unique so it only return a single element. 

#### getElementsByClassName 
This method return an HTML collection like an array using classname as in multiple elements has the same classname. 

#### querySelector 
This method do similary as getElementById but in this you can use .class, #id or tag name as the selector. It only returns the first matching iteam. 

#### querySelectorAll
On the other hand, querySelectorAll returns you an array of node or NodeList of all the matching elements. Here you can also use .class, #id or tag name as the selector.


### 2. How do you create and insert a new element into the DOM?
Answer: To create and insert a new element into the DOM, need to follow some steps.

#### Step 01:
Firstly, create an element using document.createElement(). You can pass the element name inside the method like "div", "p" etc.
For example:
	const newDiv = document.createElement("div");

#### Step 02:
Now you can add content, classname, design etc you want. Here I am adding a text "Hello World" using .innerText.
For example:
	newDiv.innerText = "Hello World";

#### Step 03:
Get the parent element using selector method. Here I use getElementById().<br>
For example: <br>
	const container = document.getElementById("container");


Now append the newDiv as child inside the parent. For that you can use .appendChild() or .append(). <br>
For example: <br>
	container.appendChild(newDiv);

### 3. What is Event Bubbling? And how does it work?
Answer: Event Bubbling is one kind of behavior where event start from target element and goes up step by step (parent by parent) to the root of the DOM. 

#### Working behavior:
1. Event focus the target element.
2. Then moves to it's parent.
2. Then go to the grandparent.
3. Then grandparent to great granparent till reached to root.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a technique where a single event listener can handle events for multiple child elements instead of adding separate event listeners to each child element. You can differentiate the target element by checking whether it contains a specific class using classList.contains().

It is very useful when you need to handle multiple types of operations inside a parent element. Instead of adding an event listener to every child element, you can use just one on the parent. This improves performance, makes the code cleaner and more maintainable, and also ensures that newly added child elements will also work without adding extra event listeners.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
#### preventDefault() 
It stops the browser’s default behavior for an event.
For example: 
	It can stop reloading when submit a form.

#### stopPropagation() 
It stops the event from moving up to parent elements in the DOM.