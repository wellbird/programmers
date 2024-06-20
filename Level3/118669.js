class MinHeap {
  constructor() {
    this.list = [];
  }

  isValid(parentIndex, childIndex) {
    return this.list[parentIndex][2] <= this.list[childIndex][2];
  }

  getParentIndex(i) {
    return Math.floor((i + 1) / 2) - 1;
  }

  getChildIndex(i) {
    const left = (i + 1) * 2 - 1;
    return [left, left + 1];
  }

  push([gate, target, intensity]) {
    this.list.push([gate, target, intensity]);
    let childIndex = this.list.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (parentIndex >= 0 && !this.isValid(parentIndex, childIndex)) {
      [this.list[parentIndex], this.list[childIndex]] = [
        this.list[childIndex],
        this.list[parentIndex],
      ];
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  pop() {
    [this.list[0], this.list[this.list.length - 1]] = [
      this.list[this.list.length - 1],
      this.list[0],
    ];
    const value = this.list.pop();
    let parentIndex = 0;
    let [left, right] = this.getChildIndex(parentIndex);
    while (left < this.list.length) {
      let targetIndex =
        left === this.list.length - 1 || this.isValid(left, right)
          ? left
          : right;
      if (!this.isValid(parentIndex, targetIndex)) {
        [this.list[parentIndex], this.list[targetIndex]] = [
          this.list[targetIndex],
          this.list[parentIndex],
        ];
        parentIndex = targetIndex;
        [left, right] = this.getChildIndex(parentIndex);
      } else {
        break;
      }
    }
    return value;
  }

  get size() {
    return this.list.length;
  }
}

function solution(n, paths, gates, summits) {
  const nodes = new Array(n)
    .fill(null)
    .map(() => ({
      paths: [],
      intensity: Infinity,
      isGate: false,
      isSummit: false,
    }));

  paths.forEach(([i, j, w]) => {
    nodes[i - 1].paths.push([j - 1, w]);
    nodes[j - 1].paths.push([i - 1, w]);
  });

  gates.forEach((gate) => (nodes[gate - 1].isGate = true));
  summits.forEach((summit) => (nodes[summit - 1].isSummit = true));

  let minIntensity = Infinity;
  let minSummit = null;

  const minHeap = new MinHeap();
  for (const gate of gates) {
    nodes[gate - 1].intensity = 0;
    minHeap.push([gate - 1, gate - 1, 0]);
  }

  while (minHeap.size) {
    const [_, i, intensity] = minHeap.pop();
    const node = nodes[i];
    if (intensity > minIntensity) break;
    if (node.isSummit) {
      if (intensity < minIntensity) {
        minIntensity = intensity;
        minSummit = i + 1;
      } else if (intensity === minIntensity && i + 1 < minSummit) {
        minSummit = i + 1;
      }
      continue;
    }
    for (const [path, pathIntensity] of node.paths) {
      const newIntensity = Math.max(node.intensity, pathIntensity);
      if (newIntensity < nodes[path].intensity) {
        nodes[path].intensity = newIntensity;
        minHeap.push([path, path, newIntensity]);
      }
    }
  }

  return [minSummit, minIntensity];
}
