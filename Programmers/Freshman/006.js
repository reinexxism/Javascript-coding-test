// 006. 숫자 비교하기

function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

console.log(solution(2, 3));
console.log(solution(11, 11));
console.log(solution(7, 99));

// 삼항조건연산자를 사용해서 간결하게 표현 -> if문을 사용할 필요가 없음
