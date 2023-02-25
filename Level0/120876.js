function solution(lines) {
  let arr = [];
  lines.sort((a, b) => a[0] - b[0]);
  if (lines[0][1] > lines[1][0]) {
    let subArr = [];
    subArr.push(lines[1][0]);
    if (lines[0][1] <= lines[1][1]) {
      subArr.push(lines[0][1]);
    } else {
      subArr.push(lines[1][1]);
    }
    arr.push(subArr);
  }
  if (lines[0][1] > lines[2][0]) {
    let subArr = [];
    subArr.push(lines[2][0]);
    if (lines[0][1] <= lines[2][1]) {
      subArr.push(lines[0][1]);
    } else {
      subArr.push(lines[2][1]);
    }
    arr.push(subArr);
  }
  if (lines[1][1] > lines[2][0]) {
    let subArr = [];
    subArr.push(lines[2][0]);
    if (lines[1][1] <= lines[2][1]) {
      subArr.push(lines[1][1]);
    } else {
      subArr.push(lines[2][1]);
    }
    arr.push(subArr);
  }
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0][1] - arr[0][0];
  } else if (arr.length === 2) {
    let answer = 0;
    arr.sort((a, b) => a[0] - b[0]);
    if (arr[0][1] > arr[1][0]) {
      if (arr[1][1] < arr[0][1]) {
        arr[1][0] = arr[0][1];
        arr[1][1] = arr[0][1];
      } else {
        arr[1][0] = arr[0][1];
      }
    }
    arr.map((item) => {
      answer += item[1] - item[0];
    });
    return answer;
  } else {
    let answer = 0;
    arr.sort((a, b) => a[0] - b[0]);
    if (arr[0][1] > arr[1][0]) {
      if (arr[1][1] < arr[0][1]) {
        arr[1][0] = arr[0][1];
        arr[1][1] = arr[0][1];
      } else {
        arr[1][0] = arr[0][1];
      }
    }
    if (arr[0][1] > arr[2][0]) {
      if (arr[2][1] < arr[0][1]) {
        arr[2][0] = arr[0][1];
        arr[2][1] = arr[0][1];
      } else {
        arr[2][0] = arr[0][1];
      }
    }
    if (arr[1][1] > arr[2][0]) {
      if (arr[2][1] < arr[1][1]) {
        arr[2][0] = arr[1][1];
        arr[2][1] = arr[1][1];
      } else {
        arr[2][0] = arr[1][1];
      }
    }
    arr.map((item) => {
      answer += item[1] - item[0];
    });
    return answer;
  }
}

// 다른사람의 풀이 - 선분을 직접 그린 후 두번 이상 채워진 것의 갯수를 구하기
// function solution(lines) {
//     let line = new Array(200).fill(0);
//     lines.forEach(([a, b]) => {
//         for(; a < b; a++) line[a+100]++;
//     });
//     return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
// }
