import { lines } from "./numbers.js";

function doTheThing(numbers) {
  let startingPoint = 50;
  let zeroCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    let RorL = numbers[i].charAt(0);
    let numberPortion = Number(numbers[i].slice(1));

    if (RorL === "R") {
      startingPoint += numberPortion;
    } else if (RorL === "L") {
      startingPoint -= numberPortion;
    }

    if (startingPoint === 0 || startingPoint % 100 === 0) {
      zeroCount += 1;
    }
  }
  console.log(zeroCount);
}

doTheThing(lines);
