function solution(n, t, m, p) {
  let answer = "";
  let num = 0;
  let cnt = 0;
  while (answer.length !== t) {
    let arr = num.toString(n).split("");
    for (let k = 0; k < arr.length; k++) {
      cnt++;
      if ((cnt - p) % m === 0) {
        answer += arr[k].toUpperCase();
      }
      if (answer.length === t) break;
    }
    num++;
  }
  return answer;
}
