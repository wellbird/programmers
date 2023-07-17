function solution(my_string, queries) {
  let strArr = my_string.split("");
  queries.forEach((item, _) => {
    const firstPart = strArr.slice(0, item[0]);
    const secondPart = strArr.slice(item[0], item[1] + 1).reverse();
    const thirdPart = strArr.slice(item[1] + 1);
    strArr = [...firstPart, ...secondPart, ...thirdPart];
  });
  return strArr.join("");
}
