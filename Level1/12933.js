function solution(n) {
  const data = String(n).split("");
  data.sort(function (a, b) {
    return Number(b) - Number(a);
  });

  let answer = "";

  data.map((item, index) => {
    answer += item;
  });

  answer = Number(answer);

  return answer;
}

// 다른사람의 풀이 1
// function solution(n) {
//     const newN = n + "";
//     const newArr = newN
//       .split("")
//       .sort()
//       .reverse()
//       .join("");

//     return +newArr;
//   }

// 다른사람의 풀이 2
// function solution(n) {
//     return parseInt((n+"").split("").sort().reverse().join(""));
// }

// 다른사람의 풀이 3
// function solution(n) {
//     var nums =[];
//     do{
//         nums.push(n%10);
//         n=Math.floor(n/10);
//     } while(n>0)

// 숫자풀이(더 빠름)
//     return nums.sort((a,b)=>b-a).join('')*1;
// 문자풀이(느림)
//     return (n+"").split('').sort((a,b)=>b-a).join('')*1;
// }
