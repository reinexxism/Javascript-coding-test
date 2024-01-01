// 050. qr code

function solution(q, r, code) {
  let result = [];
  let strToArr = code.split("");
  for (let i = 0; i < strToArr.length; i++) {
    if (i % q === r) {
      result.push(strToArr[i]);
    }
  }
  return result.join("");
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); // output: "jerry"
console.log(solution(1, 0, "programmers")); // output: "programmers"
