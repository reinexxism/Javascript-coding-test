// 020. flag에 따라서 다른 값을 반환하기

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

console.log(solution(-4, 7, true));
console.log(solution(-4, 7, false));

// 삼항 조건 연산자를 사용
