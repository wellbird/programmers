function solution(polynomial) {
  const polyArr = polynomial.split(" ");
  let constant = 0;
  let coefficient = 0;
  polyArr.map((item, index) => {
    if (item.includes("x")) {
      let coe = item.replace("x", "");
      if (coe === "") {
        coe = 1;
      }
      coefficient += Number(coe);
    } else {
      if (!isNaN(Number(item))) {
        constant += Number(item);
      }
    }
  });
  if (coefficient === 0) {
    if (constant === 0) {
      return 0;
    } else {
      return String(constant);
    }
  } else if (coefficient === 1) {
    if (constant === 0) {
      return "x";
    } else {
      return "x + " + String(constant);
    }
  } else {
    if (constant === 0) {
      return String(coefficient) + "x";
    } else {
      return String(coefficient) + "x + " + String(constant);
    }
  }
}
