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
// ############################################################################ //

// getting elements
const player = document.querySelector('.player')
const video = player.querySelector('.player__video')
const porgressBar = player.querySelector('.progress__filled')
const toggleButton = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('button[data-skip]')
const ranges = player.querySelectorAll('input[type="range"]')

// functions
function toggePlay() {
  video.paused ? video.play() : video.pause()
}
function skipVideo() {
  video.currentTime += parseInt(this.dataset.skip)
}
function handleProgress() {
  let progress = (video.currentTime / video.duration) * 100
  porgressBar.style.flexBasis = `${progress}%`
}
function updateToggleIcon() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggleButton.textContent = icon;
}
function handleRangeUpdae() {
  const method = this.name
  video[method] = this.value
}

// event listeners
video.addEventListener('click', toggePlay)
video.addEventListener('play', updateToggleIcon)
video.addEventListener('pause', updateToggleIcon)
video.addEventListener('timeupdate', handleProgress)

skipButtons.forEach(skip => skip.addEventListener('click', skipVideo))
toggleButton.addEventListener('click', toggePlay)
ranges.forEach(rng => rng.addEventListener('input', handleRangeUpdae))
