var cart = [];
var itemName
var itemPrice
var itemList
var item

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
  
 itemList = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
 Object.assign({}, itemList, {[itemName]: item}, {[itemPrice]: Math.floor(Math.random()*100)})
 cart.push(itemList)
 
 return `${item} has been added to your cart.`
}


function viewCart(){
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else{
    for(var i = 0; i < cart.length; i++){
      var itemsAndPrices
      if(i === 0){
        itemsAndPrices = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if(i != cart.length -1){
         itemsAndPrices += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else{
        itemsAndPrices += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
    return itemsAndPrices + `.`
  }
}

function total() {
  let currentTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    currentTotal += cart[itemPrice];
  }
  return currentTotal;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
