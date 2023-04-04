const inputNumber = document.getElementById('inputNumber')
const listNumber = document.getElementById('listNumber')
const addNumber = document.getElementById('addNumber')
const editNumber = document.getElementById('editNumber')
const saveNumber = document.getElementById('saveNumber')
const listEditNumber = document.getElementById('listEditNumber')

if (localStorage.getItem('array_number') == null) {
  localStorage.setItem('array_number', JSON.stringify([]))
}

let arrayNumber = JSON.parse(localStorage.getItem('array_number'))

const addNumberFn = () => {
  if (!inputNumber.value != '' || isNaN(inputNumber.value)) {
    inputNumber.value = ''
    inputNumber.focus()
    return
  }
  arrayNumber.push(inputNumber.value)
  localStorage.setItem('array_number', JSON.stringify(arrayNumber))
  inputNumber.focus()
  inputNumber.value = ''
  loadNumber()
  orderTicket()
}

const editNumberFn = () => {
  listEditNumber.value = ''
  addNumberModal.style.display = 'block'
  arrayNumber.forEach((e) => {
    listEditNumber.value += e + ' '
  })
}

const saveNumberFn = () => {
  const newList = listEditNumber.value.trim().split(' ')
  arrayNumber = [...newList]
  localStorage.setItem('array_number', JSON.stringify(arrayNumber))
  addNumberModal.style.display = 'none'
  loadNumber()
  orderTicket()
}

addNumber.onclick = addNumberFn

editNumber.onclick = editNumberFn

saveNumber.onclick = saveNumberFn