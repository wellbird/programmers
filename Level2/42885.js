function solution(people, limit) {
  let answer = 0;
  let rightPoint = 0;
  let leftPoint = people.length - 1;
  people.sort((a, b) => b - a);
  while (rightPoint <= leftPoint) {
    let sum = people[rightPoint];
    rightPoint++;
    while (sum + people[leftPoint] <= limit) {
      sum += people[leftPoint];
      leftPoint--;
    }
    answer++;
  }
  return answer;
}
// 해당 문제를 풀어보니 shift()메소드가 생각보다 시간효율성이 떨어짐 따라서 shift()와 pop() 메소드를 사용하지 않고 포인터를 설정하여 문제를 해결

// 다른사람의 풀이 - for문을 사용한 풀이
// function solution(people, limit) {
//     people.sort(function(a, b){return a-b});
//     for(var i=0, j=people.length-1; i < j; j--) {
//         if( people[i] + people[j] <= limit ) i++;
//     }
//     return people.length-i;
// }
