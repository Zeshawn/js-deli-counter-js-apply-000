var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var served = katzDeliLine.shift(0);
    return "Currently serving " + served + "."
  }
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The Line is currently empty."
  }
  else{
    var listNum =["1.", "2.", "3."]
    
    
  }
}