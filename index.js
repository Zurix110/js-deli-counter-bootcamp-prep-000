var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  for (var i = 0; i < katzDeliLine.length; i++) {
      var welcome = `Welcome, ${name}. You are number ${i + 1} in line.`;
  }
  return welcome;
}

function nowServing(katzDeliLine, name) {

  for (var i = 0; i < katzDeliLine.length; i++) {
    var nowTaking = `Currently serving ${name[i]}.`;
    katzDeliLine.shift();
  }
  return nowTaking;
}
