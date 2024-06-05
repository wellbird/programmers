function solution(n, build_frame) {
  const answer = [];
  for (const item of build_frame) {
    const [x, y, isPlate, isBuild] = item;
    if (isBuild) build(answer, x, y, isPlate);
    else destroy(answer, x, y, isPlate);
  }
  return answer.sort((a, b) =>
    a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]
  );
}

function checkPlate(arr, x, y) {
  if (arr.find(([a, b, isPlate]) => a === x && b === y - 1 && !isPlate))
    return true;
  else if (
    arr.find(([a, b, isPlate]) => a === x + 1 && b === y - 1 && !isPlate)
  )
    return true;
  else if (
    arr.find(([a, b, isPlate]) => a === x + 1 && b === y && isPlate) &&
    arr.find(([a, b, isPlate]) => a === x - 1 && b === y && isPlate)
  )
    return true;
  return false;
}

function checkPillar(arr, x, y) {
  if (y === 0) return true;
  else if (arr.find(([a, b, isPlate]) => a === x && b === y - 1 && !isPlate))
    return true;
  else if (arr.find(([a, b, isPlate]) => a === x && b === y && isPlate))
    return true;
  else if (arr.find(([a, b, isPlate]) => a === x - 1 && b === y && isPlate))
    return true;
  return false;
}

function build(arr, x, y, isPlate) {
  if (isPlate) {
    if (checkPlate(arr, x, y)) arr.push([x, y, isPlate]);
  } else {
    if (checkPillar(arr, x, y)) arr.push([x, y, isPlate]);
  }
}

function destroy(arr, x, y, isPlate) {
  const copy = arr.slice();
  const idx = arr.findIndex(
    ([a, b, iP]) => a === x && b === y && iP === isPlate
  );

  copy.splice(idx, 1);

  for (const item of copy) {
    const [xPos, yPos, iP] = item;
    if (iP) {
      if (!checkPlate(copy, xPos, yPos)) return;
    } else {
      if (!checkPillar(copy, xPos, yPos)) return;
    }
  }
  arr.splice(idx, 1);
}
