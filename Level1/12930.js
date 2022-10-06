function solution(s) {
  let arr = s.split(" ");
  arr.map((item1, index1) => {
    let itemArr = item1.split("");
    itemArr.map((item2, index2) => {
      if (index2 === 0 || index2 % 2 === 0) {
        itemArr[index2] = item2.toUpperCase();
      } else {
        itemArr[index2] = item2.toLowerCase();
      }
    });
    arr[index1] = itemArr.join("");
  });
  const answer = arr.join(" ");
  return answer;
}

// 다른사람의 풀이 - 같은 방법 But 화살표 함수 이용
// const solution = (s) =>
//   s
//     .split(" ")
//     .map((x) =>
//       x
//         .split("")
//         .map((c, i) => (c = i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
//         .join("")
//     )
//     .join(" ");
