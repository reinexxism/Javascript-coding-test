// 011. 문자열 섞기

function solution(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }
  return result;
}

console.log(solution("aaaaa", "bbbbb"));
console.log(solution("frgfr", "vfgvf"));

// 어렵게 생각할 필요없음. 문제에서 준 힌트 : str1, str2의 길이가 똑같다.
// 그냥 str1과 str2 각각의 인덱스 차례대로 출력시켜주면 되는 문제
// 괜히 스프레드 문법 써서 배열로 나눠서 쪼개고,, 어쩌니 할 필요가 없었음!
