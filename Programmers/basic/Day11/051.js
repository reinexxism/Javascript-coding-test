// 051. 문자 개수 세기

function solution(my_string) {
  let answer = Array(52).fill(0);
  // 앞 26문자 : 대문자, 뒤 26문자 : 소문자
  // 아스키 코드 65 ~ 90 : 영어 대문자(A ~ Z) & 아스키 코드 97 ~ 122 : 영어 소문자(a ~ z)
  [...my_string].forEach((str, idx) => {
    const charCode = my_string.charCodeAt(idx); // 해당 인덱스의 문자를 아스키 코드로 변환
    // 만약 대문자라면
    if (charCode >= 65 && charCode <= 90) {
      answer[charCode - 65] += 1;
    }
    // 만약 소문자라면
    else if (charCode >= 97 && charCode <= 122) {
      answer[charCode - 97 + 26] += 1;
    }
  });
  return answer;
}

console.log(solution("Programmers"));
//output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
