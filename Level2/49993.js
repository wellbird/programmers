function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.map((item, index) => {
    let regExp = new RegExp(`[^${skill}]`, "g");
    item = item.replace(regExp, "");
    if (skill.indexOf(item) === 0) {
      answer++;
    }
  });
  return answer;
}

// 다른사람의 풀이 - skill을 shift하면서 풀이(shift연산이 많아 속도가 느릴 줄 알았지만 그렇지 않음)
// function solution(skill, skill_trees) {
//     function isCorrect(n) {
//         let test = skill.split('');
//         for (var i = 0; i < n.length; i++) {
//             if (!skill.includes(n[i])) continue;
//             if (n[i] === test.shift()) continue;
//             return false;
//         }
//         return true;
//     }
//     return skill_trees.filter(isCorrect).length;
// }
