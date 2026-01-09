const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array
console.log(itCompanies);

// 8. Print number of companies
console.log(itCompanies.length);

// 9. Print first, middle, last company
let middle = Math.floor(itCompanies.length / 2);
console.log(itCompanies[0]);
console.log(itCompanies[middle]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// 11. Print companies in uppercase
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// 12. Print as a sentence
console.log(itCompanies.join(', ') + ' are big IT companies.');

// 13. Check if company exists
let company = 'Google';
if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log('Company is not found');
}

// 14. Companies with more than one 'o' (no filter)
let result = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let char of itCompanies[i].toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) result.push(itCompanies[i]);
}
console.log(result);

// 15. Sort the array
console.log(itCompanies.sort());

// 16. Reverse the array
console.log(itCompanies.reverse());

// 17. Slice first 3 companies
console.log(itCompanies.slice(0, 3));