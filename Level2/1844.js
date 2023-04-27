// queue를 이용한 bfs 구현
function Node(firstData) {
  this.data = firstData;
  this.prev = null;
  this.next = null;
}
function Queue() {
  this.first = null;
  this.last = null;
  this.enqueue = function (node) {
    if (this.first === null) {
      this.first = node;
      this.first.next = node;
      this.last = node;
      this.last.prev = node;
    } else if (this.first === this.last) {
      this.first.prev = null;
      this.first.next = node;
      this.last = node;
      this.last.prev = this.first;
      this.last.next = null;
    } else if (this.last !== null) {
      let temp = this.last;
      temp.next = node;
      this.last = node;
      this.last.prev = temp;
    }
  };
  this.dequeue = function () {
    let returnValue = this.first.data;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else if (this.first !== this.last) {
      this.first = this.first.next;
    }
    return returnValue;
  };
  this.length = function () {
    if (this.first === null) return 0;
    else if (this.first === this.last) {
      return 1;
    } else if (this.first !== this.last) {
      let count = 1;
      let node = this.first;
      while (node.next !== null) {
        node = node.next;
        count++;
      }
      return count;
    }
  };
}
function solution(maps) {
  let answer = 0;
  let queue = new Queue();
  let loop = 0;
  let goalX = maps.length - 1;
  let goalY = maps[0].length - 1;
  let checkGoal = (arr) => arr[0] === goalX && arr[1] === goalY;
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];
  queue.enqueue(new Node([0, 0]));
  maps[0][0] = 0;
  loop = 1;
  while (queue.length() !== 0) {
    answer++;
    let nextLoop = 0;
    for (let n = 0; n < loop; n++) {
      let cur = queue.dequeue();
      if (checkGoal(cur)) {
        return answer;
      }
      for (let k = 0; k < 4; k++) {
        let nextX = cur[0] + dx[k];
        let nextY = cur[1] + dy[k];
        if (maps[nextX] !== undefined) {
          if (maps[nextX][nextY] === 1) {
            queue.enqueue(new Node([nextX, nextY]));
            maps[nextX][nextY] = 0;
            nextLoop++;
          }
        }
      }
    }
    loop = nextLoop;
  }
  return -1;
}
