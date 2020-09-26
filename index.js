var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    console.log(`Welcome, ${name}. you are number 1 in line`)
  } else {
    katzDeliLine.push(name);
    console.log(`Welcome, ${name}. you are number ${katzDeliLine.length} in line`)
  }
}
