function solution(s) {
  if (s.length <= 1) {
    return s.length;
  }
  let answer = Infinity;
  function recursion(sen, token, len) {
    if (sen.length < len) {
      if (answer > token.length + sen.length) {
        answer = token.length + sen.length;
      }
      return;
    }
    let newSen = sen;
    let newToken = sen.slice(0, len);
    let cnt = 0;
    while (newSen.indexOf(newToken) === 0) {
      newSen = newSen.slice(len);
      cnt++;
    }
    newToken = cnt === 1 ? token + newToken : token + cnt + newToken;
    recursion(newSen, newToken, len);
  }
  for (let k = 1; k <= ~~(s.length / 2); k++) {
    recursion(s, '', k);
  }
  return answer;
}

// 다른사람의 풀이 1 - 함수형 프로그래밍(속도는 느림)
// const solution = s => {
//     const range = [...Array(s.length)].map((_, i) => i + 1);
//     return Math.min(...range.map(i => compress(s, i).length));
//   };
//   const compress = (s, n) => {
//     const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
//     return make(
//       chunk(s, n).reduce(
//         ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
//         ['', '', 0]
//       )
//     );
//   };
//   const chunk = (s, n) =>
//     s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];

// 다른사람의 풀이 2 - 속도가 빠른 정석 풀이
// function solution(s) {
//     let minLen = s.length; //현재 스트링 길이로 시작한다.
//     // 압축하는 문자열 길이를 1개씩부터, s의 반 까지 시도한다.
//     top: for (let n = 1; n <= s.length / 2; n++) {
//       // 이번 트라이얼의 문자열 길이 초기화한다.
//       let curLen = 0;
//       for (let i = 0; i < s.length; i += n) {
//         // 이번 트라이얼의 길이 n 만큼 테스트를하고, 일치하는 수만큼 카운터로 계산
//         // 불일치 시에 다음으로 진행
//         let counter = 1;
//         let str = s.slice(i, i + n);
//         while (str === s.slice(i + n, i + 2 * n)) {
//           i += n;
//           counter++;
//         }
//         // 만약 하나도 일치가 없었으면, 테스트했던 문자열의 길이만큼만 더해주고,
//         // 일치한 문자열이 하나라도 존재했다면 카운터를 스트링으로 변환 후 길이를 더해줌.
//         if (counter !== 1) {
//           curLen += n + (counter + "").length;
//         } else {
//           // 1일경우 그냥 n을 더해주는데, 혹시 맨 마지막에 남은 문자열이 n이하일 경우
//           // 남는 수만 더해준다.
//           curLen += s.length < i + n ? str.length : n;
//         }
//         // 현재까지의 최소길이보다 현재길이가 커지는 순간, 다음 트라이얼 시작.
//         if (minLen <= curLen) continue top;
//       }
//       // 여기까지 살아남았으면 이번 길이가 최소길이다.
//       minLen = curLen;
//     }
//     return minLen;
//   }
