function solution(num, total) {
  let answer = [];
  if (num % 2 === 0) {
    const centerNum1 = Math.floor(total / num);
    const centerNum2 = centerNum1 + 1;
    answer.push(centerNum1);
    answer.push(centerNum2);
    let count = 2;
    let gap = 1;
    while (!(count === num)) {
      answer.push(centerNum1 - gap);
      answer.push(centerNum2 + gap);
      gap++;
      count += 2;
    }
  } else {
    const centerNum = total / num;
    answer.push(centerNum);
    let count = 1;
    let gap = 1;
    while (!(count === num)) {
      answer.push(centerNum - gap);
      answer.push(centerNum + gap);
      gap++;
      count += 2;
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

// 다른사람의 풀이 1 - 최대, 최소 값 이용
// function solution(num, total) {
//     var min = Math.ceil(total/num - Math.floor(num/2));
//     var max = Math.floor(total/num + Math.floor(num/2));
//     return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
// }

// 다른사람의 풀이 2 - 가우스공식 이용
// function solution(num, total) {
//     const a = (2 * total / num + 1 - num) / 2
//     return Array(num).fill().map((_, i) => i + a)
// }
