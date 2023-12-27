// 048. 문자열 뒤집기

function solution(my_string, s, e) {
  let changeStr = my_string.substr(s, e - s + 1);
  return (
    my_string.slice(0, s) +
    changeStr.split("").reverse().join("") +
    my_string.slice(e + 1)
  );
}

console.log(solution("Progra21Sremm3", 6, 12));
console.log(solution("Stanley1yelnatS", 4, 10));
