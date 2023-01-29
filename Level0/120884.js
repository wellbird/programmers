function solution(chicken) {
  let service = Math.floor(chicken / 10);
  let coupon = (chicken % 10) + service;
  while (coupon >= 10) {
    const order = Math.floor(coupon / 10);
    service += order;
    coupon = (coupon % 10) + order;
  }
  return service;
}
