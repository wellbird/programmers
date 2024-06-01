function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  while (deliveries.length || pickups.length) {
    let curCap = 0;
    let curLen = 0;
    for (let k = deliveries.length - 1; k >= 0; k--) {
      if (deliveries[k] > 0) {
        if (deliveries[k] <= cap - curCap) {
          curCap += deliveries[k];
          deliveries[k] = 0;
        } else {
          deliveries[k] -= cap - curCap;
          curCap = cap;
        }
        if (curLen < k + 1) curLen = k + 1;
      }
      if (deliveries[k] === 0 && k === deliveries.length - 1) deliveries.pop();
      if (curCap === cap) break;
    }
    curCap = cap;
    for (let k = pickups.length - 1; k >= 0; k--) {
      if (pickups[k] > 0) {
        if (pickups[k] <= curCap) {
          curCap -= pickups[k];
          pickups[k] = 0;
        } else {
          pickups[k] -= curCap;
          curCap = 0;
        }
        if (curLen < k + 1) curLen = k + 1;
      }
      if (pickups[k] === 0 && k === pickups.length - 1) pickups.pop();
      if (curCap === 0) break;
    }
    answer += curLen * 2;
  }
  return answer;
}
