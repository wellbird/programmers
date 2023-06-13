function solution(arr) {
  let answer = true;
  for (let k = 0; k < arr.length; k++) {
    for (let l = 0; l < k; l++) {
      if (arr[k][l] !== arr[l][k]) {
        answer = false;
        break;
      }
    }
    if (!answer) {
      break;
    }
  }
  return answer ? 1 : 0;
}
