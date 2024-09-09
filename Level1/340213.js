function solution(video_len, pos, op_start, op_end, commands) {
  const videoLenSec = timeToSec(video_len);
  const opStartSec = timeToSec(op_start);
  const opEndSec = timeToSec(op_end);
  let posSec = timeToSec(pos);
  if (checkTimeInOp(posSec, opStartSec, opEndSec)) posSec = opEndSec;
  commands.forEach((command) => {
    switch (command) {
      case 'next':
        posSec = posSec + 10 > videoLenSec ? videoLenSec : posSec + 10;
        break;
      case 'prev':
        posSec = posSec - 10 < 0 ? 0 : posSec - 10;
        break;
    }
    if (checkTimeInOp(posSec, opStartSec, opEndSec)) posSec = opEndSec;
  });
  return timeToForm(posSec);
}

function timeToSec(time) {
  const [min, sec] = time.split(':').map(Number);
  return min * 60 + sec;
}

function timeToForm(secTime) {
  const min = ~~(secTime / 60) < 10 ? `0${~~(secTime / 60)}` : String(~~(secTime / 60));
  const sec = secTime % 60 < 10 ? `0${secTime % 60}` : String(secTime % 60);
  return min + ':' + sec;
}

function checkTimeInOp(pos, opStart, opEnd) {
  if (opStart <= pos && pos <= opEnd) return true;
  return false;
}

// 다른사람의 풀이 - Math.max, Math.min을 이용하여 시간 설정
// function toSeconds(time) {
//     const [minute, second] = time.split(":");
//     return minute * 60 + Number(second);
//   }
//   function solution(video_len, pos, op_start, op_end, commands) {
//     let position = toSeconds(pos);
//     const videoLen = toSeconds(video_len);
//     const opStart = toSeconds(op_start);
//     const opEnd = toSeconds(op_end);
//     if (opStart <= position && position <= opEnd) position = opEnd;
//     commands.forEach((command) => {
//       position += command === "next" ? 10 : -10;
//       position = Math.max(0, Math.min(position, videoLen));
//       if (opStart <= position && position <= opEnd) position = opEnd;
//     });
//     const minute = Math.floor(position / 60).toString().padStart(2, "0");
//     const second = (position % 60).toString().padStart(2, "0");
//     return minute + ":" + second;
// }
