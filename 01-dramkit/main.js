window.addEventListener('keydown', (e) => playSound(e.key))
const playOnClick = (key) => playSound(key)

function playSound(key) {
  const audio = document.querySelector(`audio[data-key=${key}]`)
  audio.pause()
  audio ? audio.play() : ''

  const btn = document.querySelector(`button[data-key=${key}]`)
  btn.classList.add('styled')

  setTimeout(() => btn.classList.remove('styled'), 300)
}
