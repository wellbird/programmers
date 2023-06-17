function solution(my_string, indices) {
  let arr = my_string.split("");
  indices.forEach((item, idx) => {
    arr[item] = "";
  });
  return arr.join("");
}
