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
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const suggestions = document.querySelector('.suggestions')
const input = document.querySelector('.search')
const loading = document.querySelector('.loading')

const fetchData = async (url, beforefetch, afterfetch) => {
    beforefetch({loadingState: 'loading'})
    const blob = await fetch(url)
    const data = await blob.json()
    afterfetch({loadingState: 'done', data})
    return data
}

const findMatch = (wordToFind = '', cities = []) => {
  const regex = new RegExp(wordToFind, 'gi')
  return cities.filter(item => item.city.match(regex) || item.state.match(regex))
}

const updateView = (places, element, searchValue) => {
  const html = places.map(place => {
    let cityname = place.city
    let statename = place.state

    if(searchValue) {
      const regex = new RegExp(searchValue, 'gi')
      cityname = place.city.replace(regex, `<span class="hl">${searchValue}</span>`)
      statename = place.state.replace(regex, `<span class="hl">${searchValue}</span>`)
    }

    return `<li>
              <span class="name">${cityname}, ${statename}</span>
              <span class="population">${place.population}</span>
            </li>`
  }).join('')

  element.innerHTML = html
}

const beforefetch = ({loadingState}) => {
  loading.innerText = loadingState + '...'
}
const afterfetch = () => {
  loading.innerText = ''
}

(async function() {

  const allPlaces = await fetchData(endpoint, beforefetch, afterfetch)
  updateView(allPlaces, suggestions)

  const handaleInput = (e) => {
    let foundplaces = findMatch(e.target.value, allPlaces)
    updateView(foundplaces, suggestions, e.target.value)
  }

  input.addEventListener('input', handaleInput)
})()

// {
//     "city": "New York",
//     "growth_from_2000_to_2013": "4.8%",
//     "latitude": 40.7127837,
//     "longitude": -74.0059413,
//     "population": "8405837",
//     "rank": "1",
//     "state": "New York"
// },
