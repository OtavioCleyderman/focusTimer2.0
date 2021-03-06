 
import Events from "./events.js";
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Controls from "./controls.js"
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

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonDecrease,
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
  rangeFireplace,
  bgColorFlorest,
  bgColorRain,
  bgColorCoffeeShop,
  bgColorFireplace,
  buttonDay,
  buttonNight,
  html
})

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  finalAlert: sound.timeEnd
})



Events({timer, controls, sound})
