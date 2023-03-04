function solution(today, terms, privacies) {
  const todayArr = today.split(".");
  let answer = [];
  let term = {};
  terms.map((item, index) => {
    let arr = item.split(" ");
    term[arr[0]] = Number(arr[1]);
  });
  privacies.map((item, index) => {
    let arr = item.split(" ");
    let dateArr = arr[0].split(".");
    dateArr[1] = Number(dateArr[1]) + term[arr[1]];
    if (dateArr[1] > 12) {
      if (dateArr[1] % 12 === 0) {
        dateArr[0] = Number(dateArr[0]) + ~~((dateArr[1] - 12) / 12);
        dateArr[1] = 12;
      } else {
        dateArr[0] = Number(dateArr[0]) + ~~(dateArr[1] / 12);
        dateArr[1] = dateArr[1] % 12;
      }
    }
    if (Number(dateArr[0]) < Number(todayArr[0])) {
      answer.push(index + 1);
    } else if (Number(dateArr[0]) === Number(todayArr[0])) {
      if (Number(dateArr[1]) < Number(todayArr[1])) {
        answer.push(index + 1);
      } else if (Number(dateArr[1]) === Number(todayArr[1])) {
        if (Number(dateArr[2]) <= Number(todayArr[2])) {
          answer.push(index + 1);
        }
      }
    }
  });
  return answer;
}

// 다른사람의 풀이 - 일수로 변환해서 비교
// function solution(today, terms, privacies) {
//   var answer = [];
//   var [year, month, date] = today.split(".").map(Number);
//   var todates = year * 12 * 28 + month * 28 + date;
//   var t = {};
//   terms.forEach((e) => {
//     let [a, b] = e.split(" ");
//     t[a] = Number(b);
//   });
//   privacies.forEach((e, i) => {
//     var [day, term] = e.split(" ");
//     day = day.split(".").map(Number);
//     var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
//     if (dates <= todates) answer.push(i + 1);
//   });
//   return answer;
// }
