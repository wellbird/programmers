function solution(array, commands) {
  let answer = [];
  for (let k of commands) {
    let list = array.slice(k[0] - 1, k[1]).sort((a, b) => {
      return a - b;
    });
    answer.push(list[k[2] - 1]);
  }
  return answer;
}

// 다른사람의 풀이 1 - filter 이용
// function solution(array, commands) {
//     return commands.map(command => {
//         const [sPosition, ePosition, position] = command
//         const newArray = array
//             .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//             .sort((a,b) => a - b)

//         return newArray[position - 1]
//     })
// }

// 다른사람의 풀이 2 - map 이용
// function solution(array, commands) {
//     var answer = [];

//     answer = commands.map(a=>{
//         return array.slice(a[0]-1,a[1]).sort((b,c)=>b-c)[a[2]-1];
//     })
//     return answer;
// }
