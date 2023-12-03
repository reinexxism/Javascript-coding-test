// 039. 9로 나눈 나머지

function solution(number) {
  let sum = 0;
  let numArray = [...number];
  for (let i = 0; i < numArray.length; i++) {
    sum += parseInt(numArray[i]);
  }
  return sum % 9;
}

console.log(solution("123")); // output: 6
console.log(solution("78720646226947352489")); // output: 2
