// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

let doubleNums = [];
let singleNums = [];
let singleNumTotal = 0;
let doubleNumTotal = 0;
let bigTotal = 0;
let badCards = [];
let goodCards = [];
let companies = [];
let singleCompanies = [];
let badFirstNumber = [];

//Validate credit card function below is fully functional.

const validateCred = arr => {

  for (let i = arr.length; i = 0; i -= 2) {
    if (typeof arr[i] == 'number') {
      doubleNums.push(arr[i] * 2);
    }
  }

  for (let x = 0; x < doubleNums.length; x++) {
    if (doubleNums[x] > 9) {
      doubleNums[x] -= 9;
    }
  }

  for (let j = arr.length += 1; j >= 0; j -= 2) {
    if (typeof arr[j] == 'number') {
      singleNums.push(arr[j]);
    }
  }

  doubleNumTotal = doubleNums.reduce((a, b) => a + b, 0);
  singleNumTotal = singleNums.reduce((a, b) => a + b, 0);

  bigTotal = doubleNumTotal + singleNumTotal;

  if (bigTotal % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

// Below function returns nested array of bad credit card numbers.

const findInvalidCards = arr => {
  for (let y = 0; y < arr.length; y++) {
    if (validateCred(arr[y]) ) {
      goodCards.push(arr[y]);
    } else {
      badCards.push(arr[y]);
    } 
  }
}

const idInvalidCardCompanies = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 3) {
      companies.push('Amex');
    } else if (arr[i][0] == 4) {
      companies.push('Visa');
    } else if (arr[i][0] == 5) {
      companies.push('Mastercard');
    } else if (arr[i][0] == 6) {
      companies.push('Discover');
    } else {
      return 'Company not found'
    }
  }

  console.log(singleCompanies = [...new Set(companies)]);
}

//console.log(validateCred(invalid3));

/*console.log(`double nums ${doubleNums}`);
console.log(`single nums ${singleNums}`);
console.log(`single number total ${singleNumTotal}`);
console.log(`double number total ${doubleNumTotal}`);
console.log(`total number ${bigTotal}`);*/

findInvalidCards(batch);

//console.log(badCards);

idInvalidCardCompanies(badCards);

