// 026. 마지막 두 원소

function solution(num_list) {
  let lastIndex = num_list[num_list.length - 1];
  let lastIndexPrev = num_list[num_list.length - 2];
  if (lastIndex > lastIndexPrev) num_list.push(lastIndex - lastIndexPrev);
  else num_list.push(lastIndex * 2);
  return num_list;
}

console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));
