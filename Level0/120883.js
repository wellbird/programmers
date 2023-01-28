function solution(id_pw, db) {
  let answer = "fail";
  for (let k of db) {
    if (k[0] === id_pw[0]) {
      if (k[1] === id_pw[1]) {
        answer = "login";
      } else {
        answer = "wrong pw";
      }
      break;
    }
  }
  return answer;
}

// 다른사람의 풀이 - Map 이용
// function solution(id_pw, db) {
//     const [id, pw] = id_pw;
//     const map = new Map(db);
//     return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
//   }
