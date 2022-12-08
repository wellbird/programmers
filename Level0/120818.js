function solution(price) {
  return price >= 500000
    ? Math.floor(price - price * 0.2)
    : price >= 300000
    ? Math.floor(price - price * 0.1)
    : price >= 100000
    ? Math.floor(price - price * 0.05)
    : Math.floor(price);
}

// 다른사람의 풀이 - 할인률을 미리 배열에 저장한 후 계산
// function solution(price) {
//   let arr_discount = [
//     [500000, 0.2],
//     [300000, 0.1],
//     [100000, 0.05],
//   ];
//   for (let i = 0; i < arr_discount.length; i++)
//     if (arr_discount[i][0] <= price)
//       return Math.trunc(price * (1 - arr_discount[i][1]));
//   return price;
// }
