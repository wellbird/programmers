function solution(arr) {
  let answer = -1;
  let prvArr = [];
  let nextArr = arr;
  while (!check(prvArr, nextArr)) {
    answer++;
    prvArr = [...nextArr];
    nextArr = [];
    prvArr.forEach((item, _) => {
      if (item >= 50 && item % 2 === 0) {
        nextArr.push(item / 2);
      } else if (item < 50 && item % 2 === 1) {
        nextArr.push(item * 2 + 1);
      } else {
        nextArr.push(item);
      }
    });
  }
  return answer;
}

function check(arr1, arr2) {
  return (
    arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx])
  );
}
