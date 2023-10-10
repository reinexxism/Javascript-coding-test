// 013. 문자열 곱하기

function solution(my_string, k) {
  return my_string.repeat(k);
}

console.log(solution("string", 3));
console.log(solution("love", 10));

// 줄바꿈 없이 문자열을 반복시키려면 .repeat() method를 사용해야 한다!
