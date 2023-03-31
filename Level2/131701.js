function solution(elements) {
  elements = elements.concat(elements);
  let set = new Set();
  for (let k = 0; k < elements.length / 2; k++) {
    let base = elements[k];
    set.add(base);
    for (let l = 1; l < elements.length / 2; l++) {
      base += elements[k + l];
      set.add(base);
    }
  }
  return set.size;
}
