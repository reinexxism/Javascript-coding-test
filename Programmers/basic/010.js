// 10. 문자열 겹쳐쓰기
// .replace() method 사용? -> 문자열을 교체
// .concat() method 사용? -> 문자열을 합침

function solution(my_string, overwrite_string, s) {
  let before_overwrite_string = my_string.slice(0, s);
  let after_overwrite_string = my_string.slice(s + overwrite_string.length);
  return before_overwrite_string
    .concat(overwrite_string)
    .concat(after_overwrite_string);
}

console.log(solution("He11oWor1d", "lloWorl", 2));
console.log(solution("Program29b8UYP", "mers123", 7));
console.log(solution("hahahahahahahahha", "youretoslow", 4));
console.log(solution("aaaaaaaaaaaaa", "bbb", 4));
