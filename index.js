var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var welcome = `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name - 1)} in line.`;
  return welcome;
}
