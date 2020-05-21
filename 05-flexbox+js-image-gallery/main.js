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

const panels = document.querySelectorAll('.panel')
let selected = null

function togglePanel() {
  panels.forEach(panel => panel.classList.remove('open'))

  if(selected === this.classList[1]) {
    this.classList.remove('open')
    selected = null
  } else {
    this.classList.add('open')
    selected = this.classList[1]
  }
}

function togglePanelActive(e) {
  if(e.propertyName.includes('flex')) this.classList.toggle('open-active')
}

panels.forEach(panel => panel.addEventListener('click', togglePanel))
panels.forEach(panel => panel.addEventListener('transitionend', togglePanelActive))

