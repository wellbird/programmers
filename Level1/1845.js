function solution(nums) {
  let sub_nums = [];
  nums.map((item, index) => {
    if (!sub_nums.includes(item)) {
      sub_nums.push(item);
    }
  });
  const answer =
    nums.length / 2 <= sub_nums.length ? nums.length / 2 : sub_nums.length;
  return answer;
}

// 다른사람의 풀이 - set을 이용하여 중복 제거
// function solution(nums) {
//     const max = nums.length / 2;
//     const arr = [...new Set(nums)];
//     return arr.length > max ? max : arr.length
//   }
