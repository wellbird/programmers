function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
    } else {
      let charCode = s.charCodeAt(i);
      if (charCode <= 90) {
        charCode += n;
        if (charCode > 90) {
          charCode -= 26;
        }
      } else {
        charCode += n;
        if (charCode > 122) {
          charCode -= 26;
        }
      }
      result += String.fromCharCode(charCode);
    }
  }
  return result;
}

// 다른사람의 풀이 1 - 아스키코드 없이  풀기 1
// function solution(s, n) {
//     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lower = "abcdefghijklmnopqrstuvwxyz";
//     var answer= '';

//     for(var i =0; i <s.length; i++){
//         var text = s[i];
//         if(text == ' ') {
//             answer += ' ';
//             continue;
//         }
//         var textArr = upper.includes(text) ? upper : lower;
//         var index = textArr.indexOf(text)+n;
//         if(index >= textArr.length) index -= textArr.length;
//         answer += textArr[index];
//     }
//     return answer;
// }

// 다른사람의 풀이 2 - 아스키코드 없이  풀기 2 아이디어 짱
// function solution(s, n) {
//     var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
//     return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
// }
