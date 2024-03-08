function solution(tickets) {
  let answer = null;
  function dfs(visited, ticket) {
    if (!ticket.length) {
      if (answer === null) {
        answer = visited;
      } else {
        answer = compareArr(answer, visited);
      }
      return;
    }
    const startLocation = visited[visited.length - 1];
    ticket.forEach((item, index) => {
      if (item[0] === startLocation) {
        const newVisited = visited.slice();
        const newTicket = ticket.slice();
        newVisited.push(item[1]);
        newTicket.splice(index, 1);
        dfs(newVisited, newTicket);
      }
    });
  }
  dfs(['ICN'], tickets);
  return answer;
}

function compareArr(arr1, arr2) {
  for (let i in arr1) {
    if (arr1[i] === arr2[i]) continue;
    if (arr1[i] < arr2[i]) return arr1;
    return arr2;
  }
  return arr1;
}
