function solution(sticker) {
  const length = sticker.length;
  const arr1 = Array(length).fill(0);
  const arr2 = Array(length).fill(0);

  arr1[0] = sticker[0];
  arr1[1] = sticker[0];
  arr2[1] = sticker[1];

  for (let k = 2; k < length; k++) {
    if (k !== length - 1) {
      arr1[k] = Math.max(arr1[k - 1], arr1[k - 2] + sticker[k]);
    } else {
      arr1[k] = arr1[k - 1];
    }

    arr2[k] = Math.max(arr2[k - 1], arr2[k - 2] + sticker[k]);
  }

  return Math.max(arr1[length - 1], arr2[length - 1]);
}
