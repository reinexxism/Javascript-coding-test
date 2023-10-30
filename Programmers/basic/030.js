// 030. 수열과 구간 쿼리(2)

function solution(arr, queries) {
  let resultArr = [];
  for (let [s, e, k] of queries) {
    let temp = arr
      .filter((v, i) => i >= s && i <= e && v > k)
      .sort((a, b) => a - b)[0];
    resultArr.push(temp ? temp : -1);
  }
  return resultArr;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
); // output: [3, 4, -1]

// .filter() method를 사용 -> 새로운 배열을 생성
// .sort() method를 사용 -> 오름차순으로 정렬
