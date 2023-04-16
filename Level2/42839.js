function solution(numbers) {
  let primeArr = [];
  let answer = 0;
  function dfs(str, arr) {
    for (let k = 0; k < arr.length; k++) {
      let newStr = str + arr[k];
      let newArr = [...arr];
      newArr.splice(k, 1);
      if (isPrime(newStr)) {
        if (!primeArr.includes(Number(newStr))) {
          primeArr.push(Number(newStr));
          answer++;
        }
      }
      if (newArr.length !== 0) {
        dfs(newStr, newArr);
      }
    }
  }
  dfs("", numbers.split(""));
  return answer;
}
function isPrime(str) {
  let num = Number(str);
  if (num === 0 || num === 1) {
    return false;
  } else if (num === 2 || num === 3) {
    return true;
  } else {
    for (let k = 2; k <= Math.sqrt(num); k++) {
      if (num % k === 0) {
        return false;
      }
    }
  }
  return true;
}
