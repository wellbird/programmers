function solution(n, slicer, num_list) {
  switch (n) {
    case 1:
      return num_list.slice(0, slicer[1] + 1);
    case 2:
      return num_list.slice(slicer[0]);
    case 3:
      return num_list.slice(slicer[0], slicer[1] + 1);
    case 4:
      let arr = [];
      for (let k = slicer[0]; k <= slicer[1]; k += slicer[2]) {
        arr.push(num_list[k]);
      }
      return arr;
  }
}

// 다른사람의 풀이 - 가독성 좋은 풀이
// function solution(n, slicer, num_list) {
//     let [a, b, c] = [...slicer];
//     switch(n) {
//         case 1:
//             return num_list.slice(0, b + 1);
//         case 2:
//             return num_list.slice(a);
//         case 3:
//             return num_list.slice(a, b + 1);
//         case 4:
//             return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
//     }
// }
