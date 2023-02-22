function solution(numbers, hand) {
  const two = {
    1: 1,
    2: 0,
    3: 1,
    4: 2,
    5: 1,
    6: 2,
    7: 3,
    8: 2,
    9: 3,
    0: 3,
    10: 4,
    11: 4,
  };
  const five = {
    1: 2,
    2: 1,
    3: 2,
    4: 1,
    5: 0,
    6: 1,
    7: 2,
    8: 1,
    9: 2,
    0: 2,
    10: 3,
    11: 3,
  };
  const eight = {
    1: 3,
    2: 2,
    3: 3,
    4: 2,
    5: 1,
    6: 2,
    7: 1,
    8: 0,
    9: 1,
    0: 1,
    10: 2,
    11: 2,
  };
  const zero = {
    1: 4,
    2: 3,
    3: 4,
    4: 3,
    5: 2,
    6: 3,
    7: 2,
    8: 1,
    9: 2,
    0: 0,
    10: 1,
    11: 1,
  };
  let answer = "";
  let left = 10;
  let right = 11;
  numbers.map((item, index) => {
    if (item === 1 || item === 4 || item === 7) {
      left = item;
      answer += "L";
    } else if (item === 3 || item === 6 || item === 9) {
      right = item;
      answer += "R";
    } else if (item === 2) {
      if (two[left] < two[right]) {
        left = item;
        answer += "L";
      } else if (two[left] > two[right]) {
        right = item;
        answer += "R";
      } else if (two[left] === two[right]) {
        if (hand === "right") {
          right = item;
          answer += "R";
        } else if (hand === "left") {
          left = item;
          answer += "L";
        }
      }
    } else if (item === 5) {
      if (five[left] < five[right]) {
        left = item;
        answer += "L";
      } else if (five[left] > five[right]) {
        right = item;
        answer += "R";
      } else if (five[left] === five[right]) {
        if (hand === "right") {
          right = item;
          answer += "R";
        } else if (hand === "left") {
          left = item;
          answer += "L";
        }
      }
    } else if (item === 8) {
      if (eight[left] < eight[right]) {
        left = item;
        answer += "L";
      } else if (eight[left] > eight[right]) {
        right = item;
        answer += "R";
      } else if (eight[left] === eight[right]) {
        if (hand === "right") {
          right = item;
          answer += "R";
        } else if (hand === "left") {
          left = item;
          answer += "L";
        }
      }
    } else if (item === 0) {
      if (zero[left] < zero[right]) {
        left = item;
        answer += "L";
      } else if (zero[left] > zero[right]) {
        right = item;
        answer += "R";
      } else if (zero[left] === zero[right]) {
        if (hand === "right") {
          right = item;
          answer += "R";
        } else if (hand === "left") {
          left = item;
          answer += "L";
        }
      }
    }
  });
  return answer;
}

// 다른사람의 풀이 - 좌표를 설정하여 거리구하기
// function solution(numbers, hand) {
//     hand = hand[0] === "r" ? "R" : "L"
//     let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
//     let h = { L: [1, 1], R: [1, 1] }
//     return numbers.map(x => {
//       if (/[147]/.test(x)) {
//         h.L = [position[x], 1]
//         return "L"
//       }
//       if (/[369]/.test(x)) {
//         h.R = [position[x], 1]
//         return "R"
//       }
//       let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
//       let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
//       if (distL === distR) {
//         h[hand] = [position[x], 0]
//         return hand
//       }
//       if (distL < distR) {
//         h.L = [position[x], 0]
//         return "L"
//       }
//       h.R = [position[x], 0]
//       return "R"
//     }).join("")
//   }
