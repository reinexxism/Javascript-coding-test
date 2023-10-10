// 015. 두 수의 연산값 비교하기

function solution(a, b) {
  let temp = "";
  let stringOperation = parseInt(temp + a + b);
  let numberOperation = 2 * a * b;

  return stringOperation > numberOperation
    ? stringOperation
    : stringOperation === numberOperation
    ? stringOperation
    : numberOperation;
}

console.log(solution(2, 91));
console.log(solution(91, 2));

// 출력문에 이중삼항연산자를 사용해서 조금 더 간결하게 표현
