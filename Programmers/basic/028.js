// 028. 수 조작하기(02)

// [ numLog ]는 매번 조작을 할 때마다의 결괏값을 기록한 배열
// 예를 들어서, numLog[0] -> numLog[1]의 값 변화량이 +10이다 : 명령어 "d"가 실행된 것

function solution(numLog) {
  let numLogArr = [];
  for (let i = 1; i < numLog.length; i++) {
    let variable = numLog[i] - numLog[i - 1];
    variable === 1
      ? numLogArr.push("w")
      : variable === -1
      ? numLogArr.push("s")
      : variable === 10
      ? numLogArr.push("d")
      : variable === -10
      ? numLogArr.push("a")
      : null;
  }
  return numLogArr.join("");
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // output: "wsdawsdassw"

// switch문을 사용해도 괜찮을 것 같지만, 삼항 조건 연산자를 사용해서 하는게 좀 더 편한 것 같기도..
// 좀 더 간결한 방법을 사용할 것.. 분발해라
