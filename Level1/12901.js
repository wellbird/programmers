function solution(a, b) {
  let answer = "";
  let daycnt = 0;
  if (a === 1) {
    daycnt = b;
  } else if (a === 2) {
    daycnt = 31 + b;
  } else if (a === 3) {
    daycnt = 60 + b;
  } else if (a === 4) {
    daycnt = 91 + b;
  } else if (a === 5) {
    daycnt = 121 + b;
  } else if (a === 6) {
    daycnt = 152 + b;
  } else if (a === 7) {
    daycnt = 182 + b;
  } else if (a === 8) {
    daycnt = 213 + b;
  } else if (a === 9) {
    daycnt = 244 + b;
  } else if (a === 10) {
    daycnt = 274 + b;
  } else if (a === 11) {
    daycnt = 305 + b;
  } else if (a === 12) {
    daycnt = 335 + b;
  }
  const cnt = daycnt % 7;
  if (cnt === 0) {
    answer = "THU";
  } else if (cnt === 1) {
    answer = "FRI";
  } else if (cnt === 2) {
    answer = "SAT";
  } else if (cnt === 3) {
    answer = "SUN";
  } else if (cnt === 4) {
    answer = "MON";
  } else if (cnt === 5) {
    answer = "TUE";
  } else if (cnt === 6) {
    answer = "WED";
  }
  return answer;
}

// 다른사람의 풀이 1 - Date 이용
// function getDayName(a,b){
//     var date = new Date(2016, (a - 1), b);
//       return date.toString().slice(0, 3).toUpperCase();
//   }

// 다른사람의 풀이 2 - 같은방법 다른풀이(배열을 이용)
// function getDayName(a,b){
//     var dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
//   var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   var daySum;
//   if(a < 2) {
//     daySum = b - 1;
//   } else {
//     daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
//   }
//     return dayList[daySum % 7];
// }
