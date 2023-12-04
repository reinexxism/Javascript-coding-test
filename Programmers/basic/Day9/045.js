// 045. 접미사인지 확인하기

// js 접미사 확인 : endsWith()
// js 접두사 확인 : startsWith()
function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}

console.log(solution("banana", "ana")); // output: 1
console.log(solution("banana", "nan")); // output: 0
console.log(solution("banana", "wxyz")); // output: 0
console.log(solution("banana", "abanana")); // output: 0
