function solution(n, cores) {
  if (n < cores.length) return n;
  n -= cores.length;
  let [left, right] = [1, Math.max(...cores) * n];
  while (left < right) {
    let mid = ~~((left + right) / 2);
    let capacity = 0;
    cores.forEach((core) => (capacity += ~~(mid / core)));
    capacity >= n ? (right = mid) : (left = mid + 1);
  }
  cores.forEach((core) => (n -= ~~((right - 1) / core)));
  for (let k = 0; k < cores.length; k++) {
    if (right % cores[k] === 0) {
      n--;
      if (n === 0) return k + 1;
    }
  }
}
