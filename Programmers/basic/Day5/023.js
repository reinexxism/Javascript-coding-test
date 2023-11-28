// 023. 주사위 게임 2

/*
Requirements

- 세 숫자가 모두 다를 경우 : a + b + c
- 세 숫자 중 두 숫자만 같은 경우 : (a + b + c)(a*a + b*b + c*c)
- 세 숫자가 모두 같은 경우 : (a + b + c)(a*a + b*b + c*c)(a*a*a + b*b*b + c*c*c)
*/

function solution(a, b, c) {
  return (result =
    a === b && b === c
      ? (a + b + c) *
        (a * a + b * b + c * c) *
        (a * a * a + b * b * b + c * c * c)
      : (a === b && a != c) || (b === c && b != a) || (a === c && a != b)
      ? (a + b + c) * (a * a + b * b + c * c)
      : a + b + c);
}

console.log(solution(2, 6, 1)); // output: 9
console.log(solution(5, 3, 3)); // output: 473
console.log(solution(4, 4, 4)); // output: 110592

// return문 하나안에 모두 작성하고 싶어서 삼항 조건 연산자를 썼는데.. 비교적 가독성은 떨어져 보이는 효과
