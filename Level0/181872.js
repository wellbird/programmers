function solution(myString, pat) {
  let idx = myString.lastIndexOf(pat) + pat.length;
  return myString.slice(0, idx);
}
