function solution(queue1, queue2) {
  let sumQ1 = queue1.reduce((acc, v) => acc + v, 0);
  let sumQ2 = queue2.reduce((acc, v) => acc + v, 0);
  let pointer1 = 0;
  let pointer2 = queue1.length;
  const target = (sumQ1 + sumQ2) / 2;
  const newQ = [...queue1, ...queue2];

  for (let count = 0; count < queue1.length * 3; count++) {
    if (sumQ1 === target) {
      return count;
    }
    if (sumQ1 > target) {
      sumQ1 -= newQ[pointer1++];
    } else {
      sumQ1 += newQ[pointer2++];
    }
  }

  return -1;
}
