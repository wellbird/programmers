class Node {
  constructor(row, col, cnt) {
    this.row = row;
    this.col = col;
    this.cnt = cnt;
    this.next = null;
  }
}

class Queue {
  constructor(node) {
    this.root = node;
    this.tail = node;
    this.size = 1;
  }
  getSize() {
    return this.size;
  }
  add(node) {
    if (this.root === null && this.tail === null) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }
  pop() {
    const ret = this.root;
    if (this.root.next === null) {
      this.root = null;
      this.tail = null;
    } else {
      this.root = this.root.next;
    }
    this.size -= 1;
    return ret;
  }
}

function solution(board) {
  let answer = -1;
  const boardArr = board.map((item) => item.split(''));
  const row = boardArr.length;
  const col = boardArr[0].length;
  const visitArr = Array.from({ length: row }, () => Array(col).fill(0));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let [startX, startY] = [null, null];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (boardArr[i][j] === 'R') {
        startX = i;
        startY = j;
        break;
      }
    }
    if (startX !== null && startY !== null) break;
  }
  const startNode = new Node(startX, startY, 0);
  const queue = new Queue(startNode);
  visitArr[startX][startY] = 1;

  while (queue.getSize()) {
    const curNode = queue.pop();
    const [curX, curY, curCnt] = [curNode.row, curNode.col, curNode.cnt];
    if (boardArr[curX][curY] === 'G') {
      answer = curCnt;
      break;
    }
    for (let k = 0; k < 4; k++) {
      let [newX, newY] = [curX, curY];
      while (
        0 <= newX &&
        newX < row &&
        0 <= newY &&
        newY < col &&
        boardArr[newX][newY] !== 'D'
      ) {
        newX += dx[k];
        newY += dy[k];
      }
      newX -= dx[k];
      newY -= dy[k];
      if (visitArr[newX][newY] === 0) {
        const newNode = new Node(newX, newY, curCnt + 1);
        queue.add(newNode);
        visitArr[newX][newY] = 1;
      }
    }
  }
  return answer;
}
