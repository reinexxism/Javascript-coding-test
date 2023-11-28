// 019. 조건 문자열

function solution(ineq, eq, n, m) {
  if ((eq === "=") & (n == m)) return 1;
  if ((ineq === ">") & (n > m)) return 1;
  if ((ineq === "<") & (n < m)) return 1;
  return 0;
}

console.log(solution("<", "=", 20, 50));
console.log(solution(">", "!", 41, 78));

// 템플릿 리터럴..써보면 되지 않을까? -> 템플릿 리터럴 + 삼항 조건 연산자의 조헙으로 : 코드 너무 길어짐
// eval() 함수 사용 : 코드는 짧지만, eval() is evil이므로 사용을 지양
// 템플릿 리터럴을 쓸 필요도 없이 단순하게 논리곱 연산자로 해결!
