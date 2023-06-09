function solution(myString, pat) {
  let reversePat = "";
  pat.split("").forEach((item, _) => {
    if (item === "A") {
      reversePat += "B";
    } else {
      reversePat += "A";
    }
  });
  return myString.includes(reversePat) ? 1 : 0;
}
