function solution(my_string, alp) {
  const regExp = new RegExp(`${alp}`, "g");
  const token = alp.toUpperCase();
  return my_string.replace(regExp, token);
}
