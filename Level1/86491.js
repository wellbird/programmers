function solution(sizes) {
  let long = 0;
  let short = 0;

  sizes.map((item, idx) => {
    let subLong = 0;
    let subShort = 0;

    if (item[0] >= item[1]) {
      subLong = item[0];
      subShort = item[1];
    } else {
      subLong = item[1];
      subShort = item[0];
    }

    if (subLong >= long) {
      long = subLong;
    }

    if (subShort >= short) {
      short = subShort;
    }
  });

  const answer = long * short;

  return answer;
}

/**
 * 
 * forEach와 sort를 이용한 다른사람의 풀이
 * 
 function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}
 */
