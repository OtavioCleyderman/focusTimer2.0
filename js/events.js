import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonDecrease,
  buttonFlorest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay,
  fillFlorest,
  fillRain,
  fillCoffeeShop,
  fillFireplace,
  rangeFlorest,
  rangeRain,
  rangeCoffeeShop,
  rangeFireplace,
  bgColorFlorest,
  bgColorRain,
  bgColorCoffeeShop,
  bgColorFireplace,
  buttonDay,
  buttonNight,
  html
} from "./elements.js";

let soundOn = false

export default function Events({
  timer, 
  controls,
  sound
}){

  buttonPlay.addEventListener('click', () => {
    timer.countDown()
    controls.play()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', () => {
    timer.hold()
    controls.pause()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', () => {
    timer.reset()
    controls.pause()
    sound.pressButton()
  })

  buttonAdd.addEventListener('click', () => {
    timer.addTimerDisplay()
    sound.pressButton()
  })

  buttonDecrease.addEventListener('click', () => {
    timer.decreaseTimerDisplay()
    sound.pressButton()
  })

 /* Pegando os valores de volume dos sons */
  rangeFlorest.addEventListener('click', () => {
    sound.soundFlorest.volume = rangeFlorest.value
  })

  rangeRain.addEventListener('click', () => {
    sound.soundRain.volume = rangeRain.value
  })

  rangeCoffeeShop.addEventListener('click', () => {
    sound.soundCoffeeShop.volume = rangeCoffeeShop.value
  })

  rangeFireplace.addEventListener('click', () => {
    sound.soundFireplace.volume = rangeFireplace.value
  })

  /* funções separadas para evitar o problema de ter que dar dois cliques para funcionar o botão */

  function clickedFlorest(){
    rangeFlorest.value = 0.5
    bgColorFlorest.classList.add('selected')
    fillFlorest.classList.add('selected')
    rangeFlorest.classList.add('inputSelected')
  }

  function clickedRain(){
    rangeRain.value = 0.5
    bgColorRain.classList.add('selected')
    fillRain.classList.add('selected')
    rangeRain.classList.add('inputSelected')
  }

  function clickedCoffeeShop(){
    rangeCoffeeShop.value = 0.5
    bgColorCoffeeShop.classList.add('selected')
    fillCoffeeShop.classList.add('selected')
    rangeCoffeeShop.classList.add('inputSelected')
  }

  function clickedFireplace(){
    rangeFireplace.value = 0.5
    bgColorFireplace.classList.add('selected')
    fillFireplace.classList.add('selected')
    rangeFireplace.classList.add('inputSelected')
  }

  function playSoundFlorest(){
    if(soundOn == false){
      soundOn = true
      sound.pauseSounds()
      sound.soundFlorest.play()
  
    } else {
      soundOn = false
      sound.pauseSounds()
      controls.resetButtonsSound()
    }
    
  }

  function playSoundRain(){
    if(soundOn == false){
      soundOn = true
      sound.pauseSounds()
      sound.soundRain.play()
      
    } else {
      soundOn = false
      sound.pauseSounds()
      controls.resetButtonsSound()
    }

  }

  function playSoundCoffeeShop(){
    if(soundOn == false){
      soundOn = true
      sound.pauseSounds()
      sound.soundCoffeeShop.play()
    } else {
      soundOn = false
      sound.pauseSounds()
      controls.resetButtonsSound()
    }
  }

  function playSoundFireplace(){
    if(soundOn == false){
      soundOn = true
      sound.pauseSounds()
      sound.soundFireplace.play()
    } else {
      soundOn = false
      sound.pauseSounds()
      controls.resetButtonsSound()
    }

  }

  /* ************************************************************************** */

  buttonFlorest.addEventListener('click', () => {
    clickedFlorest()
    playSoundFlorest()
  })

  buttonRain.addEventListener('click', () => {
    clickedRain()
    playSoundRain()
   })

  buttonCoffeeShop.addEventListener('click', () => {
    clickedCoffeeShop()
    playSoundCoffeeShop()
  })

  buttonFireplace.addEventListener('click', () => {
    clickedFireplace()
    playSoundFireplace()
  })


  /* Troca de tema */

  const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

  const initialColors = {
    bg: getStyle(html,"--bg"),
    bgCards: getStyle(html,"--bg-cards"),
    colorIcons: getStyle(html,"--color-icons"),
    colorPrimary: getStyle(html,"--color-primary")
  }
  const darkMode = {
    bg: "#121214",
    bgCards: "#29292E",
    colorIcons: "#C4C4CC",
    colorPrimary: "#FFFFFF"
  }
  

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


 const changeColors = (colors) => {
  Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}


  buttonDay.addEventListener('click', () => {
    buttonDay.classList.add('hide')
    buttonNight.classList.remove('hide')
    changeColors(darkMode)
  })

  buttonNight.addEventListener('click', () => {
    buttonNight.classList.add('hide')
    buttonDay.classList.remove('hide')
    changeColors(initialColors)
  })

}

