function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let k = 0; k < participant.length; k++) {
    if (participant[k] !== completion[k]) {
      return participant[k];
    }
  }
}
// 내 풀이는 해시라는 문제분류에 잘 맞지 않는 풀이

// 다른사람의 풀이 1 - 맵핑을 이용한 풀이 1 (완주자 배열을 {이름:완주자배열에 등장하는 횟수}로 맵핑하고, 그 맵에 참가자 이름 하나씩 넣어서 찾아볼때마다 횟수 떨어뜨려서 횟수 0나오는 값 찾기)
// var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

// 다른사람의 풀이 2 - 맵핑을 이용한 풀이 2 (배열의 길이가 긴 경우에는 이 코드가 sort를 사용한 코드에 비해 성능이 더 좋음)
// function solution(participant, completion) {
//     const map = new Map();
//     for(let i = 0; i < participant.length; i++) {
//         let a = participant[i],
//             b = completion[i];
//         map.set(a, (map.get(a) || 0) + 1);
//         map.set(b, (map.get(b) || 0) - 1);
//     }
//     for(let [k, v] of map) {
//         if(v > 0) return k;
//     }
//     return 'nothing';
// }

// 다른사람의 풀이 3 - 맵핑을 이용한 풀이 3
// function solution(participant, completion) {
//     var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
//     return participant.find(t=> {
//         if(dic[t])
//             dic[t] = dic[t]-1;
//         else
//             return true;
//     });
// }
