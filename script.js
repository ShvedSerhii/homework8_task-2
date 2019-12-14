const { fromEvent } = rxjs 
const { debounceTime, map } = rxjs.operators

const values = []

const form = document.getElementById('form_value')
const search = document.getElementById('search')
const list = document.getElementById('list')

fromEvent(form, 'submit').pipe(
  map (x => values.push(x.target[0].value))
).subscribe(
  x => updateList(values) 
)

fromEvent(search, 'input').pipe(
  debounceTime(1000)
).subscribe(
  x => updateList(updateValues(x.target.value))
)

function updateList(arr) {
  let ul = document.createElement('ul')
  for (item of arr) {
    if (!item) continue
    let li = document.createElement('li')
    li.innerText = item
    ul.appendChild(li)
  }
  list.innerHTML = ''
  list.appendChild(ul)
}

function updateValues(str) {
  newValues = values.filter((item, index, arr) => {
    return item.indexOf(str) == 0
  })
  return newValues
}
