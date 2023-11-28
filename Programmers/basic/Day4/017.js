// 017. 공배수

function solution(number, n, m) {
  return (number % n === 0) & (number % m === 0) ? 1 : 0;
}

console.log(solution(60, 2, 3));
console.log(solution(55, 0, 5));

// 삼항 조건 연산자, 논리곱 연산자를 사용해서 한 줄로 표현하기
