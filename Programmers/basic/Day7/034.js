// 034. 콜라츠 수열 만들기

/*
  콜라츠 수열이란?

  현재 값이 x이면 x가 짝수일 때는 2로 나누고, x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 된다.
  그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 함
*/

function solution(n) {
  let answer = [];
  let val = n;
  while (val != 1) {
    answer.push(val);
    if (val % 2 === 0) {
      val /= 2;
    } else {
      val = 3 * val + 1;
    }
  }
  answer.push(1);
  return answer;
}

console.log(solution(10)); // output: [10, 5, 16, 8, 4, 2, 1]
