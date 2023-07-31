function solution(arr) {
  if (arr.length > arr[0].length) {
    const zeroArr = Array(arr.length - arr[0].length).fill(0);
    arr = arr.map((item, _) => {
      return item.concat(zeroArr);
    });
  } else if (arr.length < arr[0].length) {
    const zeroArr = Array(arr[0].length).fill(0);
    while (arr.length < arr[0].length) {
      arr.push(zeroArr);
    }
  }
  return arr;
}
