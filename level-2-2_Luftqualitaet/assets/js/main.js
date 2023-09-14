function checkAirQuality(){
  const input = document.querySelector("#luft-range").value;
  const concern= document.querySelector("#concern");
  const effect = document.querySelector("#effect");
  const aqi = document.querySelector("#aqi");
  aqi.innerHTML= input;
  if (input <= 50){
    concern.innerHTML = "Level of health concern: Good ";
    effect.innerHTML = "Level of health effect: Little or no risk";
    document.body.style.backgroundColor="green";
  } else if( input > 50 && input <= 100){
    concern.innerHTML = "Level of health concern: Moderate ";
    effect.innerHTML = "Level of health effect: Acceptable quality"
    document.body.style.backgroundColor="yellow";
  } else {
    concern.innerHTML = "Level of health concern: Unhealthy for sensitive groups ";
    effect.innerHTML = "Level of health effect: Generable publics not likely affected";
    document.body.style.backgroundColor="orange";
  }

  
  
}