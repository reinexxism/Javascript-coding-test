// 027. 수 조작하기(01)

// "w", "a", "s", "d"의 네 문자로 이루어진 control

function solution(n, control) {
  let controlArr = [...control];
  controlArr.map((char) => {
    char === "w"
      ? n++
      : char === "s"
      ? n--
      : char === "d"
      ? (n += 10)
      : char === "a"
      ? (n -= 10)
      : null;
  });
  return n;
}

console.log(solution(0, "wsdawsdassw")); // output: -1

// map()을 활용하기 위해 문자열을 스프레드 연산자를 사용해서 배열로 변환
