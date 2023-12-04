// 044. 접미사 배열
// 문자열 사전순으로 정렬하기 : sort()
function solution(my_string) {
  let strArr = [...my_string];
  let answer = [];
  for (let i = 0; i < strArr.length; i++) {
    answer.push(strArr.slice(i, strArr.length).join(""));
  }
  return answer.sort();
}

console.log(solution("banana")); // output: ["a", "ana", "anana", "banana", "na", "nana"]
console.log(solution("programmers")); // output: ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]
