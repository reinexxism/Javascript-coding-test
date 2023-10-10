// 09. Palindrome Number

var isPalindrome = function (x) {
  return String(x) === [...String(x)].reverse().join("");
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
