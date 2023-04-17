function solution(record) {
  let answer = [];
  let obj = {};
  record.map((item, index) => {
    let arr = item.split(" ");
    if (arr[0] === "Enter" || arr[0] === "Change") {
      obj[arr[1]] = arr[2];
    }
  });
  record.map((item, index) => {
    let arr = item.split(" ");
    if (arr[0] === "Enter") {
      answer.push(`${obj[arr[1]]}님이 들어왔습니다.`);
    } else if (arr[0] === "Leave") {
      answer.push(`${obj[arr[1]]}님이 나갔습니다.`);
    }
  });
  return answer;
}

// 다른사람의 풀이 - 해시맵을 이용한 풀이
// function solution(record) {
//     let ret = []
//     const uids = new Map()
//     record.forEach(entry => {
//         let [command, uid, nick] = entry.split(' ')
//         if (command === 'Enter' || command === 'Change') uids.set(uid, nick)
//     })
//     record.forEach(entry => {
//         let [command, uid] = entry.split(' ')
//         if (command === 'Enter') ret.push(`${uids.get(uid)}님이 들어왔습니다.`)
//         if (command === 'Leave') ret.push(`${uids.get(uid)}님이 나갔습니다.`)
//     })
//     return ret
// }
