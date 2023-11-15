// 033. 카운트 업

function solution(start_num, end_num) {
  let answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(3, 10)); // output: [3,4,5,6,7,8,9,10]
