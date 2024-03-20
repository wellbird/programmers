class Node {
  constructor(value, count) {
    this.value = value;
    this.count = count;
    this.next = null;
  }
  getValue() {
    return this.value;
  }
  getCount() {
    return this.count;
  }
}

class Queue {
  constructor() {
    this.root = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(node) {
    if (this.root === null) {
      this.root = node;
      this.last = node;
      this.size += 1;
      return;
    }
    this.last.next = node;
    this.last = node;
    this.size += 1;
  }
  dequeue() {
    if (this.root === null) return null;
    const retNode = this.root;
    this.root = this.root.next;
    this.size -= 1;
    return retNode;
  }
  getSize() {
    return this.size;
  }
}

function solution(maps) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const startToLeverMap = maps.map((item) => item.split(''));
  const leverToEndMap = maps.map((item) => item.split(''));
  const startToLeverQueue = new Queue();
  const leverToEndQueue = new Queue();
  let startToLeverCount = 0;
  let leverToEndCount = 0;

  let startPoint = null;
  let leverPoint = null;
  let endPoint = null;

  for (let x = 0; x < maps.length; x++) {
    for (let y = 0; y < maps[x].length; y++) {
      if (maps[x][y] === 'S') {
        startPoint = [x, y];
        break;
      }
    }
    if (startPoint !== null) break;
  }

  startToLeverQueue.enqueue(new Node(startPoint, 0));
  startToLeverMap[startPoint[0]][startPoint[1]] = 'X';

  while (startToLeverQueue.getSize() > 0) {
    const curNode = startToLeverQueue.dequeue();
    const curPoint = curNode.getValue();
    for (let k = 0; k < dx.length; k++) {
      const newX = curPoint[0] + dx[k];
      const newY = curPoint[1] + dy[k];
      if (startToLeverMap[newX] && startToLeverMap[newX][newY]) {
        if (startToLeverMap[newX][newY] === 'L') {
          leverPoint = [newX, newY];
          startToLeverCount = curNode.getCount() + 1;
          break;
        }
        if (startToLeverMap[newX][newY] !== 'X') {
          const newNode = new Node([newX, newY], curNode.getCount() + 1);
          startToLeverMap[newX][newY] = 'X';
          startToLeverQueue.enqueue(newNode);
        }
      }
    }
    if (leverPoint !== null) break;
  }

  if (leverPoint === null) return -1;

  leverToEndQueue.enqueue(new Node(leverPoint, 0));
  leverToEndMap[leverPoint[0]][leverPoint[1]] = 'X';

  while (leverToEndQueue.getSize() > 0) {
    const curNode = leverToEndQueue.dequeue();
    const curPoint = curNode.getValue();
    for (let k = 0; k < dx.length; k++) {
      const newX = curPoint[0] + dx[k];
      const newY = curPoint[1] + dy[k];
      if (leverToEndMap[newX] && leverToEndMap[newX][newY]) {
        if (leverToEndMap[newX][newY] === 'E') {
          endPoint = [newX, newY];
          leverToEndCount = curNode.getCount() + 1;
          break;
        }
        if (leverToEndMap[newX][newY] !== 'X') {
          const newNode = new Node([newX, newY], curNode.getCount() + 1);
          leverToEndMap[newX][newY] = 'X';
          leverToEndQueue.enqueue(newNode);
        }
      }
    }
    if (endPoint !== null) break;
  }

  if (endPoint === null) return -1;

  return startToLeverCount + leverToEndCount;
}
