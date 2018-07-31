var katzDeliLine = ["Ada", "Grace"];
var listNum =["1.", "2.", "3."]


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


function currentLine(katzDeliLine, listNum){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
   var currentPerson = [];
   for (var i = 0; i < listNum.length; i++){
     currentPerson.push("The line is currently: " + listNum[i]+", " + katzDeliLine[i])
   }
    
    return currentPerson
  }
}