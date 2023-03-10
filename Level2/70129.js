function solution(s) {
  let zeroCnt = 0;
  let transCnt = 0;
  while (s !== "1") {
    let sLen = s.length;
    let newSLen = s.replace(/0/g, "").length;
    zeroCnt += sLen - newSLen;
    s = newSLen.toString(2);
    transCnt++;
  }
  return [transCnt, zeroCnt];
}

// 다른사람의 풀이 - match를 이용하여 0의 갯수 세기
// function solution(s) {
//     var answer = [0,0];
//     while(s.length > 1) {
//         answer[0]++;
//         answer[1] += (s.match(/0/g)||[]).length;
//         s = s.replace(/0/g, '').length.toString(2);
//     }
//     return answer;
// }
