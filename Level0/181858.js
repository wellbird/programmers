function solution(arr, k) {
  let answer = [];
  for (let i of arr) {
    if (!answer.includes(i)) {
      answer.push(i);
    }
    if (answer.length === k) {
      break;
    }
  }
  while (answer.length < k) {
    answer.push(-1);
  }
  return answer;
}

// 다른사람의 풀이 - set이용
// function solution(arr, k) {
//     const set = new Set(arr);
//     return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
//   }
