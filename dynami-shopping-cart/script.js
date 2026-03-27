const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Add Products

addProductButton.addEventListener("click", handleAdd);

function handleAdd() {
  const name = productNameInput.value;
  const price = parseFloat(productPriceInput.value);
  if (name === "" || isNaN(price) || price <= 0) {
    alert("Enter valid product name and price");
    return;
  }

  console.log(name, price);

  // creating list items inside the <ul> cart list; <li> will be created inside <ul>
  const li = document.createElement("li");
  li.classList.add("cart-item") // class cart-item to add styles
  li.dataset.price = price; // add the data inside the element that has price. this is hidden storage
  li.textContent = `${name} - $${price.toFixed(2)}` // this is what will be displayed in the screen for the user //Total $ 0
console.log(name, price);


//Function for Remove Button and logic
const removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";
removeBtn.addEventListener("click", removeItem);

li.appendChild(removeBtn); // this is add remove button next to the items in <li>
cart.appendChild(li); // this is add li items in the cart <ul>
productNameInput.value = ""; // after entering the value, add button, then this happens; the Name input field is cleared for next input value.
productPriceInput.value = "";
updateTotalPrice(price);
}

  // Function to remove an item
  function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
  }
  