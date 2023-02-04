function solution(a, b) {
  let GCD = 0;
  let bNum = 0;
  let sNum = 0;
  if (a >= b) {
    bNum = a;
    sNum = b;
  } else {
    bNum = b;
    sNum = a;
  }
  while (true) {
    if (bNum % sNum === 0) {
      GCD = sNum;
      break;
    } else {
      const remain = bNum % sNum;
      bNum = sNum;
      sNum = remain;
    }
  }
  let denom = b / GCD;
  while (denom % 2 === 0 || denom % 5 === 0) {
    if (denom % 2 === 0) {
      denom /= 2;
    }
    if (denom % 5 === 0) {
      denom /= 5;
    }
  }
  return denom === 1 ? 1 : 2;
}

// 다른사람의 풀이 - 2와 5로 먼저 나눈 후 분자와 나눠보기
// function solution(a, b) {
//     let tmpB = b
//     while (tmpB % 2 === 0) tmpB /= 2
//     while (tmpB % 5 === 0) tmpB /= 5
//     if (a % tmpB === 0) tmpB = 1
//     return tmpB === 1 ? 1 : 2
// }
