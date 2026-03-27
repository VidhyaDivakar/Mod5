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
// Show 10 products with picture, name, price in the landing page, allow click item goes to cart
// the cart page should have all the items with price
addProductButton.addEventListener("click", handleAdd);

function handleAdd(){
    const pName = productNameInput.value;
    const pPrice = productPriceInput.value;
if (pName === "" || isNaN(pPrice) || pPrice<=0){
    alert("Enter valid product name and price");
    return;
}

    console.log(pName, pPrice);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}