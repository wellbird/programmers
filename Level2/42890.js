function solution(relation) {
  let answer = 0;
  const idxArr = [];
  const arr = Array.from({ length: relation[0].length }, () => Array(0));
  relation.forEach((item) => {
    item.forEach((key, idx) => {
      arr[idx].push(key);
    });
  });
  let k = 1;
  while (k <= arr.length && arr.length > 0) {
    const comb = getCombination(arr, k);
    comb.forEach((item) => {
      const set = new Set(item.combination);
      if (item.combination.length === set.size) {
        let possible = true;
        for (const idxs of idxArr) {
          if (idxs.every((element) => item.indices.includes(element))) {
            possible = false;
            break;
          }
        }
        if (possible) {
          idxArr.push(item.indices);
          answer++;
        }
      }
    });
    k++;
  }
  return answer;
}

function getCombination(arrs, selectNumber) {
  let results = [];
  let stack = [{ index: 0, selected: [] }];
  while (stack.length > 0) {
    let { index, selected } = stack.pop();
    if (selected.length === selectNumber) {
      let combination = [];
      for (let i = 0; i < arrs[selected[0]].length; i++) {
        let combinedStr = '';
        for (let j = 0; j < selected.length; j++) {
          combinedStr += arrs[selected[j]][i];
        }
        combination.push(combinedStr);
      }
      results.push({ combination: combination, indices: selected });
    } else {
      for (let i = arrs.length - 1; i >= index; i--) {
        stack.push({ index: i + 1, selected: selected.concat(i) });
      }
    }
  }
  return results;
}
