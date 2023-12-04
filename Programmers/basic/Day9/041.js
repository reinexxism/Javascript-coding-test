// 041. 배열 만들기(5)

function solution(intStrs, k, s, l) {
  let temp = 0;
  let answer = [];
  for (let intStr of intStrs) {
    temp = parseInt(
      intStr
        .split("")
        .slice(s, s + l)
        .join("")
    );
    if (temp > k) {
      answer.push(temp);
    }
  }
  return answer;
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
); // output: [56789, 99999]
