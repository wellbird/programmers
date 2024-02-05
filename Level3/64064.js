function solution(user_id, banned_id) {
  let cases = [];
  const dfs = (idList, curCases) => {
    if (curCases.length === banned_id.length) {
      if (!checkDuplicate(curCases, cases)) {
        cases.push(curCases);
      }
      return;
    }
    for (let idx in idList) {
      if (checkCase(idList[idx], banned_id[curCases.length])) {
        const newCases = curCases.slice();
        newCases.push(idList[idx]);
        const newIdList = idList.slice();
        newIdList.splice(idx, 1);
        dfs(newIdList, newCases);
      }
    }
  };
  dfs(user_id, []);
  return cases.length;
}

function checkCase(userId, banId) {
  if (userId.length !== banId.length) return false;
  for (let idx = 0; idx < userId.length; idx++) {
    if (userId[idx] !== banId[idx] && banId[idx] !== '*') return false;
  }
  return true;
}

function checkDuplicate(curCases, cases) {
  for (let item of cases) {
    if (curCases.every((curCase) => item.includes(curCase))) return true;
  }
  return false;
}
