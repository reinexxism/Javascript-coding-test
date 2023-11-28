// 08. 문자열 돌리기

let str = "abcde";
str = [...str];
// 여기서 console.log(str)을 해보면 ["a", "b", "c", "d", "e"]로 출력된다.

str.map((char) => console.log(char));

// for 반복문을 사용해서 할 수도 있겠지만 스프레드 문법([...])을 사용해서 조금 더 간결하게 표현 가능
// 스프레드 문법을 사용해서 문자열을 가상의 배열로 담고
// .map() method를 사용
