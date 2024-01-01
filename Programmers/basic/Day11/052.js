// 052. 배열 만들기(1)

function solution(n, k) {
  let answer = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(10, 3)); // output: [3, 6, 9]
console.log(solution(15, 5)); // output: [5, 10, 15]
