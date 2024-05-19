function solution(n, t, m, timetable) {
  let answer = '';
  let nextBus = '09:00';
  let busCnt = 0;
  let passengerCnt = 0;
  let passengerIdx = 0;
  timetable.sort(
    (a, b) => +a.slice(0, 2) - +b.slice(0, 2) || +a.slice(3, 5) - +b.slice(3, 5)
  );
  while (busCnt < n && passengerIdx < timetable.length) {
    while (passengerCnt < m && passengerIdx < timetable.length) {
      if (
        +timetable[passengerIdx].slice(0, 2) > +nextBus.slice(0, 2) ||
        (+timetable[passengerIdx].slice(0, 2) === +nextBus.slice(0, 2) &&
          +timetable[passengerIdx].slice(3, 5) > +nextBus.slice(3, 5))
      )
        break;
      passengerIdx++;
      passengerCnt++;
    }
    if (passengerCnt === m) {
      answer = getTime(
        +timetable[passengerIdx - 1].slice(0, 2),
        +timetable[passengerIdx - 1].slice(3, 5) - 1
      );
    } else if (passengerCnt < m) {
      answer = nextBus;
    }
    nextBus = getTime(+nextBus.slice(0, 2), +nextBus.slice(3, 5) + t);
    busCnt++;
    passengerCnt = 0;
  }
  return answer;
}

function getTime(hour, minute) {
  if (minute < 0) {
    while (minute < 0) {
      hour -= 1;
      minute += 60;
    }
  } else if (minute >= 60) {
    hour += ~~(minute / 60);
    minute %= 60;
  }
  if (hour < 10) hour = '0' + String(hour);
  if (minute < 10) minute = '0' + String(minute);
  return hour + ':' + minute;
}

// 다른사람의 풀이 - 시:분이 아닌 분으로 치환하여 풀이
// function solution(n, t, m, timetable) {
//     const getTime = time => time.substr(0, 2) * 60 + +time.substr(3);
//     let answer = getTime('09:00'),
//         last = (n - 1) * t + answer,
//         crews = timetable.map(getTime).sort((a, b) => a - b).filter(v => v <= last);
//     for (let i = 0; i < n; i++) {
//         let crewsNum = crews.filter(crew => answer >= crew).length;
//         if (i === n - 1) {
//             if (crewsNum >= m) answer = crews[m - 1] - 1;
//         } else {
//             crews.splice(0, crewsNum > m ? m : crewsNum);
//             answer += t;
//         }
//     }
//     return String(Math.floor(answer / 60)).padStart(2, '0') + ':' + String(answer % 60).padStart(2, '0');
// }
