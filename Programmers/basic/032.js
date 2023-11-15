// 032. 배열 만들기

function solution(l, r) {
  let answer = [];
  for (let i = l; i <= r; i++) {
    let temp = String(i);
    if (![...temp].every((x) => x === "5" || x === "0")) continue;
    answer.push(i);
  }
  return answer.length ? answer : [-1];
}

// every() => 모든 원소가 조건에 맞는지 검사하는 메소드

console.log(solution(5, 555)); // output: [5, 50, 55, 500, 505, 550, 555]
