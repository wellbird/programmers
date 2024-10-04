function solution(points, routes) {
  let answer = 0;
  const moveLog = [];
  routes.forEach((route) => {
    const routeMoveLog = [points[route[0] - 1]];
    for (let i = 0; i < route.length - 1; i++) {
      const log = move(points[route[i] - 1], points[route[i + 1] - 1]);
      routeMoveLog.push(...log);
    }
    moveLog.push(routeMoveLog);
  });
  const maxLength = Math.max(...moveLog.map((item) => item.length));
  for (let i = 0; i < maxLength; i++) {
    const obj = {};
    moveLog.forEach((log) => {
      if (log.length - 1 < i) return;
      const key = `${log[i]}`;
      obj[key] ? obj[key]++ : (obj[key] = 1);
    });
    for (const val of Object.values(obj)) {
      if (val > 1) answer++;
    }
  }
  return answer;
}

function move(from, to) {
  const ret = [];
  let [fromX, fromY] = from;
  const [toX, toY] = to;
  while (fromX !== toX || fromY !== toY) {
    if (fromX !== toX) {
      if (fromX < toX) fromX++;
      else if (fromX > toX) fromX--;
    } else {
      if (fromY < toY) fromY++;
      else if (fromY > toY) fromY--;
    }
    ret.push([fromX, fromY]);
  }
  return ret;
}
