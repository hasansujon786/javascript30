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
let messages = [
  {title: 'This is an inbox layout.' },
  {title: 'Check one item' },
  {title: 'Hold down your Shift key' },
  {title: 'Check a lower item' },
  {title: 'Everything in between should also be set to checked' },
  {title: 'Try to do it without any libraries' },
  {title: 'Just regular JavaScript' },
  {title: 'Just regular JavaScript' },
  {title: 'Good Luck!' },
  {title: "Don't forget to tweet your result!" },
]

let checkboxes = document.querySelectorAll('input[type=checkbox]')
const deleteButton = document.querySelector('.delete')
const inbox = document.querySelector('.inbox')
// state
let msgIdxsToDelete = []
// init
const updateMsgView = (items) => {
  inbox.innerHTML = ''
  items.forEach(( item, idx ) => {
    inbox.insertAdjacentHTML('beforeend', `
      <div class="item">
        <label for="msg-${idx}">
          <input id="msg-${idx}" onclick="handleCkBoxClick(event, ${idx})" type="checkbox">
        </label>
        <p>${item.title}</p>
      </div>
    `)
  })
  checkboxes = document.querySelectorAll('input[type=checkbox]')
}
updateMsgView(messages)


const deleteMsgs = () => {
  if(msgIdxsToDelete.length === 0) return

  if(msgIdxsToDelete.length === 1) {
    messages = messages.filter((_, curIdx) => curIdx != msgIdxsToDelete[0])
  } else {
    messages.splice(msgIdxsToDelete[0], (msgIdxsToDelete[1] - msgIdxsToDelete[0]) + 1)
  }

  updateMsgView(messages)
  msgIdxsToDelete = []
}

const markOneItem = (idx) => {
  msgIdxsToDelete = [idx]
  checkboxes.forEach((ckBox, curIdx) => {
    idx != curIdx ? ckBox.checked = false : ''
  })
}

const markMultiItem = (idx) => {
  msgIdxsToDelete.push(idx)

  if(msgIdxsToDelete.length === 2) {
    // detect if user maked items from the bottom
    if(msgIdxsToDelete[0] > msgIdxsToDelete[1]) msgIdxsToDelete.sort()

    let markCurrentItem = false
    checkboxes.forEach((ckBox, curIdx) => {
      if(curIdx === msgIdxsToDelete[0] || curIdx === msgIdxsToDelete[1]) {
        markCurrentItem = !markCurrentItem
      }

      if(markCurrentItem) ckBox.checked = true
    })
  }
}


function handleCkBoxClick(e, idx) {
  e.shiftKey ? markMultiItem(idx) : markOneItem(idx)
}

deleteButton.addEventListener('click', deleteMsgs)
