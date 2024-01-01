// 055. 가까운 1 찾기

function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    let cur = arr[i];
    if (cur == 1) return i;
  }
  return -1;
}

console.log(solution([0, 0, 0, 1], 1)); // output: 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // output: -1
console.log(solution([1, 1, 1, 1, 0], 3)); // output: 3
