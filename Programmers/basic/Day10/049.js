// 049. 세로 읽기

function solution(my_string, m, c) {
  let result = [];
  let strToArr = my_string.split("");
  for (let i = c - 1; i < strToArr.length; i += m) {
    result.push(strToArr[i]);
  }
  return result.join("");
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); // output: "happy"
console.log(solution("programmers", 1, 1)); // output: "programmers"
