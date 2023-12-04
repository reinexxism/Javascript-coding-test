// 042. 부분 문자열 이어 붙여 문자열 만들기

function solution(my_strings, parts) {
  let answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    answer += my_strings[i]
      .split("")
      .slice(parts[i][0], parts[i][1] + 1)
      .join("");
  }
  return answer;
}

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
// output: "programmers"
