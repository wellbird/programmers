function solution(play_time, adv_time, logs) {
  const playTimeSec = timeToSec(play_time);
  const advTimeSec = timeToSec(adv_time);
  const viewerTimeLine = Array(playTimeSec).fill(0);
  logs.forEach((log) => {
    const [startTime, endTime] = log.split('-');
    const startTimeSec = timeToSec(startTime);
    const endTimeSec = timeToSec(endTime);
    viewerTimeLine[startTimeSec]++;
    viewerTimeLine[endTimeSec]--;
  });
  for (let k = 1; k < playTimeSec; k++) {
    viewerTimeLine[k] += viewerTimeLine[k - 1];
  }
  for (let k = 1; k < playTimeSec; k++) {
    viewerTimeLine[k] += viewerTimeLine[k - 1];
  }
  let curTime = 0;
  let maxViewer = viewerTimeLine[advTimeSec];
  for (let k = 0; k < playTimeSec - advTimeSec + 1; k++) {
    const viewer = viewerTimeLine[k + advTimeSec] - viewerTimeLine[k];
    if (maxViewer < viewer) {
      maxViewer = viewer;
      curTime = k + 1;
    }
  }
  return timeToFormat(curTime);
}

function timeToSec(str) {
  return str.split(':').reduce((acc, cur, idx) => {
    if (idx === 0) acc += +cur * 3600;
    else if (idx === 1) acc += +cur * 60;
    else acc += +cur;
    return acc;
  }, 0);
}

function timeToFormat(time) {
  const hour = ~~(time / 3600);
  const min = ~~((time % 3600) / 60);
  const sec = time % 60;
  return `${hour / 10 < 1 ? '0' + hour : hour}:${
    min / 10 < 1 ? '0' + min : min
  }:${sec / 10 < 1 ? '0' + sec : sec}`;
}
