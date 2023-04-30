function solution(files) {
  let answer = [];
  let fileNames = [];
  files.map((item, _) => {
    let splitName = [];
    let str = "";
    let idx = 0;
    while (isNaN(Number(item[idx])) || item[idx] === " ") {
      str += item[idx];
      idx++;
    }
    splitName.push(str);
    str = "";
    while (!isNaN(Number(item[idx])) && str.length < 6) {
      str += item[idx];
      idx++;
    }
    splitName.push(str);
    splitName.push(item.slice(idx));
    fileNames.push(splitName);
  });
  fileNames.sort((a, b) => {
    let aHead = a[0].toUpperCase();
    let bHead = b[0].toUpperCase();
    if (aHead !== bHead) {
      if (aHead > bHead) {
        return 1;
      } else if (aHead < bHead) {
        return -1;
      } else {
        return 0;
      }
    } else {
      let aNum = Number(a[1]);
      let bNum = Number(b[1]);
      return aNum - bNum;
    }
  });
  fileNames.map((item, _) => {
    answer.push(item.join(""));
  });
  return answer;
}

// 다른사람의 풀이 - 정규표현식을 이용한 풀이
// function solution(files) {
//     const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/
//     let dict = []
//     files.forEach((entry, idx) => {
//         let [fn, head, num] = entry.match(re)
//         dict.push({fn, head: head.toLowerCase(), num: parseInt(num), idx})
//     })
//     return dict.sort((a, b) => {
//         if (a.head > b.head) return  1
//         if (a.head < b.head) return -1
//         if (a.num > b.num) return  1
//         if (a.num < b.num) return -1
//         return a.idx - b.idx
//     }).map(e => e.fn)
// }
