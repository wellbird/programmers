function solution(order) {
  let answer = 0;
  const orderArr = String(order).split("");
  for (let k of orderArr) {
    if (Number(k) === 3 || Number(k) === 6 || Number(k) === 9) {
      answer++;
    }
  }
  return answer;
}

// 다른사람의 풀이 1 - 3, 6, 9만 추출
// function solution(order) {
//     var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
//     return answer;
// }

// 다른사람의 풀이 2 - 3, 6, 9 위치에서 끊어서 끊긴 갯수 세기
// function solution(order) {
//     return (''+order).split(/[369]/).length-1;
// }

// 다른사람의 풀이 3 - 3, 6, 9를 제외한 요소를 없애기
// function solution(order) {
//     return (order + '').replace(/[0,1,2,4,5,7,8]/g, '').length
// }
