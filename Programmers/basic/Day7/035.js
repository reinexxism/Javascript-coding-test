// 035. 배열 만들기(4)

function solution(arr) {
  let stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length !== 0) {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop(stk[stk.length - 1]);
      }
    }
  }
  return stk;
}

// 시도 1: for문으로 풀어봤는데 개같이 멸망 -> 에제는 통과하는데 테스트 케이스에서 전부 틀림 몰라챠무~
// 시도 2: i를 전역변수로 빼고 while문으로 돌려보기 -> 성공!
console.log(solution([1, 4, 2, 5, 3])); // output: [1, 2, 3]
