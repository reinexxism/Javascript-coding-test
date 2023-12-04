// 040. 문자열 여러 번 뒤집기

// js에서 문자열을 뒤집는 방법 - split().reverse().join() + slice(),splice() 사용
function solution(my_string, queries) {
  let answer = my_string.split("");
  let result = "";
  for (let query of queries) {
    let num = query[1] - query[0];
    result = answer.slice(query[0], query[1] + 1).reverse();

    answer.splice(query[0], num + 1);
    answer.splice(query[0], 0, ...result);
  }
  return answer.join("");
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
); // output: "programmers"
