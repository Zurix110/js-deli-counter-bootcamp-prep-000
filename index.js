var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var welcome = `Welcome, ${name}. You are number ${katzDeliLine[katzDeliLine.lengh - 1]} in line.`;
  return welcome;
}
