const log = (value) => {
  const body = document.querySelector('body')
  text = JSON.stringify(value, null, 2)
  const lists = document.querySelector('#log_model ul')
  if( !lists ) {
    body.insertAdjacentHTML('afterend',
      `<div id="log_model">
        <ul>
          <li>${text}</li>
        </ul>
      </div>`
    );
  } else {
    lists.insertAdjacentHTML('beforeend', `<li>${text}</li>`)
  }
}
window.addEventListener('keyup', (e) => {
  if(e.key === 'h' && e.altKey) {
    const model = document.querySelector('#log_model')
    model.classList.toggle('hide')
  }
})

const secondHand = document.querySelector('.second')
const minuteHnad = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')
const time = document.querySelector('.time')
// 1 0m  0
// 2 15m 7.5
// 3 30m 15
// 4 45m 22.5
// 5 60m 0

const updateClockHands = () => {
  let today = new Date()
  let seconds = today.getSeconds()
  let minutes = today.getMinutes()
  let hours = today.getHours()
  time.innerText = `${hours}: ${minutes}: ${seconds}`

  let secondDegres = seconds * 6
  let minuteDegres = minutes * 6
  let hourDegres = hours * 30 + (minutes / 2)

  secondHand.style.transform = `rotate(${secondDegres}deg) translateY(20px)`
  minuteHnad.style.transform = `rotate(${minuteDegres}deg)`
  hourHand.style.transform = `rotate(${hourDegres}deg)`
}

updateClockHands()
setInterval(() => updateClockHands(), 1000)


