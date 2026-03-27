Hw can you change the color of a DOM element with the ID "myElement" to red using JavaScript?

### What is the use of span?

* Apply styles to **specific words or phrases**
* Add **class or id** for styling or scripting
* Keep content inline (unlike `<div>`)
* Targeting (JavaScript)

```
<p>This is a <span style="color: red;">important</span> word.</p>
```

` <h3>Total: $<span id="total-price">0</span></h3>`

### What are functions param, args?

“Parameters define inputs of a function, while arguments are the actual values passed. JavaScript supports default values, rest parameters, and handles missing arguments as undefined.”

```
function greet(name = "Guest") {
  console.log(name);
}

greet(); // Guest
```

### In built DOM Method

`closest()` is a **built-in DOM method**

`parceFloat  `Converts a **string → decimal number (float)**

`dataset` is a **built-in property of DOM elements** used to access **custom data attributes** from HTML.

### What is getAttribute() method?

The **`getAttribute()`** method of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface returns the value of a specified attribute on the element.

```
const div1 = document.getElementById("div1");
// <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
// "div1"

const lang = div1.getAttribute("lang");
// null
```

### Which method would you use to create a new element in the DOM?

document.createelement()

### How to set a custom validation message for an input element?

The **`HTMLInputElement.setCustomValidity()`** method sets a custom validity message for the element.

```
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("That's too high!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

Note that the message will not be displayed immediately. Attempting to submit the form will display the message,

### In this example, we attempt to create a nested DOM structure using as few temporary variables as possible.

```
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);
```

### How to prevent a link from navigating to another page when clicked, which method would you use?

event.preventDefault()

Example:

const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick);

function checkboxClick(event) {
  const warn = "preventDefault() won't let you check this!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}

### Which input type can be used to select multiple files from the user's system?

File

Example:

HTML

```
<input type="file" id="fileInput" multiple>

```

```
const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', handleFiles);

function handleFiles(event) {
  const fileList = event.target.files; // This is a FileList object
  
  // You can iterate over the FileList using a loop
  for (const file of fileList) {
    // You now have access to each individual File object
    console.log('File Name:', file.name);
    console.log('File Type:', file.type);
    console.log('File Size:', file.size, 'bytes');
    // Further processing, like reading the file content or preparing for upload
  }
}

```

### Whcih event is triggered, when an element's values is changed?

Change event is triggered

Depending on the kind of element being changed and the way the user interacts with the element, the `change` event fires at a different moment:

* When a `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox">&lt;input type=&#34;checkbox&#34;&gt;</a>` element is checked or unchecked (by clicking or using the keyboard);
* When a `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio">&lt;input type=&#34;radio&#34;&gt;</a>` element is checked (but not when unchecked);
* When the user commits the change explicitly (e.g., by selecting a value from a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)'s dropdown with a mouse click, by selecting a date from a date picker for `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date">&lt;input type=&#34;date&#34;&gt;</a>`, by selecting a file in the file picker for `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file">&lt;input type=&#34;file&#34;&gt;</a>`, etc.);
* When the element loses focus after its value was changed: for elements where the user's interaction is typing rather than selection, such as a [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea) or the `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/text">text</a>`, `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/search">search</a>`, `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/url">url</a>`, `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/tel">tel</a>`, `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email">email</a>`, or `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/password">password</a>` types of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) element.

### property can be used to determine whether a checkbox input is selected?

Ans: check

```
function check() {
    document.getElementById("myCheck").checked = true;
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}
```

### Which method returns a NodeList of elements with a specified class name?

getElementsByClassName())

### * **`keydown`** **: Occurs when a key is pressed down. It fires for all keys (including** `Alt`, `Ctrl`, `Shift`, `Esc`, etc.) and continues to repeat if the key is held down.

### How can you change the color of a DOM element with the ID "myElement" to red using JavaScript?

[ ] document.getElementById("myElement").style.color = "red";
