function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let row = (arr1[i] | arr2[i]).toString(2);
    row = "0".repeat(n - row.length) + row;
    row = row.replace(/[10]/g, (num) => (num == 1 ? "#" : " "));
    answer.push(row);
  }
  return answer;
}
// replace를 사용할 때 모든 부분에 적용하고 싶으면 정규표현식을 사용한다. 아니면 조건에 맞는 맨 첫번째 것만 바뀜

// 다른사람의 풀이 1 - 0추가하는함수를 따로 만듬
// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//     return '0'.repeat(n - s.length) + s;
// }

// 다른사람의 풀이 2 - 간단하게
// var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
