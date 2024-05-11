function solution(friends, gifts) {
  let length = friends.length;
  const map = new Map();
  const gift = Array.from({ length: length }, () => Array(length).fill(0));
  const rank = Array(length).fill(0);
  const next = Array(length).fill(0);
  friends.forEach((item, idx) => {
    map.set(item, idx);
  });
  gifts.forEach((item) => {
    const [from, to] = item.split(' ');
    gift[map.get(from)][map.get(to)]++;
  });
  for (let k = 0; k < length; k++) {
    rank[k] = gift[k].reduce((a, b) => a + b, 0);
    for (let l = 0; l < length; l++) {
      rank[k] -= gift[l][k];
    }
  }
  for (let k = 0; k < length; k++) {
    for (let l = k + 1; l < length; l++) {
      if (k === l) continue;
      if (gift[k][l] > gift[l][k]) next[k]++;
      if (gift[k][l] < gift[l][k]) next[l]++;
      if (gift[k][l] === gift[l][k]) {
        if (rank[k] > rank[l]) next[k]++;
        if (rank[k] < rank[l]) next[l]++;
      }
    }
  }
  return Math.max(...next);
}
