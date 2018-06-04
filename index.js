var cart = [];

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
 var myTotal = 0
for(var i = 0, len = cart.length; i<len; i++) {
  myTotal+= cart[i][1];
}
return myTotal;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
