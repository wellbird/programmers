function solution(s) {
  let answer = s;
  const items = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const checkNum = /^[0-9]+$/;
  for (let i in items) {
    if (checkNum.test(answer)) {
      break;
    }
    const reg = new RegExp(i, "g");
    answer = answer.replace(reg, items[i]);
  }
  return Number(answer);
}

// 다른사람의 풀이 1 - split으로 나누고 한번에 join
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }

// 다른사람의 풀이 2 - 정규표현식과 replace로만 풀기
// function solution(s) {
//     s = s.replace(/zero/gi, 0)
//     .replace(/one/gi, 1)
//     .replace(/two/gi, 2)
//     .replace(/three/gi, 3)
//     .replace(/four/gi, 4)
//     .replace(/five/gi, 5)
//     .replace(/six/gi, 6)
//     .replace(/seven/gi, 7)
//     .replace(/eight/gi, 8)
//     .replace(/nine/gi, 9)
//     return parseInt(s);
// }
