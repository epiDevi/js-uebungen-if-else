function adult(){
  const input = Number(document.querySelector("#age").value);
  const output = document.querySelector("#result");
  let bol;
  if(input >= 18){
    bol= true;
  } else {
    bol= false;
  }
  if (bol){
    output.innerHTML="Volljährig";
  }
  else {
    output.innerHTML="Minderjährig";
  }
}