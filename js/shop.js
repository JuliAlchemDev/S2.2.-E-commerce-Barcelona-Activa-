// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "Cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array

  const addToCart = products.find((product) => product.id === id);

  if (!addToCart) {
    console.log("Product not found!");
    return;
  }

  const productInCart = cart.find((item) => item.id === id);

  if (productInCart) {
    productInCart.quantity += 1;
  } else {
    cart.push({ ...addToCart, quantity: 1 });
  }

  console.log("Products in cart:", cart);
  cart.forEach((item) =>
    console.log(`Product Name: ${item.name}, Quantity: ${item.quantity}`)
  );

  applyPromotionsCart();
  calculateTotal();
}

// Exercise 2
function cleanCart() {
  cart = [];
  const cartList = document.getElementById("cart_list");
  cartList.innerText = "";
  const totalPrice = document.getElementById("total_price");
  totalPrice.innerText = 0;
  console.log("Cart is empty");
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].subtotalWithDiscount) {
      total += cart[i].subtotalWithDiscount;
    } else {
      total += cart[i].price * cart[i].quantity;
    }
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  cart.forEach((item) => {
    if (item.offer && item.quantity >= item.offer.number) {
      item.subtotalWithDiscount = parseFloat(
        (item.price * item.quantity * (1 - item.offer.percent / 100)).toFixed(2)
      );
    }
  });
  console.log("Promotions applied", cart);
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const cartList = document.getElementById("cart_list");
  const totalPrice = document.getElementById("total_price");

  totalPrice.innerText = `${total.toFixed(2)}`;

  cartList.innerHTML = "";

  cart.forEach((item) => {
    const productRow = document.createElement("tr");

    const productName = document.createElement("td");
    productName.innerText = item.name;
    productRow.appendChild(productName);

    const productPrice = document.createElement("td");
    productPrice.innerText = item.price;
    productRow.appendChild(productPrice);
    const productQuantity = document.createElement("td");
    productQuantity.innerText = item.quantity;
    productRow.appendChild(productQuantity);
    const productSubtotal = document.createElement("td");
    productSubtotal.innerText =
      item.subtotalWithDiscount || (item.price * item.quantity).toFixed(2);
    productRow.appendChild(productSubtotal);

    cartList.appendChild(productRow);
  });
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
