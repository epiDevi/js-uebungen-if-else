function greaterThan(){
  const input = Number(document.querySelector("#age").value);
  const output = document.querySelector("#result");
  let bol;
  if(input >= 18){
    output.innerHTML="Ja, Du kannst Shisha rauchen ";
  } else {
    output.innerHTML="Du darfst noch nicht Shisha rauchen";
  }
  
}