const TAX_RATE = 0.08;
const PHONE_PRICE = 1500;
const ACCESSORY_PRICE = 9.99;


var total_amount = 0;
var purchase_amount = 0;
var bank_balance = 10000;



function calculatedTax() {
    totalTax =  PHONE_PRICE * TAX_RATE;
    return totalTax;
 }

 function formattingPrice(amount) {
    formatted = amount.toFixed(2);
    return formatted;
}

while (purchase_amount < bank_balance) {
taxPrice = calculatedTax();
phone_purchase = PHONE_PRICE + taxPrice;
formattedPhone = formattingPrice(phone_purchase);
//console.log("Phone purchase is: " + '$' + formattedPhone);

purchase_amount = phone_purchase + ACCESSORY_PRICE;
formattedPurchase = formattingPrice(purchase_amount);
//console.log("Phone more accessorie purchase is: " + '$' + formattedPurchase);
   

console.log('I can afford more phones and accessories')
total_amount +=  purchase_amount;    
console.log('Your purchase amount so far is: ' + 
formattingPrice(total_amount))
bank_balance = bank_balance - purchase_amount;
console.log('Your bank balance so far is: ' + 
formattingPrice(bank_balance))
         
    
}

console.log('You run out the money in your bank account');


           
           
            
      
    
     
   
    
