function solution(key, lock) {
  const keyLen = key.length;
  const lockLen = lock.length;
  const keyArr = [key];
  const holeIdx = [];
  for (let k = 0; k < 3; k++) {
    const newKey = Array.from({ length: keyLen }, () =>
      Array(keyLen).fill(null)
    );
    for (let row = 0; row < keyLen; row++) {
      for (let col = 0; col < keyLen; col++) {
        newKey[row][col] = keyArr[k][keyLen - 1 - col][row];
      }
    }
    keyArr.push(newKey);
  }
  for (let row = 0; row < lockLen; row++) {
    for (let col = 0; col < lockLen; col++) {
      if (lock[row][col] === 0) holeIdx.push([row, col]);
    }
  }
  for (let k = 0; k < keyArr.length; k++) {
    const curKey = keyArr[k];
    for (let row = -keyLen; row < lockLen; row++) {
      for (let col = -keyLen; col < lockLen; col++) {
        let filled = true;
        holeCheck: for (let i = 0; i < holeIdx.length; i++) {
          const [holeRow, holeCol] = holeIdx[i];
          const keyRow = holeRow - row;
          const keyCol = holeCol - col;
          if (
            keyRow >= 0 &&
            keyRow < keyLen &&
            keyCol >= 0 &&
            keyCol < keyLen
          ) {
            if (curKey[keyRow][keyCol] !== 1) {
              filled = false;
              break holeCheck;
            }
          } else {
            filled = false;
            break holeCheck;
          }
        }
        if (filled) {
          for (let i = 0; i < keyLen; i++) {
            for (let j = 0; j < keyLen; j++) {
              const lockRow = i + row;
              const lockCol = j + col;
              if (
                lockRow >= 0 &&
                lockRow < lockLen &&
                lockCol >= 0 &&
                lockCol < lockLen
              ) {
                if (lock[lockRow][lockCol] === 1 && curKey[i][j] === 1) {
                  filled = false;
                }
              }
            }
            if (!filled) break;
          }
        }
        if (filled) return true;
      }
    }
  }
  return false;
}
