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

// Javascript에는 swap()이라는 별도의 메소드가 존재하지 않음!
// -> 배열의 두 값을 서로 교체할 때는 temp를 사용하거나 구조 분해 할당을 사용할 수 있음 -> 구조 분해 할당이 좀 더 편한 듯
