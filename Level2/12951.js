function solution(s) {
  let answer = "";
  for (let k = 0; k < s.length; k++) {
    if (k === 0 || s[k - 1] === " ") {
      answer += s[k].toUpperCase();
    } else if (s[k] === " ") {
      answer += " ";
    } else {
      answer += s[k].toLowerCase();
    }
  }
  return answer;
}

// 다른사람의 풀이 1 - charAt을 이용한 풀이
// function solution(s) {
//     return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }

// 다른사람의 풀이 2 - substring을 이용한 풀이
// function solution(s) {
//     var answer = [];
//     s = s.split(' ');
//     for(var i=0; i<s.length; i++) {
//         answer.push(s[i].substr(0,1).toUpperCase() + s[i].substr(1,s[i].length).toLowerCase());
//     }
//     return answer.join(' ');
// }
