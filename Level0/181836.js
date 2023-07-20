function solution(picture, k) {
  let answer = [];
  picture.forEach((item, _) => {
    let str = "";
    for (let i of item) {
      const token = i.repeat(k);
      str += token;
    }
    for (let i = 0; i < k; i++) {
      answer.push(str);
    }
  });
  return answer;
}
