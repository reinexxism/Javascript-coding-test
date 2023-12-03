// 037. 주사위 게임(3) copy

function solution(a, b, c, d) {
  let temp = "";
  temp += a;
  temp += b;
  temp += c;
  temp += d;
  let temp2 = [...temp];
  let result = {};

  temp2.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  const sortedArray = Object.entries(result).sort((a, b) => b[1] - a[1]);
  const first_value = sortedArray[0][1];

  if (first_value === 4) {
    return parseInt(sortedArray[0][0]) * 1111;
  } else if (first_value === 3) {
    return (
      (10 * parseInt(sortedArray[0][0]) + parseInt(sortedArray[1][0])) ** 2
    );
  } else if (first_value === 2 && sortedArray[1][1] === 2) {
    return (
      (parseInt(sortedArray[0][0]) + parseInt(sortedArray[1][0])) *
      Math.abs(parseInt(sortedArray[0][0]) - parseInt(sortedArray[1][0]))
    );
  } else if (first_value === 2 && sortedArray[1][1] === 1) {
    return parseInt(sortedArray[1][0]) * parseInt(sortedArray[2][0]);
  } else if (first_value === 1) {
    let min = parseInt(Object.keys(result)[0]);
    for (let i = 0; i < 4; i++) {
      if (parseInt(Object.keys(result)[i]) < min) {
        min = parseInt(Object.keys(result)[i]);
      }
    }
    return min;
  }
}

console.log(solution(2, 2, 2, 2)); // output: 2222
console.log(solution(1, 1, 2, 1)); // output: 144
console.log(solution(4, 1, 4, 4)); // output: 1681
console.log(solution(6, 3, 3, 6)); // output: 27
console.log(solution(2, 5, 2, 6)); // output: 30
console.log(solution(6, 4, 2, 5)); // output: 2
