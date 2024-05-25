function solution(info, edges) {
  let answer = 0;
  const linkInfo = Array.from({ length: info.length }, () => []);
  for (const [parent, child] of edges) {
    linkInfo[parent].push(child);
  }
  function dfs(cur, next, sheep, wolf) {
    info[cur] === 0 ? sheep++ : wolf++;
    if (wolf >= sheep) return;
    if (answer < sheep) answer = sheep;

    const link = [...next, ...linkInfo[cur]];
    link.splice(next.indexOf(cur), 1);
    for (let node of link) {
      dfs(node, link, sheep, wolf);
    }
  }
  dfs(0, [0], 0, 0);
  return answer;
}
