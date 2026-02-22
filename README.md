## Answers to Questions:

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: There are some diffrences between getElementById, getElementsByClassName, querySelector and querySelectorAll in how they select elements from the JavaScript DOM. 

# getElementById 
This method used to target an element using the id attribute in the html element. It gives the whole element and we can extract every information inside that element, like innerText, classList etc. Id is unique so it only return a single element. 

# getElementsByClassName 
This method return an HTML collection like an array using classname as in multiple elements has the same classname. 

# querySelector 
This method do similary as getElementById but in this you can use .class, #id or tag name as the selector. It only returns the first matching iteam. 

# querySelectorAll
On the other hand, querySelectorAll returns you an array of node or NodeList of all the matching elements. Here you can also use .class, #id or tag name as the selector.


### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
