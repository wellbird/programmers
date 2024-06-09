function solution(n, m, x, y, r, c, k) {
  const [vertical, horizontal] = [Math.abs(x - r), Math.abs(y - c)];
  k -= vertical + horizontal;
  if (k < 0 || k % 2 !== 0) return 'impossible';

  let [down, left, right, up] = [0, 0, 0, 0];

  if (x < r) down += vertical;
  else up += vertical;
  if (y > c) left += horizontal;
  else right += horizontal;

  const addDown = Math.min(k / 2, n - Math.max(x, r));
  down += addDown;
  up += addDown;
  k -= addDown * 2;

  const addLeft = Math.min(k / 2, Math.min(y, c) - 1);
  left += addLeft;
  right += addLeft;
  k -= addLeft * 2;

  return (
    'd'.repeat(down) +
    'l'.repeat(left) +
    'rl'.repeat(k / 2) +
    'r'.repeat(right) +
    'u'.repeat(up)
  );
}
