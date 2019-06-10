// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Visa always has a prefix of 4 and a length of 13, 16, or 19
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16

  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 
  // and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 
  // and a length of 16, 18, or 19.

  var cardLen = cardNumber.length;
  var firstTwo = cardNumber.substring(0,2);
  var firstFour = cardNumber.substring(0,4);

  // first check cards that have easy prefixes
  // then compare cards based on length

  // Diner's Club
	if (firstTwo === '38' || firstTwo === '39') {
    if (cardLen === 14) {
  		return "Diner's Club";
    }
  } 

  // American Express
  if (firstTwo === '34' || firstTwo === '37') {  
    if (cardLen === 15) {
  		return "American Express";
    }
  } 

  // MasterCard
	if (firstTwo >= 51 && firstTwo <= 55) {
    if (cardLen === 16) {
  		return "MasterCard";
    }
  } 

  // China UnionPay
  // All China UnionPay begin with 62
  if (firstTwo === '62') {
    if (cardLen >= 16 && cardLen <= 19) {
      if (cardNumber.substring(2,6) >= 2126 && cardNumber.substring(2,6) <= 2925) {
        return "China UnionPay";
      }
      if (cardNumber.substring(2,3) >= 4 && cardNumber.substring(2,3) <= 6) {
        return "China UnionPay";
      }
      if (cardNumber.substring(2,4) >= 82 && cardNumber.substring(2,4) <= 88) {
        return "China UnionPay";
      }
    }
  }

  // Switch
  if (cardLen === 16 || cardLen === 18 || cardLen === 19) {
    var switchArr = ['4903', '4905', '4911', '4936', '6333', '6759'];
    for (var i = 0; i < switchArr.length; i ++) {
      if (firstFour === switchArr[i]) {
        return "Switch";
      }
    }
    if (cardNumber.substring(0,6) === '564182' || cardNumber.substring(0,6) === '633110') {
        return "Switch";
    }
  }
 
 // Visa
 // Now all cards beginning with 4 have been ruled out by Switch
  if (cardNumber.substring(0,1) === '4') {
    if (cardLen === 13 || cardLen === 16 || cardLen === 19) {
      return "Visa";
    }
  }  

  // Discover
  if (cardLen === 16 || cardLen === 19) {
    if (firstFour === '6011' || firstTwo === '65' ||
      (cardNumber.substring(0,3) >= 644 && cardNumber.substring(0,3) <= 649)) {
    return "Discover";
    }
  }

  // Maestro
  if (cardLen >= 12 && cardLen <= 19) {
  	if (firstFour === '5018' ||
      firstFour === '5020' ||
  		firstFour === '5038' ||
  		firstFour === '6304') {
  		return "Maestro";
  	}
  }


  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


