function solution(nums) {
  let answer = 0;

  for (let k = 0; k < nums.length - 2; k++) {
    for (let l = k + 1; l < nums.length - 1; l++) {
      for (let m = l + 1; m < nums.length; m++) {
        let odd_cnt = 0;
        if (nums[k] % 2 !== 0) {
          odd_cnt++;
        }
        if (nums[l] % 2 !== 0) {
          odd_cnt++;
        }
        if (nums[m] % 2 !== 0) {
          odd_cnt++;
        }
        if (odd_cnt % 2 !== 0) {
          const num = nums[k] + nums[l] + nums[m];
          let is_prime = true;
          for (let n = 3; n <= Math.sqrt(num); n += 2) {
            if (num % n === 0) {
              is_prime = false;
              break;
            }
          }
          if (is_prime) {
            answer++;
          }
        }
      }
    }
  }
  return answer;
}
