function solution(array) {
  const maxItem = Math.max(...array);
  const maxIndex = array.indexOf(maxItem);
  return [maxItem, maxIndex];
}
