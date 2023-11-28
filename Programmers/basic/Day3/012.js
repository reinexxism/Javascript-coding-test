// 012. 문자 리스트를 문자열로 반환하기

function solution(arr) {
  return arr.join("");
}

console.log(solution(["a", "b", "c"]));

// 배열을 문자열로 합쳐주려면 .join() method를 사용한다.
// .join() method의 매개변수 : 현재는 ''를 사용했는데, 이걸 기준으로 합치겠다는 뜻
