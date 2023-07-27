function solution(myStr) {
  let answer = [];
  let idx = 0;
  let token = "";
  while (idx < myStr.length) {
    if (myStr[idx] === "a" || myStr[idx] === "b" || myStr[idx] === "c") {
      if (token !== "") {
        answer.push(token);
        token = "";
      }
    } else {
      token += myStr[idx];
    }
    if (idx === myStr.length - 1) {
      if (token !== "") {
        answer.push(token);
      }
    }
    idx++;
  }
  return answer.length === 0 ? ["EMPTY"] : answer;
}

// 다른사람의 풀이 1 - 정규표현식 이용
// const solution=s=>s.match(/[^a-c]+/g)||['EMPTY']

// 다른사람의 풀이 2 - 정규표현식과 filter 이용
// function solution(myStr) {
//     const list = myStr.split(/[a|b|c]/).filter(str => str);
//     return list.length ? list : ["EMPTY"];
// }
