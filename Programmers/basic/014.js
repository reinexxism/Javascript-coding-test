// 014. 더 크게 합치기

function solution(a, b) {
  let temp = "";
  let aTemp = temp + a + b;
  let bTemp = temp + b + a;

  return parseInt(aTemp) > parseInt(bTemp) ? parseInt(aTemp) : parseInt(bTemp);
}

console.log(solution(9, 91));
console.log(solution(89, 8));

// 문자열("898")을 숫자(898)로 변경시키는 방법 : parseInt() function을 사용
// return문에는 삼항연산자를 사용해서 더 간결하게 표현
