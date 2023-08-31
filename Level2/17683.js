function solution(m, musicinfos) {
  let answer = [];
  m = m.replace(/(C|D|F|G|A)#/g, (_, token) => token.toLowerCase());
  for (const item of musicinfos) {
    const arr = item.split(",");
    const startTime = arr[0].split(":");
    const endTime = arr[1].split(":");
    let playTime =
      +endTime[0] * 60 + +endTime[1] - (+startTime[0] * 60 + +startTime[1]);
    let playCode = "";
    arr[3] = arr[3].replace(/(C|D|F|G|A)#/g, (_, token) => token.toLowerCase());
    if (playTime < arr[3].length) {
      playCode = arr[3].slice(0, playTime);
    } else {
      const loop = ~~(playTime / arr[3].length);
      const remain = playTime % arr[3].length;
      playCode = arr[3].repeat(loop) + arr[3].slice(0, remain);
    }
    if (playCode.includes(m)) {
      answer.push([arr[2], playTime]);
    }
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.length === 0 ? "(None)" : answer[0][0];
}

// 다른사람의 풀이 - Date를 이용하여 시간 차 구하기
// const solution = (m, musicInfos) => {
//     let answer = '';
//     musicInfos = musicInfos.map(e => {
//         let eArr = e.split(',');
//         let timeDiff = (new Date(`1970-01-01 ${eArr[1]}:00`) - new Date(`1970-01-01 ${eArr[0]}:00`)) / 60000;
//         let melody = eArr[3].replace(/[A-Z]#/g,m => m[0].toLowerCase());
//         melody = melody.repeat(Math.ceil(timeDiff / melody.length)).substr(0, timeDiff);
//         return `${timeDiff},${eArr[2]},${melody}`;
//     });
//     musicInfos.sort((a,b) => b.split(',')[0] - a.split(',')[0]);
//     answer = musicInfos.filter(e => e.split(',')[2].indexOf(m.replace(/[A-Z]#/g,m => m[0].toLowerCase())) != -1);
//     return answer.length == 0 ? '(None)' : answer[0].split(',')[1];
// }
