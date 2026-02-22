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
Get the parent element using selector method. Here I use getElementById().
For example:
	```js
	const container = document.getElementById("container");
	```

Now append the newDiv as child inside the parent. For that you can use .appendChild() or .append().
For example:
	container.appendChild(newDiv);

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
