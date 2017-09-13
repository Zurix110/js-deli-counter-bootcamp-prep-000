var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var i = 0;
  var welcome = `Welcome, ${name}. You are number ${katzDeliLine[i]} in line.`;
  return welcome;
}
