export default function Controls({
  buttonPlay,
  buttonPause,
  buttonFlorest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  fillFlorest,
  fillRain,
  fillCoffeeShop,
  fillFireplace,
  rangeFlorest,
  rangeRain,
  rangeCoffeeShop,
  rangeFireplace
}){
  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function resetButtonsSound() {
    buttonFireplace.classList.remove('selected')
    fillFireplace.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
    fillCoffeeShop.classList.remove('selected')
    buttonRain.classList.remove('selected')
    fillRain.classList.remove('selected')
    buttonFlorest.classList.remove('selected')
    fillFlorest.classList.remove('selected')
    rangeFlorest.classList.remove('inputSelected')
    rangeRain.classList.remove('inputSelected')
    rangeCoffeeShop.classList.remove('inputSelected')
    rangeFireplace.classList.remove('inputSelected')
  }

  

  return {
    play,
    pause,
    reset,
    resetButtonsSound
  }
}