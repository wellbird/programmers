function solution(fees, records) {
  let answer = [];
  let parkingLot = new Map();
  let accTime = new Map();
  records.map((item, _) => {
    let recordArr = item.split(" ");
    if (recordArr[2] === "IN") {
      let inTimeArr = recordArr[0].split(":");
      let inTime = Number(inTimeArr[0]) * 60 + Number(inTimeArr[1]);
      parkingLot.set(recordArr[1], inTime);
    } else {
      let inTime = parkingLot.get(recordArr[1]);
      let outTimeArr = recordArr[0].split(":");
      let outTime = Number(outTimeArr[0]) * 60 + Number(outTimeArr[1]);
      let time = outTime - inTime;
      if (accTime.has(recordArr[1])) {
        let newTime = accTime.get(recordArr[1]) + time;
        accTime.set(recordArr[1], newTime);
      } else {
        accTime.set(recordArr[1], time);
      }
      parkingLot.delete(recordArr[1]);
    }
  });
  if (parkingLot.size !== 0) {
    for (let k of parkingLot.keys()) {
      let elevenFiftyNine = 23 * 60 + 59;
      let time = elevenFiftyNine - parkingLot.get(k);
      if (accTime.has(k)) {
        let newTime = accTime.get(k) + time;
        accTime.set(k, newTime);
      } else {
        accTime.set(k, time);
      }
      parkingLot.delete(k);
    }
  }
  let timeArr = [...accTime].sort((a, b) => a[0] - b[0]);
  timeArr.map((item, _) => {
    let feeResult =
      item[1] < fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((item[1] - fees[0]) / fees[2]) * fees[3];
    answer.push(feeResult);
  });
  return answer;
}

// 다른사람의 풀이 - 입,출차 시간을 1439분에서 빼주면서 순회 한번에 계산
// function solution(fees, records) {
//     const parkingTime = {};
//     records.forEach(r => {
//         let [time, id, type] = r.split(' ');
//         let [h, m] = time.split(':');
//         time = (h * 1) * 60 + (m * 1);
//         if (!parkingTime[id]) parkingTime[id] = 0;
//         if (type === 'IN') parkingTime[id] += (1439 - time);
//         if (type === 'OUT') parkingTime[id] -= (1439 - time);
//     });
//     const answer = [];
//     for (let [car, time] of Object.entries(parkingTime)) {
//         if (time <= fees[0]) time = fees[1];
//         else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]
//         answer.push([car, time]);
//     }
//     return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
// }
