function solution(str_list) {
  const lIndex = str_list.indexOf("l");
  const rIndex = str_list.indexOf("r");
  if (lIndex === -1 && rIndex === -1) {
    return [];
  } else if (lIndex === -1) {
    return str_list.slice(rIndex + 1);
  } else if (rIndex === -1) {
    return str_list.slice(0, lIndex);
  } else if (lIndex > rIndex) {
    return str_list.slice(rIndex + 1);
  } else if (lIndex < rIndex) {
    return str_list.slice(0, lIndex);
  }
  return [];
}

// 다른사람의 풀이 - 그냥 순회돌면서 찾기
// function solution(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'l') return arr.slice(0, i);
//         if (arr[i] === 'r') return arr.slice(i + 1);
//     }
//     return [];
// }
