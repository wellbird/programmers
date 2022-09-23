function solution(seoul) {
  const idx = seoul.indexOf("Kim", 0);
  const answer = `김서방은 ${idx}에 있다`;
  return answer;
}

// 다른사람의 풀이
// function findKim(seoul){
//     var idx = 0;
//       for (var i = 0; i < seoul.length; ++i){
//         if (seoul[i] == "Kim"){
//             idx = i;
//             break;
//         }
//     }
//     return "김서방은 " + idx + "에 있다";
//   }
