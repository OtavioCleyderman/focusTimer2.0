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
  bgColorFireplace
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
    sound.soundFlorest.volume = this.value
  })

  rangeRain.addEventListener('click', () => {
    sound.soundRain.volume = this.value
  })

  rangeCoffeeShop.addEventListener('click', () => {
    sound.soundCoffeeShop.volume = this.value
  })

  rangeFireplace.addEventListener('click', () => {
    sound.soundFireplace.volume = this.value
  })

  /* funções separadas para evitar o problema de ter que dar dois cliques para funcionar o botão */

  function clickedFlorest(){
    rangeFlorest.value = 0.5
    bgColorFlorest.classList.add('selected')
    fillFlorest.classList.add('selected')
  }

  function clickedRain(){
    rangeRain.value = 0.5
    bgColorRain.classList.add('selected')
    fillRain.classList.add('selected')
  }

  function clickedCoffeeShop(){
    rangeCoffeeShop.value = 0.5
    bgColorCoffeeShop.classList.add('selected')
    fillCoffeeShop.classList.add('selected')
  }

  function clickedFireplace(){
    rangeFireplace.value = 0.5
    bgColorFireplace.classList.add('selected')
    fillFireplace.classList.add('selected')
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




}

