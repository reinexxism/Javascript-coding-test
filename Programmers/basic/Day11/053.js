// 053. 글자 지우기

function solution(my_string, indices) {
  let strArr = my_string.split("");
  indices.forEach((num) => {
    delete strArr[num];
  });
  return strArr.join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // output: "programmers"
