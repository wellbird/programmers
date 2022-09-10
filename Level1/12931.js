function solution(n) {
  let answer = 0;
  for (let k = 0; k < String(n).length; k++) {
    answer += Number(String(n)[k]);
  }

  return answer;
}

// 다른사람의 풀이 1
// function solution(n){
//     // 쉬운방법
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }

// 다른사람의 풀이 2
// function solution(n) {
//     var arr = n.toString().split('');
//     var sum = 0;
//     arr.forEach(element => {
//         sum += parseInt(element);
//     });
//     return sum;
// }

// 다른사람의 풀이 3
// function solution(n)
// {
//     var a = (n + '').split('');
//     var b = 0;
//     for(var i = 0; i < a.length; ++i) {
//         b += parseInt(a[i]);
//     }
//     return b;
//     //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
// }
