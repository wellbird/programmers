function solution(box, n) {
  return ~~(box[0] / n) * ~~(box[1] / n) * ~~(box[2] / n);
}

// 다른사람의 풀이 - 배열 메소드를 이용한 풀이
// function solution(box, n) {
//     return box.map(v=>~~(v/n)).reduce((a,v)=>a*v,1);
// }
