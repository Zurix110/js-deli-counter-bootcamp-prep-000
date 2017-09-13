var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  for (var i = 0; i < katzDeliLine.length; i++) {
      var welcome = `Welcome, ${name}. You are number ${katzDeliLine[i]} in line.`;
  }
  return welcome;
}
