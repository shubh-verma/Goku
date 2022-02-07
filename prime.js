module.exports = function isPrime(num) {
  // TODO: Add valid check
  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
/*test_case = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
console.log(test_case);
test_case.forEach((i) => {
  console.log(i, isPrime(i));
});*/
