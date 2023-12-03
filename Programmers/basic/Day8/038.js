// 038. 글자 이어 붙여 문자열 만들기

function solution(my_string, index_list) {
  let answer = "";
  for (let num of index_list) {
    answer += my_string[num];
  }
  return answer;
}

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
); // output: "programmers"
console.log(solution("zpiaz", [1, 2, 0, 0, 3])); // output: "pizza"
