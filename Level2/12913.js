function solution(land) {
  land.map((item, index) => {
    if (index !== 0) {
      item[0] += Math.max(
        land[index - 1][1],
        land[index - 1][2],
        land[index - 1][3]
      );
      item[1] += Math.max(
        land[index - 1][0],
        land[index - 1][2],
        land[index - 1][3]
      );
      item[2] += Math.max(
        land[index - 1][0],
        land[index - 1][1],
        land[index - 1][3]
      );
      item[3] += Math.max(
        land[index - 1][0],
        land[index - 1][1],
        land[index - 1][2]
      );
    }
  });
  return Math.max(...land[land.length - 1]);
}
// DP에 대해서 공부하고 풀이해야함. 전형적인 DP문제
