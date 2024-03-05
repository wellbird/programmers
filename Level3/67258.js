function solution(gems) {
  let answer = [1, gems.length];
  const cnt = new Set(gems).size;
  const map = new Map();
  gems.forEach((gem, idx) => {
    map.delete(gem);
    map.set(gem, idx);
    if (map.size === cnt) {
      const temp = [map.values().next().value + 1, idx + 1];
      answer = answer[1] - answer[0] > temp[1] - temp[0] ? temp : answer;
    }
  });
  return answer;
}
