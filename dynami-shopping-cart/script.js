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
  const pName = productNameInput.value;
  const pPrice = productPriceInput.value;
  if (pName === "" || isNaN(pPrice) || pPrice <= 0) {
    alert("Enter valid product name and price");
    return;
  }

  console.log(pName, pPrice);

  // creating list items inside the <ul> cart list; <li> will be created inside <ul>
  const li = document.createElement("li");
  
  li.dataset.pPrice = pPrice; // add the data inside the element that has price. this is hidden storage
  li.textContent = `{pName} - $${pPrice.toFixed(3)}` // this is what will be displayed in the screen for the user //Total $ 0
console.log(pName, pPrice);


//Function for Remove Button and logic
const removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";
removeBtn.addEventListener("click", removeItem);

li.appendChild(removeBtn); // this is add remove button next to the items in <li>
cart.appendChild(li); // this is add li items in the cart <ul>
productNameInput.value = ""; // after entering the value, add button, then this happens; the Name input field is cleared for next input value.
productPriceInput.value = "";

}

  // Function to remove an item
  function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
  }