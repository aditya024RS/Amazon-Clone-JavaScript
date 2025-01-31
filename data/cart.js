//import { validDeliveryOption } from "./deliveryOptions";

export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if(!cart) {
    cart = [];
  }

}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateCartQuantity() {
  let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
}

export function addToCart(productId, quantity) {
    let matchingItem;
  
      cart.forEach((cartItem) => {
        if(productId === cartItem.productId) {
          matchingItem = cartItem; 
        }
      });
  
      if(matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId,
          quantity,
          deliveryOptionId: '1'
        });
      }

      saveToStorage();
  }

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
      if(cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    cart = newCart;
    saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if(cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.quantity = newQuantity;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem; 
    }
  });

  if(!matchingItem) {
    return;
  }

  /*if(!validDeliveryOption(deliveryOptionId)) {
    return;
  }*/

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log("load cart");
    fun();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}

export async function loadCartFetch() {
  try {
    const response = await fetch('https://supersimplebackend.dev/cart');
    console.log('load cart');
    
  } catch (error) {
    console.log('Unexpected error. Try again later.')
  }
}