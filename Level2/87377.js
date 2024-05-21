function solution(line) {
  const point = [];
  const size = [Infinity, -Infinity, Infinity, -Infinity];

  for (let k = 0; k < line.length - 1; k++) {
    for (let l = k + 1; l < line.length; l++) {
      const [A1, B1, C1] = line[k];
      const [A2, B2, C2] = line[l];

      const mod = A1 * B2 - B1 * A2;
      if (!mod) continue;

      let x = B1 * C2 - B2 * C1;
      let y = A2 * C1 - A1 * C2;
      if (x % mod || y % mod) continue;

      x /= mod;
      y /= mod;

      point.push([x, y]);

      size[0] = Math.min(size[0], x);
      size[2] = Math.min(size[2], y);
      size[1] = Math.max(size[1], x);
      size[3] = Math.max(size[3], y);
    }
  }
  const answer = [...Array(size[3] - size[2] + 1)].map(() =>
    [...Array(size[1] - size[0] + 1)].map(() => '.')
  );
  point.forEach(([x, y]) => {
    answer[size[3] - y][x - size[0]] = '*';
  });

  return answer.map((item) => item.join(''));
}
