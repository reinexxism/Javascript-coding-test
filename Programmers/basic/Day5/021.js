// 021. 코드 처리하기

/* 
requirements

- code를 앞에서부터 읽다가 "1"을 만나면 mode를 0에서 1로 변경(mode의 초기값: 0)
- mode가 0인 경우
  * code[i]가 1이 아니면, i가 짝수일때만 문자열에 삽입 
  * code[i]가 1이면, mode를 0에서 1로 변경
- mode가 1인 경우
  * code[i]가 1이 아니면, i가 홀수일때만 문자열에 삽입
  * code[i]가 1이면, mode를 1에서 0으로 변경
*/

function solution(code) {
  let mode = 0;
  const newString = code
    .split("")
    .filter((value, idx) => {
      if (value === "1") {
        mode = mode === 0 ? 1 : 0;
        return false;
      }
      // mode === 1
      if (mode) {
        return idx % 2 === 1;
      }
      // mode === 0
      return idx % 2 === 0;
    })
    .join("");
  const result = newString.length != 0 ? newString : "EMPTY";
  return result;
}

console.log(solution("abc1abc1abc")); // output: "acbac"
// 고차함수 filter() 사용하기
