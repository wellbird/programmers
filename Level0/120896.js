function solution(s) {
  let charCount = {};
  let answerArr = [];
  let answer = "";
  s.split("").map((item, index) => {
    if (Object.keys(charCount).includes(item)) {
      charCount[item] += 1;
    } else {
      charCount[item] = 1;
    }
  });
  for (let k in charCount) {
    if (charCount[k] === 1) {
      answerArr.push(k);
    }
  }
  answer = answerArr.sort().join("");
  return answer;
}

// 다른사람의 풀이 - 갯수를 세지 않고 첫인덱스와 마지막인덱스로 판단
// function solution(s) {
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//     return res.sort().join('');
// }
