function solution(l, r) {
  let answer = [];
  let num = 1;
  while (true) {
    let token = num.toString(2);
    token = Number(token) * 5;
    if (token < l) {
      num++;
      continue;
    } else if (token > r) {
      break;
    }
    answer.push(token);
    num++;
  }
  return answer.length === 0 ? [-1] : answer;
}

// 다른사람의 풀이 1 - 배열 메소드를 이용한 풀이
// function solution(l, r) {
//     const result = Array.from({length:r-l+1}, (_,i)=>i+l).filter(n=>!/[^05]/.test(n));
//     return result.length ? result : [-1];
// }

// 다른사람의 풀이 2 - 같은방법, 제네레이터 이용
// function* gen50() {
//     let i = 1;
//     while(true) {
//         yield Number(Number(i).toString(2)) * 5;
//         i++;
//     }
// }
// function solution(l, r) {
//     const n = gen50();
//     let a = 0;
//     const arr = [];
//     while(a < l) { a = n.next().value; }
//     while(a <= r) { arr.push(a); a = n.next().value; }
//     return arr.length ? arr : [-1];
// }
