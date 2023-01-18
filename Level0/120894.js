function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  for (let k in obj) {
    const regex = new RegExp(`${k}`, "g");
    numbers = numbers.replace(regex, obj[k]);
    if (!isNaN(Number(numbers))) {
      numbers = Number(numbers);
      break;
    }
  }
  return numbers;
}

// 다른사람의 풀이 1 - replace 한번에 쓰기, 두번째 인자로 함수 전달
// function solution(numbers) {
//     const obj = {
//         zero: 0, one: 1, two: 2, three: 3, four: 4,
//         five: 5, six: 6, seven: 7, eight: 8, nine: 9
//     };
//     const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
//         return obj[v];
//     });
//     return Number(num);
// }

// 다른사람의 풀이 2 - 자른 후 인덱스로 이어붙이기
// function solution(numbers) {
//     const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
//     for(let i = 0 ; i<number.length; i++){
//         numbers = numbers.split(number[i]).join(i)
//     }
//     return +numbers
// }
