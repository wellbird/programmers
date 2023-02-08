function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    const gap = common[1] - common[0];
    return common[common.length - 1] + gap;
  } else {
    const gap = common[1] / common[0];
    return common[common.length - 1] * gap;
  }
}
