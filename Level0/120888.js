function solution(my_string) {
  const stringArr = [];
  my_string.split("").map((item, index) => {
    if (!stringArr.includes(item)) {
      stringArr.push(item);
    }
  });
  return stringArr.join("");
}

// 다른사람의 풀이 - set을 이용한 중복제거
// function solution(my_string) {
//     return [...new Set(my_string)].join('');
// }
