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

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn50s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
// bornIn50s.forEach(item => log(item.year + ' ' + item.first))

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsFullName = inventors.map(inventor => inventor.first + ' ' + inventor.last)
// inventorsFullName.forEach(item => log(item))

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const orderedInventors = inventors.sort((firstP, secondP) => firstP.year > secondP.year ? 1 : -1)
// orderedInventors.forEach(item => log(`${item.year} - ${item.first}`))

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
},0)
// log(totalYearsLived)

// 5. Sort the inventors by years lived
const sortByLived = inventors.sort((firstP, secondP) => {
  return (firstP.passed - firstP.year) > (secondP.passed - secondP.year) ? -1 : 1
})
// sortByLived.forEach(item => log(`${item.passed - item.year} - ${item.first}`))

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabeticallySortedPeople = people.sort((a,b) => {
  const [alast] = a.split(', ')
  const [blast] = b.split(', ')
  return alast > blast ? 1 : -1
})
// alphabeticallySortedPeople.forEach(item => log(item))

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportations = data.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 0
  }
  obj[item]++
  return obj
}, {})
// log(transportations)
