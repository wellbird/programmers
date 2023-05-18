function solution(num_list) {
  if (num_list.length > 10) {
    return num_list.reduce((cur, acc) => (cur += acc), 0);
  }
  return num_list.reduce((cur, acc) => (cur *= acc), 1);
}

// 다른사람의 풀이 - reduce 안에서 삼항연산
// const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a*v)
