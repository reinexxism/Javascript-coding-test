// 046. 문자열의 앞의 n글자

function solution(my_string, n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += my_string[i];
  }
  return answer;
}

console.log(solution("ProgrammerS123", 11)); // output: "ProgrammerS"
console.log(solution("He110W0r1d", 5)); // output: "He110"
