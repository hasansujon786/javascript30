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
const rcLineWidth = document.querySelectorAll('.radio-line-widht')
const rcStrokeStyle = document.querySelectorAll('.radio-color')
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth

// Getting default configs
let defaultStrokeStyle = null
let defaultLineWidth = null
rcStrokeStyle.forEach(rdo => rdo.checked ? defaultStrokeStyle = rdo.value : '')
rcLineWidth.forEach(rdo => rdo.checked ? defaultLineWidth = rdo.value : '')
// setting up configs
ctx.strokeStyle = defaultStrokeStyle
ctx.lineWidth = defaultLineWidth
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let isDrawing = false
let lastX = 0
let lastY = 0

let isMulticolor = false
let hue = 0

let isMultiLineWidth = false
let multiLineDirection = true
let multilineSize = [5, 100]



function draw(e) {
  if(isDrawing == false) return

  if( isMultiLineWidth ) {
    if(ctx.lineWidth >= multilineSize[1] || ctx.lineWidth < multilineSize[0]) {
      multiLineDirection = !multiLineDirection
    }
    multiLineDirection ? ctx.lineWidth++ : ctx.lineWidth--
  }

  if(isMulticolor) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    hue++
    hue >= 360 ? hue = 0 : ''
  }

  ctx.beginPath()
  // start from
  ctx.moveTo(lastX, lastY)
  // go to
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]

}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)


function choseStrokeStyle(e) {
  let choosenColor = e.target.value
  if(choosenColor === 'multi') {
    isMulticolor = true
  } else {
    isMulticolor = false
    ctx.strokeStyle = choosenColor
  }
}
rcStrokeStyle.forEach(radio => radio.addEventListener('input', choseStrokeStyle))

function choseLineWidht(e) {
  const choosenWidth = e.target.value
  if(choosenWidth === 'multi') {
    isMultiLineWidth = true
    ctx.lineWidth = multilineSize[0]
  } else {
    isMultiLineWidth = false
    ctx.lineWidth = choosenWidth
  }
  log(ctx.lineWidth)
}
rcLineWidth.forEach(rdo => rdo.addEventListener('input', choseLineWidht))
