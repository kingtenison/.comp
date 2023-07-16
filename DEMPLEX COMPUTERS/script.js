let cartItems = [];
let total = 0;

function addToCart() {
  // Get the product details
  const productName = "1x MSI RAIDER";
  const productPrice = 19.99;

  // Create a new item for the cart
  const item = {
    name: productName,
    price: productPrice
  };

  // Add the item to the cart
  cartItems.push(item);

  // Update the total price
  total += productPrice;

  // Update the cart UI
  updateCartUI();
}

function updateCartUI() {
  const cartItemsElement = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  // Clear the cart items
  cartItemsElement.innerHTML = "";

  // Add each item to the cart UI
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(li);
  });

  // Update the total price
  totalElement.innerText = `Total: $${total.toFixed(2)}`;
}

  //allowing the elements to dropdown with javascript
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>{
  navbarLinks.classList.toggle('active')
})
