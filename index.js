var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  for (var i = 0; i < katzDeliLine.length; i++) {
      var welcome = `Welcome, ${name}. You are number ${i + 1} in line.`;
  }
  return welcome;
}

function nowServing(katzDeliLine, name) {
    if (katzDeliLine.length === 0) {
      var nowTaking = "There is nobody waiting to be served!";
    } else {
      var nowTaking = `Currently serving ${katzDeliLine[0]}.`;
    }
  katzDeliLine.shift();
  return nowTaking;
}
