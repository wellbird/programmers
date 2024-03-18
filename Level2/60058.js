function solution(p) {
  let answer = '';
  let left = 0;
  let right = 0;

  if (!p) return '';

  for (let k = 0; k < p.length; k++) {
    if (p[k] === '(') left++;
    else right++;

    if (left === right) {
      if (check(p.slice(0, k + 1))) {
        answer = p.slice(0, k + 1) + solution(p.slice(k + 1));
        return answer;
      } else {
        answer = '(' + solution(p.slice(k + 1)) + ')';

        for (let l = 1; l < k; l++) {
          if (p[l] === '(') {
            answer = answer + ')';
          } else {
            answer = answer + '(';
          }
        }
        return answer;
      }
    }
  }
}

function check(p) {
  let stack = [];
  for (let k = 0; k < p.length; k++) {
    if (p[k] === '(') stack.push('(');
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return true;
}
