// 043. 문자열의 뒤의 n글자

function solution(my_string, n) {
  let answer = "";
  let startIndex = my_string.length - n;
  for (let i = startIndex; i < my_string.length; i++) {
    answer += my_string[i];
  }
  return answer;
}

console.log(solution("ProgrammerS123", 11)); // output: "grammerS123"
console.log(solution("He110W0r1d", 5)); // output: 	"W0r1d"
