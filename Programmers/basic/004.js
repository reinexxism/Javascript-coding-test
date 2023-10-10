// 04. 대소문자 바꿔서 출력하기

let str = "aBcDeFg";

// my think
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i].toUpperCase() === str[i]) {
    result += str[i].toLowerCase();
  } else {
    result += str[i].toUpperCase();
  }
}
console.log(result);

// other good try -> using .map() method
// .map() method를 사용하려면 먼저 문자열을 배열로 변환시켜줘야 한다. -> 스프레드 문법 사용(...)

// str = [...str];
// console.log(
//   str
//     .map((char) =>
//       /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
//     )
//     .join("")
// );
