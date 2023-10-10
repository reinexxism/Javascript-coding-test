// 557. Reverse Words in a string

var reverseWords = function (s) {
  let strArray = s.split(" ");
  let reverseArray = strArray.map((str) => str.split("").reverse().join(""));
  return reverseArray.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
