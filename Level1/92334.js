function solution(id_list, report, k) {
  let answer = [];
  let log = {};
  let cnt = {};
  id_list.map((item, index) => {
    log[item] = [];
    cnt[item] = 0;
  });
  report.map((item, index) => {
    const users = item.split(" ");
    if (!log[users[0]].includes(users[1])) {
      log[users[0]].push(users[1]);
      cnt[users[1]]++;
    }
  });
  id_list.map((item, index) => {
    answer.push(log[item].filter((n) => cnt[n] >= k).length);
  });
  return answer;
}

// 다른사람의 풀이 - Map과 Set을 이용한 풀이
// function solution(id_list, report, k) {
//     let reports = [...new Set(report)].map(a=>{return a.split(' ')});
//     let counts = new Map();
//     for (const bad of reports){
//         counts.set(bad[1],counts.get(bad[1])+1||1)
//     }
//     let good = new Map();
//     for(const report of reports){
//         if(counts.get(report[1])>=k){
//             good.set(report[0],good.get(report[0])+1||1)
//         }
//     }
//     let answer = id_list.map(a=>good.get(a)||0)
//     return answer;
// }
