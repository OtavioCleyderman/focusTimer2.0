

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  finalAlert
}){
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

  function countDown(){
     timerTimeOut = setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        const isFinish = minutes <= 0 && seconds <= 0;

        if(isFinish){
          updateDisplay()
          resetControls()
          finalAlert()
          return
        }

        if(seconds <= 0) {
          seconds = 60 
          --minutes
        }

        minutesDisplay.textContent = String(minutes).padStart(2,"0")
        secondsDisplay.textContent = String(--seconds).padStart(2,"0")
        

        countDown()
      }, 1000)
    }

    function hold(){
      clearTimeout(timerTimeOut)
    }

    function reset() {
      updateDisplay()
      clearTimeout(timerTimeOut)
    }

    function updateDisplay(){
      minutesDisplay.textContent = "25"
      secondsDisplay.textContent = "00"
    }

    function addTimerDisplay(){
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2,"0'")
    }

    function decreaseTimerDisplay(){
      minutes = Number(minutesDisplay.textContent)
      if(minutes >= 10){
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2,"0'")
      } else if(minutes <= 1) {
        minutesDisplay.textContent = minutesDisplay.textContent
      } else {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 1).padStart(2,"0'")
      }
      
    }

  return{
    countDown,
    hold,
    reset,
    addTimerDisplay,
    decreaseTimerDisplay
  }
}

