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


// ## Array Cardio Day 2
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const isSomeOlderThan19 = people.some(person => {
  const currentAge = (new Date()).getFullYear() - person.year
  return currentAge >= 19
})
log(isSomeOlderThan19)

const isEveryOlderThan19 = people.every(person => {
  const currentAge = (new Date()).getFullYear() - person.year
  return currentAge >= 19
})
log(isEveryOlderThan19)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findCommentWithId = comments.find(cm => cm.id === 823423)
log(findCommentWithId)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIndexWithId = comments.findIndex(cm => cm.id === 823423)
// log(findIndexWithId)
const afterCommentDelete = comments.filter((cm, idx) => idx != findIndexWithId)
// log(afterCommentDelete)
