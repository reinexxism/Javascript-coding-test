// 025. 이어 붙인 수

/*
My thinking

- 배열을 돌면서 홀수는 홀수용 배열에, 짝수는 짝수용 배열에 삽입
- 생성된 각 배열을 join()으로 묶어주고(문자열화), parseInt()사용(숫자화)
- 더해줌
*/

function solution(num_list) {
  let evenArr = [];
  let oddArr = [];
  num_list.map((i) => (i % 2 === 0 ? evenArr.push(i) : oddArr.push(i)));
  return parseInt(evenArr.join("")) + parseInt(oddArr.join(""));
}

console.log(solution([3, 4, 5, 2, 1])); // output: 393
console.log(solution([5, 7, 8, 3])); // output: 581
