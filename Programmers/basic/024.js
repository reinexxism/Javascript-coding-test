// 024. 원소들의 곱과 합

/* 
Solution
- 누산기 함수인 reduce()를 써보자
*/

function solution(num_list) {
  let firstValue = num_list.reduce((acc, cur) => acc * cur);
  let secondValue = num_list.reduce((acc, cur) => acc + cur);
  secondValue *= secondValue;
  return firstValue < secondValue ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1])); // output: 1
console.log(solution([5, 7, 8, 3])); // output: 0

/*
Feeling
- map()을 써볼까.. 했지만 그것보다 더 간단하고 가독성 좋은 reduce() 함수
*/
