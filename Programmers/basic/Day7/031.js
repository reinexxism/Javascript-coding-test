// 031. 수열과 구간 쿼리(04)

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (j % queries[i][2] == 0) {
        arr[j]++;
      }
    }
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
); // output: [3, 2, 4, 6, 4]

// 구조분해할당을 사용하면 좀 더 효율적이게 할 수 있을 듯...
// 새로운 배열을 굳이 만들 필요 없이 그냥 arr[j]의 값을 변경시켜주면 해결
