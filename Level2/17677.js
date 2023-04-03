function solution(str1, str2) {
  const checkAvail = (str) => {
    return /[a-zA-Z]/.test(str);
  };
  let union = [];
  let intersection = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let str1Arr = [];
  let str2Arr = [];
  let str1Pnt = 0;
  let str2Pnt = 0;
  for (let k = 0; k < str1.length - 1; k++) {
    if (!checkAvail(str1[k]) || !checkAvail(str1[k + 1])) {
      continue;
    }
    str1Arr.push(str1[k] + str1[k + 1]);
  }
  for (let k = 0; k < str2.length - 1; k++) {
    if (!checkAvail(str2[k]) || !checkAvail(str2[k + 1])) {
      continue;
    }
    str2Arr.push(str2[k] + str2[k + 1]);
  }
  str1Arr.sort();
  str2Arr.sort();
  while (str1Pnt < str1Arr.length && str2Pnt < str2Arr.length) {
    if (str1Arr[str1Pnt] === str2Arr[str2Pnt]) {
      union.push(str1Arr[str1Pnt]);
      intersection.push(str1Arr[str1Pnt]);
      str1Pnt++;
      str2Pnt++;
    } else if (str1Arr[str1Pnt] > str2Arr[str2Pnt]) {
      union.push(str2Arr[str2Pnt]);
      str2Pnt++;
    } else if (str1Arr[str1Pnt] < str2Arr[str2Pnt]) {
      union.push(str1Arr[str1Pnt]);
      str1Pnt++;
    }
  }
  while (str1Pnt < str1Arr.length) {
    union.push(str1Arr[str1Pnt]);
    str1Pnt++;
  }
  while (str2Pnt < str2Arr.length) {
    union.push(str2Arr[str2Pnt]);
    str2Pnt++;
  }
  return union.length === 0
    ? 65536
    : ~~((intersection.length / union.length) * 65536);
}

// 다른사람의 풀이 - Set 이용, 교집합 합집합을 따로 구하지 않음
// function solution (str1, str2) {
//     function explode(text) {
//       const result = [];
//       for (let i = 0; i < text.length - 1; i++) {
//         const node = text.substr(i, 2);
//         if (node.match(/[A-Za-z]{2}/)) {
//           result.push(node.toLowerCase());
//         }
//       }
//       return result;
//     }
//     const arr1 = explode(str1);
//     const arr2 = explode(str2);
//     const set = new Set([...arr1, ...arr2]);
//     let union = 0;
//     let intersection = 0;

//     set.forEach(item => {
//       const has1 = arr1.filter(x => x === item).length;
//       const has2 = arr2.filter(x => x === item).length;
//       union += Math.max(has1, has2);
//       intersection += Math.min(has1, has2);
//     })
//     return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
//   }
