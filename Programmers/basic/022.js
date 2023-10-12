// 022. 등차수열의 특정한 항만 더하기

/* 
My think!

- 먼저 첫째항이 a이고, 공차가 d인 배열을 생성(배열의 길이는 included.length와 동일)
- 1에서 생성된 배열과 included[]을 비교
- included의 값이 true인 인덱스에 해당하는 배열 값만 더하기 : sum 변수 생성
*/

function solution(a, d, included) {
  let newArr = [];
  let sum = 0;
  // 등차수열 생성
  for (let i = 0; i < included.length; i++) {
    newArr.push(a);
    a = a + d;
    sum += newArr[i] && included[i] ? newArr[i] : 0;
  }
  return sum;
}

console.log(solution(3, 4, [true, false, false, true, true])); // output: 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // output: 10
