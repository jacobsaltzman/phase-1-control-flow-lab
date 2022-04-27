function scuberGreetingForFeet(num){
  if (num <= 400){
    return 'This one is on me!';
  }
  else if (num <= 2000){
    return 'That will be twenty bucks.';
  }
  else if(num <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else{
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  const newCity = (city == 'NYC') ? 'Ok, sounds good.' : 'No go.' ;
  return newCity; 
}

function switchOnCharmFromTip(tip){
  const isTipGenerous = tip;

  switch (isTipGenerous){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default: 
      return 'Bye.';
  }
}