function solution(book_time) {
  book_time.sort();
  let arr = [];
  book_time.forEach((item) => {
    const time = item[0].split(":");
    const minute = Number(time[0]) * 60 + Number(time[1]);
    const idx = arr.findIndex((k) => k <= minute);
    if (idx === -1) {
      arr.push(nextTime(item[1]));
    } else {
      arr[idx] = nextTime(item[1]);
    }
  });
  return arr.length;
}

function nextTime(time) {
  const next = time.split(":");
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}
