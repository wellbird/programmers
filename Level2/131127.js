function solution(want, number, discount) {
  let answer = 0;
  for (let k = 0; k <= discount.length - 10; k++) {
    const newDiscount = discount.slice(k, k + 10);
    const map = new Map();
    let valid = true;
    newDiscount.map((item) => map.set(item, (map.get(item) || 0) + 1));
    for (let l = 0; l < want.length; l++) {
      if (map.get(want[l]) !== number[l]) {
        valid = false;
        break;
      }
    }
    if (valid) {
      answer++;
    }
  }
  return answer;
}
