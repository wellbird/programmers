function solution(wallpaper) {
  let answer = [-1, -1, -1, -1];
  wallpaper.map((item, index) => {
    if (item.includes("#")) {
      if (answer[0] === -1) {
        answer[0] = index;
        answer[2] = index + 1;
      } else {
        answer[2] = index + 1;
      }
      if (answer[1] === -1) {
        answer[1] = item.indexOf("#");
      }
      if (answer[3] === -1) {
        answer[3] = item.lastIndexOf("#") + 1;
      }
      if (answer[1] !== -1 && answer[1] >= item.indexOf("#")) {
        answer[1] = item.indexOf("#");
      }
      if (answer[3] !== -1 && answer[3] <= item.lastIndexOf("#")) {
        answer[3] = item.lastIndexOf("#") + 1;
      }
    }
  });
  return answer;
}

// 다른사람의 풀이 - 배열에 다 넣고 최대, 최소인 값 찾기
// function solution(wallpaper) {
//     let left = [];
//     let top = [];
//     let right = []
//     let bottom = [];
//     wallpaper.forEach((v,i) => {
//         [...v].forEach((val,ind) => {
//             if(val === "#") {
//                 left.push(i)
//                 top.push(ind)
//                 right.push(i + 1)
//                 bottom.push(ind + 1)
//             }
//         })
//     })
//     return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)]
// }
