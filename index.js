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


function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."}
    const itemsAndPrices = []
     for(let i = 0; i<cart.length; i++){
        let itemAndPrice = cart[i];
        if(cart.length === 1){
        let item = Object.values(itemAndPrice)[0]
        let price = Object.values(itemAndPrice)[1]
        itemsAndPrices.push(`${item} at \$${price}`)
              return `In your cart, you have ${itemsAndPrices.join(`,`)}.`
     }
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
