class Node {
  constructor(name) {
    this.name = name;
    this.parent = null;
    this.amount = 0;
  }
}

function solution(enroll, referral, seller, amount) {
  const answer = [];
  const graph = {};
  graph['center'] = new Node('center');
  enroll.forEach((name, idx) => {
    const newNode = new Node(name);
    const parentName = referral[idx];
    if (parentName === '-') {
      newNode.parent = graph['center'];
    } else {
      newNode.parent = graph[parentName];
    }
    graph[name] = newNode;
  });
  seller.forEach((name, idx) => {
    let curAmount = amount[idx] * 100;
    let curNode = graph[name];
    while (true) {
      if (curNode.parent === null || curAmount < 10) {
        curNode.amount += curAmount;
        break;
      }
      const remainAmount = Math.floor(curAmount / 10);
      curNode.amount += curAmount - remainAmount;
      curNode = curNode.parent;
      curAmount = remainAmount;
    }
  });
  enroll.forEach((name) => {
    answer.push(graph[name].amount);
  });
  return answer;
}
