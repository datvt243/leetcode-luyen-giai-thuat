const log = console.log.bind(console);

const ROMAN2 = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

var intToRoman = function (num) {
  let nums = "";

  const ROMAN_NUMBER = Object.keys(ROMAN2)
    .sort((a, b) => b - a)
    .map((e) => +e);

  for (let j = 0, s = ROMAN_NUMBER.length; j < s; j++) {
    const el = ROMAN_NUMBER[j];
    while (num >= el) {
      num -= el;
      nums += ROMAN2[el];
    }
    if (!num) break;
  }

  return nums;
};

const test = [3749 /** MMMDCCLXIX */, 58, 1994];
console.log(intToRoman(test[0]));
