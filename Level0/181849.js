function solution(num_str) {
  let answer = 0;
  num_str.split("").map((item, _) => (answer += Number(item)));
  return answer;
}

// 다른사람의 풀이 - 스프레드 문법, reduce 이용
// const solution = num_str => [...num_str].reduce((acc, curr) => acc + Number(curr), 0)
