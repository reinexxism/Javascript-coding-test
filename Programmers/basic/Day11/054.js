// 054. 카운트다운

function solution(start, end_num) {
  let result = [];
  for (let i = start; i >= end_num; i--) {
    result.push(i);
  }
  return result;
}

console.log(solution(10, 3)); // output: [10, 9, 8, 7, 6, 5, 4, 3]
