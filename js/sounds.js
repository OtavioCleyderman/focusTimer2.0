
export default () => {
  // Audio.crossOrigin = 'anonymous';
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const soundFlorest = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true")
  const soundRain = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true")
  const soundCoffeeShop = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true")
  const soundFireplace = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true")


  soundFlorest.load = true
  soundFlorest.loop = true
  soundRain.load = true
  soundRain.loop = true
  soundCoffeeShop.load = true
  soundCoffeeShop.loop = true
  soundFireplace.load = true
  soundFireplace.loop = true

  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    kitchenTimer.play()
  }

  function pauseSounds(){
    soundFlorest.pause()
    soundRain.pause()
    soundCoffeeShop.pause()
    soundFireplace.pause()
  }

  return {
    pressButton,
    timeEnd,
    soundFlorest,
    soundRain,
    soundCoffeeShop,
    soundFireplace,
    pauseSounds
  }
  
}