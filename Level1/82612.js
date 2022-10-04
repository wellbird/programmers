function solution(price, money, count) {
  const total = price * (((count + 1) * count) / 2);
  const answer = total < money ? 0 : total - money;

  return answer;
}

// 다른사람의 풀이 - Math를 이용
// const solution = (price, money, count) => Math.max (price*count*(count+1)/2-money, 0)
