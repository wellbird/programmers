function solution(arr) {
  let num = arr[0];
  let idx = 0;
  arr.map((item, index) => {
    if (item <= num) {
      num = item;
      idx = index;
    }
  });
  arr.splice(idx, 1);
  arr = arr.length === 0 ? [-1] : arr;
  return arr;
}

// 다른사람의 풀이 1 - Math와 ...이용
// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     if(arr.length<1)return[-1];
//     return arr;
// }

// 다른사람의 풀이 2 - Math와 ...이용
// function solution(arr) {
//     const min = Math.min(...arr);
//     return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
// }

// 다른사람의 풀이 3 - reduce와 filter이용
// function solution(arr) {
//     var min = arr.reduce((p, c) => Math.min(p,c))
//     var r = arr.filter(v => v != min);
//     r = r.length == 0 ? [-1] : r;
//     console.log(r)
//     return r;
// }
