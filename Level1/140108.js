function solution(s) {
  let answer = 0;
  let spell = "";
  let spellCnt = 0;
  let cnt = 0;
  for (let k of s) {
    if (spell === "") {
      spell = k;
      spellCnt++;
    } else {
      if (k === spell) {
        spellCnt++;
      } else {
        cnt++;
      }
    }
    if (cnt === spellCnt) {
      answer++;
      spell = "";
      spellCnt = 0;
      cnt = 0;
    }
  }
  if (cnt !== 0 || spellCnt !== 0) {
    answer++;
  }
  return answer;
}

// 다른사람의 풀이 - 재귀함수 이용
// function solution(s, count=0) {
//     if(!s) return count
//     let [first, ...rest] = s.split("")
//     let countSame = 1
//     let countInSame = 0
//     let i=0
//     for(; i<rest.length; i++){
//         if(rest[i] === first) countSame++
//         else countInSame++
//         if(countSame === countInSame) break
//     }
//     return solution(rest.slice(i+1).join(""), count+1)
// }
