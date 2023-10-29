// 029. 수열과 구간 쿼리(03)

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < 1; j++) {
      [arr[queries[i][j]], arr[queries[i][1]]] = [
        arr[queries[i][1]],
        arr[queries[i][j]],
      ];
    }
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
); // output: [3, 4, 1, 0, 2]
