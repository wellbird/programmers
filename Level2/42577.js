function solution(phone_book) {
  const mapObj = {};
  phone_book.forEach((item, _) => {
    mapObj[item] = true;
  });
  for (let k = 1; k < 21; k++) {
    for (const val of phone_book) {
      if (val.length <= k) {
        continue;
      } else {
        if (mapObj[val.slice(0, k)]) {
          return false;
        }
      }
    }
  }
  return true;
}

// 다른사람의 풀이 - 정렬과 startWith 이용
// function solution(phoneBook) {
//     return !phoneBook.sort().some((t,i)=> {
//         if(i === phoneBook.length -1) return false;
//         return phoneBook[i+1].startsWith(phoneBook[i]);
//     })
// }
