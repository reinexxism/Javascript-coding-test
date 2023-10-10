// 018. 홀짝에 따라 다른 값을 반환하기

function solution(n) {
  let sum = 0;

  function isEven(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        sum += i * i;
      }
    }
    return sum;
  }

  function isOdd(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }

  return n % 2 === 0 ? isEven(n) : isOdd(n);
}

console.log(solution(7));
console.log(solution(10));

// 상위 함수(solution)의 반환문에 각 상황에 맞는 함수를 지정 -> isEven(), isOdd()
// 각각의 조건이 성립할 때 해당되는 함수를 호출하고 실행
// 함수 안에 함수를 만드는 것도 좋은 방법이지만! shot coding을 원한다면 forEach문을 사용해보는 것도 나쁘지 않은 try... 어케 쓰더라..?
