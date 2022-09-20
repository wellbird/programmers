function solution(s) {
  let p = 0;
  let y = 0;
  s.split("").map((item, index) => {
    if (item === "P" || item === "p") {
      p++;
    }
    if (item === "Y" || item === "y") {
      y++;
    }
  });

  const answer = p === y ? true : false;

  return answer;
}
