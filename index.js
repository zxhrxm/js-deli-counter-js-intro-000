var katzDeli = []

function takeANumber(katzDeli, name) {
  if (katzDeli.length === 0) {
    return `Welcome, ${name}. you are number 1 in line`
  } else {
    katzDeli.push(name);
    return `Welcome, ${name}. you are number ${katzDeli.length} in line`
  }
}
